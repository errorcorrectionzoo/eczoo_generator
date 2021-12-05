import html
import logging

logger = logging.getLogger(__name__)

import minilatextohtml



class DummyRefContext:
    def get_ref(self, ref_key_prefix, ref_key):
        return ('', '')

    def add_footnote(self, footnotetext):
        return ('', '')

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        return ('', '')



class MiniLatexToTextConverter(minilatextohtml.ToHtmlConverter):
    def __init__(self):
        super().__init__( DummyRefContext() )

    def to_text(self, x):
        htmlval = self.to_html(x)
        return html.unescape(htmlval)

    def html_wrap_in_tag(self, tagname, htmlcontent, **kwargs):
        return htmlcontent



class SearchIndexGenerator:
    def __init__(self):
        self.documents = []

        self.ml2t = MiniLatexToTextConverter()

    def _minilatextotext(self, x):
        #logger.debug(f"minilatex-to-text: {x=}")
        if x is None:
            return ''
        return self.ml2t.to_text(x)

    def add_code_page(self, code, href):
        d = code.fields_as_text_for_indexing(self._minilatextotext)
        d['_type'] = 'ecc'
        d['_page_id'] = f'c_{code.code_id}'
        d['_href'] = href

        self.documents.append( d )

    def get_store_dump(self):
        return {
            x['_page_id']: x
            for x in self.documents
        }
