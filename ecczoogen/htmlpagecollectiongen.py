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
            resource_info,
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
        self.resource_info = resource_info

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
            eczllm_scanner,
            zoo,
    ):
        super().__init__()
        self.site_generation_environment = site_generation_environment

        self.eczllm_environment = eczllm_environment
        self.eczllm_scanner = eczllm_scanner
        self.eczllm_html_fragment_renderer = \
            self.eczllm_environment.make_html_fragment_renderer()

        self.zoo = zoo

        self.figsdb = None

        self.jinja2env = self.site_generation_environment.jinja2env

        self.pages = {}
        self.page_for_code_ids = {}

        # remember on which page we defined terms with \begin{defterm}{XYZ}...\end{defterm}
        self.refinfo_for_defterms = {}

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

        self.jinja2env.filters['defterm_href'] = self._jfilter_defterm_href

        self.jinja2env.filters['llmcompile'] = self._jfilter_llmcompile
        self.jinja2env.filters['llmrender'] = self._jfilter_llmrender
        self.jinja2env.filters['llmrendertext'] = self._jfilter_llmrendertext

        self.jinja2env.filters['to_json'] = self._jfilter_to_json
        self.jinja2env.filters['to_repr'] = self._jfilter_to_repr

        self.jinja2env.filters['llm_text'] = \
            lambda llm: llm.llm_text


    def _jfilter_llmrendertext(self, obj, rendercontext=None):
        return eczllm.render_as_text(obj, self.eczllm_environment)

    def _jfilter_llmcompile(self, llm_text, is_block_level=False):
        return self.eczllm_environment.make_fragment(
            llm_text,
            standalone_mode=True,
            is_block_level=is_block_level
        )

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
    #     if isinstance(obj, mini~~~latextohtml.Mini~~~Latex):
    #         return markupsafe.Markup( obj.to_html(refcontext=refcontext) )
    #     return obj


    def create_page(self, htmlpage):

        zoo = self.zoo

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
        
            # # scan for any defterms in the content of the code, so that we can link
            # # it here.
            # scanner = eczllm.NodeDefTermScanner()
            # for code_id in htmlpage.code_id_list:
            #     code = zoo.get_code(code_id)
            #     scanner.scan_schemadatalike_obj(
            #         code,
            #         what=repr(code)
            #     )

        encountered_defterms = self.eczllm_scanner.get_encountered_defterms(
            resource_info=htmlpage.resource_info
        )

        encountered_defterms = list(encountered_defterms)
        logger.debug(f"defterms for page {htmlpage.resource_info=} "
                     f"are {encountered_defterms=}")

        for encountered_defterm in encountered_defterms:
            defterm_llm_text = encountered_defterm.defterm_llm_text
            defterm_href = self.site_generation_environment.prefix_base_url(
                f"{htmlpage.path()}#defterm-{encountered_defterm.defterm_safe_target_id}"
            )
            self.refinfo_for_defterms[defterm_llm_text] = \
                (defterm_llm_text, defterm_href)
            logger.debug(f"registered defterm: {self.refinfo_for_defterms = }")


    def finished(self):

        zoo = self.zoo

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

    def get_defterm_href(self, defterm):
        try:
            #logger.debug(f"{self.refinfo_for_defterms = }")
            return self.refinfo_for_defterms[defterm]
        except KeyError as e:
            raise ValueError(f"Unknown defterm reference: ‘{defterm}’")


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

    def _jfilter_defterm_href(self, defterm_llm_text):
        _, defterm_href = self.get_defterm_href(str(defterm_llm_text))
        return defterm_href

    def _jfilter_to_json(self, obj):
        return json.dumps(obj)

    def _jfilter_to_repr(self, obj):
        return repr(obj)

    def update_global_context(self, d):
        self.global_context.update(d)


    def generate(self, *, zoo, output_dir, additional_context={}):

        # generate all the family pages
        for page_name, htmlpage in self.pages.items():

            page_output_fname = htmlpage.pathext()
            logger.info(f"Generating page ‘{page_output_fname}’")

            page_context = dict(
                code_list=[
                    zoo.get_code(code_id)
                    for code_id in htmlpage.code_id_list
                ],
                pages=self.pages,
                **self.global_context,
                **htmlpage.info,
                **{k: v
                   for (k, v) in (htmlpage.context.items() if htmlpage.context else {})},
                **additional_context
            )

            page_template_name = htmlpage.template_name

            self.site_generation_environment.compile_template_with_llm_context(
                fn_template=page_template_name,
                page_output_fname=page_output_fname,
                eczllm_environment=self.eczllm_environment,
                page_context=page_context,
            )
