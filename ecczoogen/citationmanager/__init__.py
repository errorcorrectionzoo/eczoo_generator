import re
import json
import datetime
from urllib.parse import quote as urlquote
import base64
import copy
import collections
import warnings
import logging


import arxiv
import requests
import backoff

import citeproc
import citeproc.source
import citeproc.source.json

from . import _cslformatter


logger = logging.getLogger(__name__)


# ------------------------------------------------

_rx_arxiv_id_from_entryid = re.compile(
    # note: <arxivid> does NOT include the version number
    'https?://arxiv.org/abs/(?P<arxivid>.*?)(?P<versionnumstr>v(?P<versionnum>\d+))?$',
    flags=re.IGNORECASE
)
_rx_arxivid = re.compile(
    r'^(?P<arxivid>.*?)(?P<versionnumstr>v(?P<versionnum>\d+))?$',
    flags=re.IGNORECASE
)




_citation_prefix_list = [ 'arXiv', 'doi', 'preset', 'manual' ]
_citation_prefix_lower_list = [ fld.lower() for fld in _citation_prefix_list ]

class Citation:
    def __init__(self, *,
                 arxiv=None,
                 doi=None,
                 preset=None,
                 manual=None):

        self.arxiv = arxiv

        self.doi = doi

        # a predetermined standard entry that doesn't have an arXiv or DOI
        # identifier
        self.preset = preset 

        # manual citation (can contain LLM formatting)
        self.manual = manual

        if len([ x
                 for x in (self.arxiv, self.doi, self.preset, self.manual,)
                 if x is not None ]) != 1:
            raise ValueError(f"Must specify exactly one of arxiv (‘{self.arxiv}’), doi"
                             f" (‘{self.doi}’), preset (‘{self.preset}’) or manual "
                             f"(‘{self.manual}’)")

        self.full_citation_text_llm = None

    def has_full_citation(self):
        return self.full_citation_text_llm is not None

    def equals(self, other):
        if (self.arxiv is None) != (other.arxiv is None) \
           or self.arxiv != other.arxiv:
            return False
        if (self.doi is None) != (other.doi is None) \
           or self.doi != other.doi:
            return False
        if (self.preset is None) != (other.preset is None) \
           or self.preset != other.preset:
            return False
        if (self.manual is None) != (other.manual is None) \
           or self.manual != other.manual:
            return False
        
        return True

    def __repr__(self):
        return (
            f'Citation(arxiv={self.arxiv!r}, doi={self.doi!r}, preset={self.preset!r}'
            f'manual={self.manual!r}, '
            f'full_citation_text_llm={self.full_citation_text_llm!r})'
        )


def _get_single_kwarg(kwargs):
    # remove None values
    kwargs = {k: v
              for (k, v) in kwargs.items()
              if v is not None}

    if len(kwargs) != 1:
        raise ValueError("Must specify exactly one of the fields "
                         "arxiv=..., doi=..., or manual=...")

    (fld, val),  = kwargs.items()
    return (fld, val)



CACHE_MAX_AGE_DAYS = 90


class CitationTextManager:
    def __init__(self, citation_hints, eczllm_environment):
        super().__init__()

        self._citations_db = []
        self._citations_by_field = {
            fld: {}
            for fld in _citation_prefix_lower_list
        }

        self._fetched_info = {
            # _fetched_info['arxiv'][arxivid] = { ... arXiv API response... }
            # (both for arxivid with and w/o the version number, unless specific
            # version no is requested.)
            'arxiv': {},
            # _fetched_info['doi']['10.ZZZZZ'] = { ... citeproc-json via crossref API ... }
            'doi': {},
            
            # time stamp for the cache
            'fetched_date': datetime.datetime.now().isoformat(),
        }

        self._citation_hints = citation_hints
        self._preset_citations = self._citation_hints['presets']
        self._arxiv_to_doi_override = self._citation_hints['arxiv_to_doi_override']

        self.eczllm_environment = eczllm_environment

        logger.debug(f"Initialized citation manager.\n\n"
                     f"{self._preset_citations=}\n\n"
                     f"{self._arxiv_to_doi_override=}\n")


    def save_db_json(self, fw):
        json.dump(self._fetched_info, fw)

    def load_db_json(self, f):
        self.load_db_obj( json.load(f) )

    def load_db_json_s(self, s):
        self.load_db_obj( json.loads(s) )

    def load_db_obj(self, obj):
        if not (('arxiv' in obj) and ('doi' in obj) and ('fetched_date' in obj)):
            raise ValueError(f"Error in citation data, abort read: ‘{repr(obj)[:100]}’")
        t = datetime.datetime.fromisoformat(obj['fetched_date'])
        if (datetime.datetime.now() - t) > datetime.timedelta(days=CACHE_MAX_AGE_DAYS):
            logger.debug(f"Not using the requested cache file, it's too old.")
            raise RuntimeError("Cache is too old, not using it.")
        self._fetched_info = obj


    def add_citation(self, **kwargs):

        logger.debug(f"add_citation({kwargs=})")

        fld, val = _get_single_kwarg(kwargs)

        if val in self._citations_by_field[fld]:
            logger.debug(f"We already have a citation with {fld}=‘{val}’")
            return

        cit = Citation(**kwargs)
        self._citations_db.append(cit)

        self._citations_by_field[fld][val] = cit
            

    def add_encountered_citation(self, c):
        r"""
        Tool to add a citation as it was encountered when scanning LLM text.
        The argument `c` is expected to be a `EncounteredCitation` instance (see
        below).
        """
        citation_key_prefix = c.citation_key_prefix
        citation_key = c.citation_key
        if citation_key_prefix not in _citation_prefix_lower_list:
            valid_prefix_list = ", ".join(f"‘{fld}:’"
                                          for fld in _citation_prefix_list)
            raise ValueError(f"Invalid citation prefix ‘{citation_key_prefix}’.  All "
                             f"citation keys must begin with one of the prefixes "
                             f"{valid_prefix_list}.")
        self.add_citation(**{citation_key_prefix.lower(): citation_key})


    def get_citation(self, **kwargs):

        fld, val = _get_single_kwarg(kwargs)

        citation = self._citations_by_field[fld].get(val, None)
        if citation is None:
            logger.debug(
                f"Citation database is -> {self._citations_by_field}"
            )
            raise ValueError(f"Citation not found for {kwargs=} in internally "
                             f"constructed database!")
        return citation
        

    #
    # Fetch all information from APIs
    #
    def fetch_citation_info(self, arxivid_list=None, doi_list=None):

        if arxivid_list is None:
            arxivid_list = self._citations_by_field['arxiv'].keys()
        if doi_list is None:
            doi_list = self._citations_by_field['doi'].keys()

        arxivid_list = [
            arxivid
            for arxivid in arxivid_list
            if arxivid not in self._fetched_info['arxiv']
        ]

        doi_list = set([
            doi
            for doi in doi_list
            if doi not in self._fetched_info['doi']
        ])


        if arxivid_list:
            #
            # fetch meta-info from the arxiv for all encountered arXiv IDs, and
            # build the associated citation text endnotes.
            #
            big_slow_client = arxiv.Client(
                page_size=10000,
                delay_seconds=4,
                num_retries=5
            )

            remaining_arxivid_list = list(arxivid_list)
            while remaining_arxivid_list:

                # take a chunk of the arxiv ids list, max size 256 items
                chunk_arxivid_list = remaining_arxivid_list[:256]
                del remaining_arxivid_list[:256]

                logger.debug(f"Fetching a chunk of {len(chunk_arxivid_list)} citations "
                             f"by arXiv IDs ...")

                searchobj = arxiv.Search(
                    id_list=chunk_arxivid_list,
                )
                for result in big_slow_client.results(searchobj):
                    #
                    # build citation from the arxiv meta-information
                    #

                    m = _rx_arxiv_id_from_entryid.match(result.entry_id)
                    if m is None:
                        logger.warning(f"Unable to parse arXiv ID from {result.entry_id!r}")
                        continue

                    arxivid = m.group('arxivid').lower()
                    versionnum = m.group('versionnum')
                    arxivver = int(versionnum) if versionnum else None

                    logger.debug(
                        f"Processing received information for ‘{arxivid}’ (got v{arxivver})")

                    doi = None
                    if result.doi is not None and result.doi:
                        doi = str(result.doi)

                    # override the given DOI in exceptional cases where it might be
                    # missing, incomplete, or incorrect:
                    if arxivid in self._arxiv_to_doi_override:
                        override_doi = self._arxiv_to_doi_override[arxivid]
                        logger.debug(f"Overriding reported DOI (‘{doi}’) for arXiv "
                                     f"item ‘{arxivid}’ with manually specified DOI "
                                     f"‘{override_doi}’ given in citation hints")
                        doi = override_doi

                    result_d = dict(
                        entry_id=result.entry_id,
                        title=result.title,
                        authors=[a.name for a in result.authors],
                        #journal_ref=result.journal_ref,
                        doi=doi,
                        arxivid=arxivid,
                        arxivver=arxivver,
                    )

                    if not versionnum:
                        self._fetched_info['arxiv'][arxivid] = result_d
                    else:
                        self._fetched_info['arxiv'][f"{arxivid}v{versionnum}"] = result_d
                        if arxivid not in self._fetched_info['arxiv'] \
                           or self._fetched_info['arxiv'][arxivid]['arxivver'] is None \
                           or self._fetched_info['arxiv'][arxivid]['arxivver'] < arxivver:
                            self._fetched_info['arxiv'][arxivid] = result_d

                    if doi is not None:
                        doi_list.add(doi)




        #
        # same thing, but for DOIs.  We can query DOI/Crossref's API with content negotiation !
        #
        # curl -L https://doi.org/10.1103/PhysRevD.93.086006 -H 'Accept: text/bibliography; style=american-physics-society'
        # curl -L https://doi.org/10.1103/PhysRevD.93.086006 -H 'Accept: text/bibliography; style=bibtex'
        #
        # Python: we can use https://pypi.org/project/habanero/ !
        #
        # --> to get better control over the actual rendered citation, let's
        #     query the CSL-JSON and render the citation ourselves with a custom
        #     CSL style file.
        #
        
        if doi_list:

            logger.debug("Fetching citations by DOIs ...")

            req_session = requests.Session()

            # let's avoid having this in cleartext in the source file...
            addr = base64.b64decode('cGhmYWlzdEBnb'+'WFpbC5jb20=').decode('utf-8')
            headers = {
                'User-Agent':
                    f"ecczoogen-bibliography-build-script/0.1 "
                    f"(https://github.com/errorcorrectionzoo; mailto:{addr})",
                # when querying https://doi.org/<DOI> with accept csl+json type-->
                'Accept': 'application/vnd.citationstyles.csl+json',
            }
            req_session.headers.update(headers)

            for doi in doi_list:

                # fetch informatino as CSL-JSON
                self._fetched_info['doi'][doi] = \
                    _get_crossref_citeproc_json_object(doi, req_session)




    #
    # We build the actual citation texts here
    #
    def build_full_citation_text_database(self):

        bib_style = citeproc.CitationStylesStyle('eczoo-bib-style.csl', validate=False)


        # first go through the citation objects that were cited by arXiv ID

        for arxividstr, citeobj in self._citations_by_field['arxiv'].items():

            if arxividstr not in self._fetched_info['arxiv']:
                logger.warning(f"No arXiv info retreived for ‘{arxividstr}’")
                raise ValueError(
                    f"Could not retreive citation information for ‘{arxividstr}’  (note "
                    f"that you should write ‘math/0123456’ and not ‘math.CO/0005266’)"
                )

            d = self._fetched_info['arxiv'][arxividstr]

            if d['doi'] is not None:
                doi = d['doi']
                if doi in self._citations_by_field['doi']:
                    # already exists by DOI, merge objects -->
                    otherciteobj = self._citations_by_field['doi'][doi]
                    otherciteobj.arxiv = arxividstr
                    self._citations_by_field['arxiv'][arxividstr] = otherciteobj
                else:
                    citeobj.doi = doi
                    self._citations_by_field['doi'][doi] = citeobj
                #
                # don't process formatted text now, do it with the DOI. (it will
                # include arxiv info since we kept the arxiv field in the
                # citation object)
                continue
        
            # produce formatted citation text here
            # full_citation_text = \
            #     _get_full_citation_text_llm_for_pure_arxiv_entry(arxividstr, d)

            citeprocjsond = {
                'id': arxividstr,
                'type': 'article-journal',
                'author': [
                    {'family': n}
                    for n in d['authors']
                ],
                'title': d['title'],

            }
            full_citation_text = self._generate_citation_llm_from_citeprocjsond(
                citeprocjsond,
                bib_style=bib_style,
                what=f"citation ‘arXiv:{arxividstr}’"
            ).llm_text

            full_citation_text += \
                fr" \href{{https://arxiv.org/abs/{arxividstr}}}{{{arxividstr}}}"

            logger.debug(f"Citation arXiv:{arxividstr} → {full_citation_text}")

            citeobj.full_citation_text_llm = self.eczllm_environment.make_fragment(
                full_citation_text,
                what=f"Citation ‘arXiv:{arxividstr}’",
                standalone_mode=True,
            )


        # then go through the citation objects that were cited by DOI

        for doi, citeobj in self._citations_by_field['doi'].items():

            if doi not in self._fetched_info['doi']:
                logger.warning(f"No crossref/doi info retreived for ‘{doi}’")
                continue
            d = {'id': doi}
            d.update({k : v
                      for k, v in self._fetched_info['doi'][doi].items()
                      if k != 'id'})

            #logger.debug(f"{d=}")

            full_citation_text = self._generate_citation_llm_from_citeprocjsond(
                d,
                bib_style=bib_style,
                what=f'citation ‘doi:{doi}’'
            ).llm_text

            full_citation_text += \
                fr" \href{{https://doi.org/{doi}}}{{DOI}}"

            if citeobj.arxiv is not None:
                arxividstr = citeobj.arxiv
                full_citation_text += \
                    f"; \href{{https://arxiv.org/abs/{arxividstr}}}{{{arxividstr}}}"

            logger.debug(f"Citation doi:{doi} → {full_citation_text!r}")

            citeobj.full_citation_text_llm = self.eczllm_environment.make_fragment(
                full_citation_text,
                what=f"Citation ‘doi:{doi}’",
                standalone_mode=True,
            )

       
        #
        # Process preset entries
        #

        for preset, citeobj in self._citations_by_field['preset'].items():

            # don't use _make_llm_citation_text() because we should report
            # syntax errors in preset citations !

            try:
                full_citation_text = self._preset_citations[citeobj.preset]
            except KeyError:
                logger.error(f"Unknown preset citation: ‘{citeobj.preset}’")
                raise

            citeobj.full_citation_text_llm = self.eczllm_environment.make_fragment(
                full_citation_text,
                what=f"Citation ‘preset:{citeobj.preset}’",
                standalone_mode=True
            )


        #
        # Now also process manual entries
        #

        for manual, citeobj in self._citations_by_field['manual'].items():

            # don't use _make_llm_citation_text() because we should report
            # syntax errors in manual citations !

            citeobj.full_citation_text_llm = self.eczllm_environment.make_fragment(
                citeobj.manual,
                what=f"Manual citation ‘{citeobj.manual}’",
                standalone_mode=True
            )

        #
        # And we're done!
        #
        return
        


    # ---


    def _generate_citation_llm_from_citeprocjsond(self, citeprocjsond, bib_style, what):

        with warnings.catch_warnings():
            warnings.simplefilter('ignore', citeproc.source.MissingArgumentWarning)
            warnings.simplefilter('ignore', citeproc.source.UnsupportedArgumentWarning)

            citekey = citeprocjsond['id']

            logger.debug(f"Creating citation for entry ‘{citekey}’")

            # patch JSON for limitations of citeproc-py (?)
            #
            # E.g. for authors with 'name': ... instead of 'given': and 'family':

            if 'author' in citeprocjsond:
                citeprocjsond = copy.copy(citeprocjsond)
                for author in citeprocjsond['author']:
                    if 'name' in author and 'family' not in author and 'given' not in author:
                        author['family'] = author['name']
                        del author['name']

            # explore the citeprocjsond tree and make sure that all strings are
            # valid LLM markup
            def _sanitize(d):
                if isinstance(d, dict):
                    for k in d.keys():
                        d[k] = _sanitize(d[k])
                    return d
                elif isinstance(d, list):
                    for j, val in enumerate(d):
                        d[j] = _sanitize(val)
                    return d
                else:
                    try:
                        # try compiling the given value, suppressing warnings
                        self.eczllm_environment.make_fragment(
                            str(d),
                            standalone_mode=True,
                            silent=True
                        )
                    except Exception as e:
                        logger.debug(
                            f"Encountered invalid LLM string {d!r} when "
                            f"composing citation: {e}"
                        )
                        return r'\begin{verbatimtext}' + str(d) + r'\end{verbatimtext}'
                    return d

            #
            # Sanitizing the entire JSON object (which often includes the abstract,
            # etc.) is completely overkill.  So we first try to generate the entry
            # without sanitizing, and if it fails, we sanitize.
            #
            #_sanitize(citeprocjsond)

            def _gen_entry(citeprocjsond):
                bib_source = citeproc.source.json.CiteProcJSON([citeprocjsond])
                bibliography = citeproc.CitationStylesBibliography(bib_style, bib_source,
                                                                   _cslformatter)

                citation1 = citeproc.Citation([citeproc.CitationItem(citeprocjsond['id'])])
                bibliography.register(citation1)
                bibliography_items = [str(item) for item in bibliography.bibliography()]
                assert len(bibliography_items) == 1
                return bibliography_items[0]

            try:
                logger.debug(f"Attempting to generate entry for {citekey}...")
                return self.eczllm_environment.make_fragment(
                    _gen_entry(citeprocjsond),
                    what=what,
                    standalone_mode=True,
                    silent=True # don't report errors on logger
                )
            except Exception:
                logger.debug(f"Error while forming citation entry for {citekey}, trying "
                             f"again with LLM sanitization on")

            _sanitize(citeprocjsond)
            try:
                return self.eczllm_environment.make_fragment(
                    _gen_entry(citeprocjsond),
                    standalone_mode=True,
                    what=what
                )
            except Exception as e:
                logger.critical(f"EXCEPTION!! {e!r}")
                raise


# def _get_full_citation_text_llm_for_pure_arxiv_entry(arxividstr, d):
#     if len(d['authors']) < 8:
#         authors = list(d['authors'])
#         if len(authors) > 1:
#             authors[-1] = 'and  '+authors[-1]
#         authors_part = ", ".join(authors)
#     else:
#         authors_part = fr"{d['authors'][0]} \emph{{et al.}}"
#
#     return authors_part \
#         + fr", \href{{https://arxiv.org/abs/{arxividstr}}}{{arXiv:{arxividstr}}}"


# ----------------------------

# utility to get the citeproc-json for a given DOI, with backoff
# (cf. https://www.crossref.org/documentation/retrieve-metadata/rest-api/tips-for-using-the-crossref-rest-api/)

def _backoff_handler(details):
    logger.warning("Backing off {wait:0.1f} seconds after {tries} tries "
                   "calling function {target} with args {args} and kwargs "
                   "{kwargs}".format(**details), exc_info=True)

def _backoff_fatal_code(e):
    return e.response.status_code == 404

@backoff.on_exception(backoff.expo,
                      requests.exceptions.RequestException,
                      max_tries=12,
                      on_backoff=_backoff_handler,
                      giveup=_backoff_fatal_code)
def _get_crossref_citeproc_json_object(doi, req_session):

    doi_escaped = urlquote(doi)

    # r = req_session.get(
    #     f"https://api.crossref.org/works/{doi_escaped}/"
    #       f"transform/application/vnd.citationstyles.csl+json"
    # )
    r = req_session.get(
        f"https://doi.org/{doi_escaped}"
    )

    # The "Accept" header already set when setting up the session.

    if not r.ok:
        # raise errors
        r.raise_for_status()

    r.encoding = 'utf-8'
    d = r.json()

    return d



