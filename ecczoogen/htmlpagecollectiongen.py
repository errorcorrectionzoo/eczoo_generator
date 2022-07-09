import os
import os.path
import re
import json

import logging
logger = logging.getLogger(__name__)

import markupsafe

from . import code
from . import eczllm



# ------------------------------------------------------------------------------


class HtmlPage:
    def __init__(
            self,
            name,
            *,
            template_name,
            info={},
            ext='.html',
            code_id_list,
            context={},
            link_to_codes_here=False,
    ):
        super().__init__()
        self.name = name
        self.code_id_list = code_id_list
        self.template_name = template_name
        self.info = info
        self.ext = ext
        self.context = context
        self.link_to_codes_here = link_to_codes_here

    # where to copy the file in the output files
    def pathext(self):
        return self.name + self.ext

    # link path to expose in pages (w/o base_url)
    def path(self):
        if self.ext == '.html':
            # don't expose .html suffixes
            return self.name
        return self.name + self.ext





# ------------------------------------------------------------------------------




class HtmlPageCollection:
    def __init__(
            self,
            site_generation_environment,
            eczllm_environment,
    ):
        super().__init__()
        self.site_generation_environment = site_generation_environment

        self.eczllm_environment = eczllm_environment
        self.eczllm_html_fragment_renderer = \
            self.eczllm_environment.make_html_fragment_renderer()

        self.figsdb = None

        self.jinja2env = self.site_generation_environment.jinja2env

        self.pages = {}
        self.page_for_code_ids = {}

        self.global_context = {}

        # extend the jinja2 env to include our filter(s)
        self.jinja2env.filters['prebaseurl'] = \
            lambda x: self.site_generation_environment.prefix_base_url(x)

        self.jinja2env.filters['code_ref'] = self._jfilter_code_ref
        self.jinja2env.filters['code_ref_href'] = self._jfilter_code_ref_href
        self.jinja2env.filters['short_code_ref'] = self._jfilter_short_code_ref
        self.jinja2env.filters['format_footnote_label_html'] = \
            lambda foot_no: markupsafe.Markup( self.format_footnote_label_html(foot_no) )
        self.jinja2env.filters['format_citation_label_html'] = \
            lambda cite_no: markupsafe.Markup( self.format_citation_label_html(cite_no) )

        self.jinja2env.filters['llmrender'] = self._jfilter_llmrender
        self.jinja2env.filters['llmrendertext'] = self._jfilter_llmrendertext

        self.jinja2env.filters['to_json'] = self._jfilter_to_json

        self.jinja2env.filters['llm_text'] = \
            lambda llm: llm.llm_text


    def _jfilter_llmrendertext(self, obj, rendercontext=None):
        return eczllm.render_as_text(obj, self.eczllm_environment)

    def _jfilter_llmrender(self, obj, rendercontext=None):
        if isinstance(obj, list):
            return markupsafe.Markup( "".join([
                (markupsafe.Markup(f"<span class=\"paragraph-in-list\">")
                 + self._jfilter_llmrender(item, rendercontext=rendercontext)
                 + markupsafe.Markup(f"</span>"))
                for item in obj
            ]) )

        fragment = obj

        if rendercontext is None:
            # (object must be standalone-LLM)
            return markupsafe.Markup(
                fragment.render_standalone(self.eczllm_html_fragment_renderer)
            )
        return markupsafe.Markup(
            fragment.render(rendercontext)
        )

    # def _jfilter_to_html_with_notes(self, obj, refcontext=None):
    #     if isinstance(obj, list):
    #         return markupsafe.Markup( "".join([
    #             (f"<span class=\"paragraph-in-list\">"
    #              + item.to_html(refcontext=refcontext)
    #              + f"</span>")
    #             for item in obj
    #         ]) )
    #     if isinstance(obj, minilatextohtml.MiniLatex):
    #         return markupsafe.Markup( obj.to_html(refcontext=refcontext) )
    #     return obj


    def create_page(self, htmlpage):
        if htmlpage.name in self.pages:
            raise ValueError(f"A page with name ‘{htmlpage.name}’ already exists!")

        self.pages[htmlpage.name] = htmlpage

        if htmlpage.link_to_codes_here:
            for code_id in htmlpage.code_id_list:
                if code_id in self.page_for_code_ids:
                    raise ValueError(
                        f"Code ‘{code_id}’ is listed to be linked to both pages "
                        f"‘{self.page_for_code_ids[code_id]}’ and ‘{htmlpage.name}’"
                    )
                self.page_for_code_ids[code_id] = htmlpage.name
    

    def finished(self, zoo):
        # check if there are any codes that aren't included in any page, and
        # emit a warning.
        for code_id in zoo.all_codes():
            if code_id not in self.page_for_code_ids:
                logger.warning(f"Code ‘{code_id}’ is not included in any page")
    
    def get_code_href(self, code_id):
        try:
            page_name = self.page_for_code_ids[code_id]
        except KeyError:
            logger.error(f"Referenced code with ID ‘{code_id}’ is not included in any page",
                         exc_info=True)
            raise
        page = self.pages[page_name]
        page_path = page.path()
        full_page_path = self.site_generation_environment.prefix_base_url(page_path)
        if len(page.code_id_list) > 1:
            # there are multiple codes on this page, need #xxx anchor
            return f'{full_page_path}#ecc_{code_id}'
        # url suffices
        return full_page_path

    def get_image_filename_path_info(self, image_filename, resource_info):

        if resource_info.resource_type == 'code':
            code_id = resource_info.resource_id
            try:
                info = dict( self.figsdb[(resource_info, image_filename)] )
                info['prefixed_path'] = \
                    self.site_generation_environment.prefix_base_url( info['path'] )
                return info
            except KeyError:
                raise ValueError(f"Image ‘{image_filename}’ in {code_id} was not "
                                 f"included in image database!")

        raise ValueError(f"I don't know where to look for {image_filename!r} with "
                         f"{resource_parent=!r}")


    def set_image_filename_database(self, figsdb):
        self.figsdb = figsdb

    # def format_footnote_label_html(self, foot_no):
    #     fn_symb = alphacounter(foot_no)
    #     return fn_symb

    # def format_citation_label_html(self, cite_no, optional_cite_extra_html=None):

    #     cite_symb = f'{1+cite_no:d}'

    #     if optional_cite_extra_html is not None:
    #         return markupsafe.Markup(f'[{cite_symb}; {optional_cite_extra_html}]')
    #     return markupsafe.Markup(f'[{cite_symb}]')

    # def format_float_no_html(self, float_type, no):
    #     return romancounter(1 + no, lower=False)

    def _jfilter_code_ref(self, code):
        code_href = self.get_code_href( code.code_id )
        page_url_html = markupsafe.escape(code_href)
        code_name_html = markupsafe.escape(
            self._jfilter_llmrender(code.name)
        )
        return markupsafe.Markup(
            f'''<a href="{page_url_html}">{code_name_html}</a>'''
        )

    def _jfilter_code_ref_href(self, code):
        return self.get_code_href( code.code_id )

    def _jfilter_short_code_ref(self, code):
        code_href = self.get_code_href( code.code_id )
        page_url_html = markupsafe.escape(code_href)
        code_short_name_html = markupsafe.escape(
            self._jfilter_llmrender(code.short_name())
        )
        return markupsafe.Markup(
            f'''<a href="{page_url_html}">{code_short_name_html}</a>'''
        )

    def _jfilter_to_json(self, obj):
        return json.dumps(obj)

    def update_global_context(self, d):
        self.global_context.update(d)


    def generate(self, *, zoo, output_dir, additional_context={}):

        # generate all the family pages
        for page_name, htmlpage in self.pages.items():

            output_page_fname = htmlpage.pathext()
            logger.info(f"Generating page ‘{output_page_fname}’")

            def render_html_page(render_context):
                logger.debug(f"Rendering page ‘{page_name}’ ...")

                context = dict(
                    code_list=[
                        zoo.get_code(code_id)
                        for code_id in htmlpage.code_id_list
                    ],
                    pages=self.pages,
                    rc=render_context,
                    **self.global_context,
                    **htmlpage.info,
                    **{k: v
                       for (k, v) in (htmlpage.context.items() if htmlpage.context else {})},
                    **additional_context
                )

                try:
                    pg_template = self.jinja2env.get_template(htmlpage.template_name)
                    rendered_output = pg_template.render(context)
                except Exception as e:
                    logger.error(f"Error compiling template: {e}", exc_info=True)
                    raise

                logger.debug("Rendering page done.")

                return rendered_output

            llm_doc = self.eczllm_environment.make_document(render_html_page)

            htmlfragmentrenderer = self.eczllm_environment.make_html_fragment_renderer()

            full_rendered_output, render_context = llm_doc.render( htmlfragmentrenderer )

            # render the endnotes
            if '<RENDER_ENDNOTES/>' in full_rendered_output:
                endnotes_mgr = render_context.feature_render_manager('endnotes')
                full_rendered_output = full_rendered_output.replace(
                    '<RENDER_ENDNOTES/>',
                    endnotes_mgr.render_endnotes(
                        target_id='endnotes',
                        annotations=['sectioncontent'],
                        include_headings_at_level=2,
                    )
                )

            self.site_generation_environment.create_file_with_contents(
                full_rendered_output,
                fn_output=output_page_fname
            )
