import re
import html
import logging

logger = logging.getLogger(__name__)


from llm.fragmentrenderer.text import TextFragmentRenderer



class SearchIndexGenerator:
    def __init__(self):
        self.documents = None
        self._code_pages = []

    def add_code_page(self, code, href):
        self._code_pages.append( (code, href) )


    def _index_code_page(self, code, href):
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
        if schema.get('_llm', False):
            doc = self.eczllm_environment.make_document(
                value.render,
                feature_document_options=dict(
                    citations=dict(
                        use_endnotes=False,
                    ),
                ),
            )
            rendered_text, _ = doc.render( self.eczllm_text_fragment_renderer )
            return rendered_text
        return value

    def generate_search_index(self, eczllm_environment):

        # do all the indexing
        self.eczllm_environment = eczllm_environment
        self.eczllm_text_fragment_renderer = TextFragmentRenderer()

        self.documents = []

        for code, href in self._code_pages:
            self._index_code_page

        return {
            x['_page_id']: x
            for x in self.documents
        }
