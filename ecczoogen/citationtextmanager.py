
import htmlfromminilatex

import arxiv


class Citation:
    def __init__(self, *,
                 arxivid=None,
                 doi=None,
                 manual_citation_minilatex=None):
        self.arxivid = arxivid
        self.doi = doi
        self.manual_citation_minilatex = manual_citation_minilatex

        self.endnote_citation_text = None

    def equals(self, other):
        if (self.arxivid is None) != (other.arxivid is None) \
           or self.arxivid != other.arxivid:
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
            'arxivid': {},
            'doi': {},
            'manual_citation_minilatex': {},
        }

    def add_citation(self, **kwargs):
        cit = Citation(**kwargs)

        logger.debug(f"add_citation({kwargs=})")

        for c in self._citations_db:
            if c.arxivid is not None and c.arxivid == cit.arxivid:
                logger.debug(f"We already have a citation to arxiv id ‘{cit.arxivid}’")
                return
            if c.doi is not None and c.doi == cit.doi:
                logger.debug(f"We already have a citation to DOI ‘{cit.doi}’")
                return
            if c.manual_citation_minilatex is not None \
               and c.manual_citation_minilatex == cit.manual_citation_minilatex:
                logger.debug(f"We already have a citation ‘{cit.manual_citation_minilatex}’")
                return

        self._citations_db.append(cit)
        for fld in ('arxivid', 'doi', 'manual_citation_minilatex',):
            v = getattr(cit, fld, None)
            if v is not None:
                if v in self._citations_by_field[fld]:
                    self._citations_by_field[fld][v].add(cit)
                else:
                    self._citations_by_field[fld][v] = set( cit )
            

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





    #
    # We build the database here
    #
    def build_database(self):

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
            id_list=self._citations_by_field['arxivid'].keys()
        )
        for result in big_slow_client.results(searchobj):
                # build citation from the arxiv
                ............

        #
        # same thing, but for DOIs.  Query DOI/Crossref's API with content negotiation !
        #
        # curl -L https://doi.org/10.1103/PhysRevD.93.086006 -H 'Accept: text/bibliography; style=american-physics-society'
        # curl -L https://doi.org/10.1103/PhysRevD.93.086006 -H 'Accept: text/bibliography; style=bibtex'
        #
        # Python: use https://pypi.org/project/habanero/ !
        #
        
        ...........................

        
        #
        # Now also transform the manual_citation_minilatex into HTML (easy
        # peasy)
        #

        ...........................


        #
        # And we're done!
        #
        return
        



# ------------------------------------------------

# tool to scan for citations



EncounteredCitation = collections.namedtuple('citation_key_prefix',
                                             'citation_key',
                                             'encountered_where')


class CitationScannerRefContext(htmlfromminilatex.HtmlRefContext):
    def __init__(self, *, where=None, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # list of (citation_key_prefix.lower(), citation_key, where)
        self.encountered_citations = []
        self.cur_where = where

    def get_ref(self, refkey):
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
        self.tohtmlconverter = htmlfromminilatex.ToHtmlConverter(self.refcontext)

    def scan(self, s, where):
        self.refcontext.cur_where = where
        dummy = tohtmlconverter.to_html(s)
        # we can ignore dummy, our add_citation() callback will have fired for
        # any encountered citation.

    def scan_dict_tree(self, d, where):
        for k, v in d.items():
            if v is None:
                continue
            if isinstance(v, str):
                self.scan(v, f'{where}["{k}"]')
                continue
            if isinstance(v, dict):
                self.scan_dict_tree(v, f'{where}["{k}"]')
                continue
            if isinstance(v, list):
                for j, x in enumerate(v):
                    self.scan(v, f'{where}["{k}"][{j}]')
                continue

            logger.warning(f"I don't know how to scan property value {v!r}")
            

    def get_encountered_citations(self):
        # returns a list of pairs of (citation_key_prefix, citation_key)
        return self.refcontext.encountered_citations
