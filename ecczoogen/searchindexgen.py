import re
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



# class MiniLatexToTextConverter(minilatextohtml.ToHtmlConverter):
#     def __init__(self):
#         super().__init__( DummyRefContext() )

#     def to_text(self, x, *, what='(unknown)'):
#         htmlval = self.to_html(x, what=what)
#         return html.unescape(htmlval)

#     def html_wrap_in_tag(self, tagname, htmlcontent, **kwargs):
#         return htmlcontent



class SearchIndexGenerator:
    def __init__(self):
        self.documents = []

    def add_code_page(self, code, href):
        d = {}
        for fldinfo, value in code.iter_fields_recursive():

            fldname = fldinfo['fieldname']

            # flatten out array numbers e.g, "parents_3_detail" -> "parents_detail"
            fldname = re.sub('[.](\d+)[.]', '.', fldname)

            fldname = fldname.replace('.', '_')
            if isinstance(value, list):
                val = "\n".join([ self._get_value_string(v, fldinfo['schema'])
                                  for v in value ])
            else:
                val = self._get_value_string(value, fldinfo['schema'])
            #logger.debug(f"build search index -- d[{fldname}] -> {val=}")
            if fldname in d:
                val = d[fldname] + '\n' + val
            d[fldname] = val

        d['_type'] = 'ecc'
        d['_page_id'] = f'c_{code.code_id}'
        d['_href'] = href

        self.documents.append( d )

    def _get_value_string(self, value, schema):
        if value is None:
            return ''
        if schema.get('_minilatex', False):
            return value.text
        return value

    def get_store_dump(self):
        return {
            x['_page_id']: x
            for x in self.documents
        }
