import re
import json
from urllib.parse import quote as urlquote
import base64
import collections
import logging

from . import minilatextohtml

import arxiv
import requests
import backoff

import citeproc
import citeproc.source.json


logger = logging.getLogger(__name__)


# ------------------------------------------------

_rx_id_from_entryid = re.compile(
    'https?://arxiv.org/abs/(?P<arxivid>.*?)(?P<versionnumstr>v(?P<versionnum>\d+))?$',
    flags=re.IGNORECASE
)
_rx_arxivid = re.compile(
    r'^(?P<arxivid>.*?)(?P<versionnumstr>v(?P<versionnum>\d+))?$',
    flags=re.IGNORECASE
)


class Citation:
    def __init__(self, *,
                 arxiv=None,
                 doi=None,
                 manual_citation_minilatex=None):
        self.arxiv = arxiv
        self.doi = doi
        self.manual_citation_minilatex = manual_citation_minilatex

        self.full_citation_text_minilatex = None

    def has_full_citation(self):
        return self.full_citation_text_minilatex is not None

    def equals(self, other):
        if (self.arxiv is None) != (other.arxiv is None) \
           or self.arxiv != other.arxiv:
            return False
        if (self.doi is None) != (other.doi is None) \
           or self.doi != other.doi:
            return False
        if (self.manual_citation_minilatex is None) \
               != (other.manual_citation_minilatex is None) \
           or self.manual_citation_minilatex != other.manual_citation_minilatex:
            return False
        
        return True


class CitationTextManager:
    def __init__(self):
        self._citations_db = []
        self._citations_by_field = {
            'arxiv': {},
            'doi': {},
            'manual_citation_minilatex': {},
        }

        self._fetched_info = {
            # _fetched_info['arxiv']['XXXX.XXXXX'][v-num] = { ... arXiv API response... }
            'arxiv': {},
            # _fetched_info['doi']['10.ZZZZZ'] = { ... citeproc-json via crossref API ... }
            'doi': {}
        }


    def save_db_json(self, fw):
        json.dump(self._fetched_info, fw)

    def load_db_json(self, f):
        self._fetched_info = json.load(f)
        assert ('arxiv' in self._fetched_info)
        assert ('doi' in self._fetched_info)


    def add_citation(self, **kwargs):
        cit = Citation(**kwargs)

        logger.debug(f"add_citation({kwargs=})")

        for c in self._citations_db:
            if c.arxiv is not None and c.arxiv == cit.arxiv:
                logger.debug(f"We already have a citation to arxiv id ‘{cit.arxiv}’")
                return
            if c.doi is not None and c.doi == cit.doi:
                logger.debug(f"We already have a citation to DOI ‘{cit.doi}’")
                return
            if c.manual_citation_minilatex is not None \
               and c.manual_citation_minilatex == cit.manual_citation_minilatex:
                logger.debug(f"We already have a citation ‘{cit.manual_citation_minilatex}’")
                return

        self._citations_db.append(cit)
        for fld in ('arxiv', 'doi', 'manual_citation_minilatex',):
            v = getattr(cit, fld, None)
            if v is not None:
                if v in self._citations_by_field[fld]:
                    self._citations_by_field[fld][v].add(cit)
                else:
                    self._citations_by_field[fld][v] = set([cit])
            

    def get_citation(self, **kwargs):
        
        # give direct access to assign 'matches' from within nested function
        p = {'matches': None}

        def _refine_with(fld, value):
            if value is None:
                return

            new_matches = self._citations_by_field[fld].get(value, set())
            if p['matches'] is None:
                p['matches'] = new_matches
                return
            p['matches'].intersection_update(new_matches)

        for fld, value in kwargs.items():
            _refine_with(fld, value)
            if p['matches'] is not None and len(p['matches']) == 0:
                # no matches
                raise ValueError(f"Citation not found for {kwargs=} in internally "
                                 f"constructed database!")

        if len(p['matches']) > 1:
            logger.warning(f"Warning: multiple citations found for {kwargs=}. "
                           f"How is this even possible??  Probable bug in code.")

        return p['matches'].pop() # pick any element, should be a single element anyways



    def _has_fetched_info_for_arxivid(self, arxividstr):
        m = _rx_arxivid.match(arxividstr)
        if m is None:
            raise ValueError(
                f"Error parsing arXiv ID w/ possible version number: {arxividstr!r}"
            )

        arxivid = m.group('arxivid').lower()
        versionnum = m.group('versionnum')

        if arxivid not in self._fetched_info['arxiv']:
            return False
        if not versionnum:
            return True
        if versionnum in self._fetched_info['arxiv'][arxivid]:
            return True
        return False
        

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
            if not self._has_fetched_info_for_arxivid(arxivid)
        ]

        doi_list = set([
            doi
            for doi in doi_list
            if doi not in self._fetched_info['doi']
        ])

        #
        # fetch meta-info from the arxiv for all encountered arXiv IDs, and
        # build the associated citation text endnotes.
        #
        big_slow_client = arxiv.Client(
            page_size=10000,
            delay_seconds=4,
            num_retries=5
        )
        searchobj = arxiv.Search(
            id_list=arxivid_list,
        )
        for result in big_slow_client.results(searchobj):
            #
            # build citation from the arxiv meta-information
            #

            m = _rx_id_from_entryid.match(result.entry_id)
            if m is None:
                logger.warning(f"Unable to parse arXiv ID from {result.entry_id!r}")
                continue

            arxivid = m.group('arxivid').lower()
            versionnum = m.group('versionnum')
            arxivver = int(versionnum) if versionnum else None

            doi = None
            if result.doi is not None and result.doi:
                doi = str(result.doi)

            result_d = dict(
                entry_id=result.entry_id,
                title=result.title,
                authors=[a.name for a in result.authors],
                #journal_ref=result.journal_ref,
                doi=doi,
            )

            if arxivid not in self._fetched_info['arxiv']:
                self._fetched_info['arxiv'][arxivid] = {}
            self._fetched_info['arxiv'][arxivid][arxivver] = result_d

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
        
        for doi in doi_list:

            # fetch informatino as CSL-JSON
            self._fetched_info['doi'][doi] = _get_crossref_citeproc_json_object(doi)




    #
    # We build the actual citation texts here
    #
    def build_full_citation_text_database(self):

        # first go through the citation objects that were cited by arXiv ID

        for arxividstr, citeobjs in self._citations_by_field['arxiv'].items():

            m = _rx_arxivid.match(arxividstr)
            if m is None:
                raise ValueError(
                    f"Error parsing arXiv ID w/ possible version number: {arxividstr!r}"
                )

            arxivid = m.group('arxivid').lower()
            versionnum = m.group('versionnum')
            arxivver = int(versionnum) if versionnum else None

            if arxivid not in self._fetched_info['arxiv']:
                logger.warning(f"No arXiv info retreived for ‘{arxivid}’")
                continue
            if arxivver is not None:
                if arxivver not in self._fetched_info['arxiv'][arxivid]:
                    logger.warning(
                        f"No arXiv info retreived for ‘{arxivid}’ version ‘v{arxivver}’"
                    )
                    continue
                d = self._fetched_info['arxiv'][arxivid][arxivver]
            else:
                vers = sorted(self._fetched_info['arxiv'][arxivid].keys())
                d = self._fetched_info['arxiv'][arxivid][vers[-1]]

            if d['doi'] is not None:
                doi = d['doi']
                if doi in self._citations_by_field['doi']:
                    # already exists by DOI, merge objects -->
                    otherciteobj = self._citations_by_field['doi'][doi]
                    otherciteobj.arxiv = arxivid
                    self._citations_by_field['arxiv'][arxivid] = otherciteobj
                else:
                    citeobj.doi = doi
                    self._citations_by_field['doi'][doi] = citeobj
                #
                # don't process formatted text now, do it with the DOI. (it will
                # include arxiv info since we kept the arxiv field in the
                # citation object)
                continue
        
            # produce formatted citation text here
            citeobj.full_citation_text_minilatex = \
                _get_full_citation_text_minilatex_for_pure_arxiv_entry(arxividstr, d)



        # then go through the citation objects that were cited by DOI

        bib_style = citeproc.CitationStylesStyle('eczoo-bib-style', validate=False)

        for doi, citeobj in self._citations_by_field['doi'].items():

            if doi not in self._fetched_info['doi']:
                logger.warning(f"No crossref info retreived for ‘{doi}’")
                continue
            d = self._fetched_info['doi'][doi]

            bib_source = citeproc.source.json.CiteProcJSON([d])
            bibliography = citeproc.CitationStylesBibliography(bib_style, bib_source,
                                                               citeproc.formatter.html)

            bibliography.register(d['id'])
            bibliography_items = [str(item) for item in bibliography.bibliography()]
            assert len(bibliography_items) == 1
            full_citation_text = bibliography_items[0]

            if citeobj.arxivid is not None:
                arxividstr = citeobj.arxiv
                full_citation_text += \
                    f" \href{{https://arxiv.org/abs/{arxividstr}}}{{arXiv:{arxividstr}}}"

            citeobj.full_citation_text_minilatex = full_citation_text
            
        
        #
        # Now also process manual_citation_minilatex entries
        #

        for manual_citation_minilatex, citeobj in self._citations_by_field['manual_citation_minilatex'].items():
            citeobj.full_citation_text_minilatex = citeobj.manual_citation_minilatex



        #
        # And we're done!
        #
        return
        



def _get_full_citation_text_minilatex_for_pure_arxiv_entry(arxividstr, d):
    if len(d['authors']) < 8:
        authors = list(d['authors'])
        if len(authors) > 1:
            authors[-1] = 'and  '+authors[-1]
        authors_part = ", ".join(authors)
    else:
        authors_part = fr"{d['authors'][0]} \emph{{et al.}}"
    
    return authors_part \
        + fr", \href{{https://arxiv.org/abs/{arxividstr}}}{{arXiv:{arxividstr}}}"


# ----------------------------

# utility to get the citeproc-json for a given DOI, with backoff
# (cf. https://www.crossref.org/documentation/retrieve-metadata/rest-api/tips-for-using-the-crossref-rest-api/)

def _backoff_handler(details):
    logger.warning("Backing off {wait:0.1f} seconds after {tries} tries "
                   "calling function {target} with args {args} and kwargs "
                   "{kwargs}".format(**details), exc_info=True)

@backoff.on_exception(backoff.expo,
                      requests.exceptions.RequestException,
                      max_tries=8,
                      on_backoff=_backoff_handler)
def _get_crossref_citeproc_json_object(doi):

    doi_escaped = urlquote(doi)

    # let's avoid having this in cleartext in the source file...
    addr = base64.b64decode('cGhmYWlzdEBnb'+'WFpbC5jb20=').decode('utf-8')

    headers = {
        'User-Agent':
            f"ecczoogen-bibliography-build-script/0.1 "
            f"(https://github.com/errorcorrectionzoo; mailto:{addr})",
    }

    r = requests.get(
        f"https://api.crossref.org/works/{doi_escaped}/"
          f"transform/application/vnd.citationstyles.csl+json"
    )

    if not r.ok:
        # raise errors
        r.raise_for_status()

    r.encoding = 'utf-8'
    d = r.json()

    return d




# ------------------------------------------------

# tool to scan for citations



EncounteredCitation = collections.namedtuple('EncounteredCitation',
                                             ['citation_key_prefix',
                                              'citation_key',
                                              'encountered_where'])


class CitationScannerRefContext(minilatextohtml.HtmlRefContext):
    def __init__(self, *args, where=None, **kwargs):
        super().__init__(*args, **kwargs)

        # list of (citation_key_prefix.lower(), citation_key, where)
        self.encountered_citations = []
        self.cur_where = where

    def get_ref(self, ref_key_prefix, ref_key):
        # return (target_html, targethref)
        return ('','')

    def add_footnote(self, footnotetext):
        # return (footnotelabel_html, footnotehref)
        return ('','')

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        # return (citelabel_html, citehref)
        self.encountered_citations.append(
            EncounteredCitation(
                citation_key_prefix=citation_key_prefix.lower(),
                citation_key=citation_key,
                encountered_where=self.cur_where
            )
        )
        return ('','')


class MiniLatexCitationScanner:
    def __init__(self):
        super().__init__()

        self.refcontext = CitationScannerRefContext()
        self.tohtmlconverter = minilatextohtml.ToHtmlConverter(self.refcontext)

    def scan(self, s, where):
        #logger.debug(f"Scanning for citations: ‘{s}’")
        self.refcontext.cur_where = where
        dummy = self.tohtmlconverter.to_html(s)
        # we can ignore dummy, our add_citation() callback will have fired for
        # any encountered citation.

    def _scan_obj(self, v, where):
        #logger.debug(f"Scanning for citations: {v=!r}")
        
        if v is None:
            return
        if isinstance(v, dict):
            for k, x in v.items():
                self._scan_obj(x, f'{where}["{k}"]')
            return
        if isinstance(v, list):
            for j, x in enumerate(v):
                self._scan_obj(x, f'{where}[{j}]')
            return
        if isinstance(v, str):
            self.scan(v, where)
            return
        logger.warning(f"I don't know how to scan property value {v!r}")

    def scan_dict_tree(self, d, where):
        return self._scan_obj(d, where)

    def get_encountered_citations(self):
        # returns a list of pairs of (citation_key_prefix, citation_key)
        return self.refcontext.encountered_citations
