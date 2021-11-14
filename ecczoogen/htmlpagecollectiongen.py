import os
import os.path
import re

import logging
logger = logging.getLogger(__name__)

import markupsafe

from . import code

from . import minilatextohtml


# ------------------------------------------------------------------------------

class _HtmlObjectWrapper:
    def __init__(self, obj, tohtmlconverter, whatobject):
        super().__init__()
        self.obj = obj
        self.tohtmlconverter = tohtmlconverter
        self.whatobject = whatobject

    def _to_html_str(self, value, whatobject):
        try:
            return self.tohtmlconverter.to_html(value)
        except Exception as e:
            logger.error(f"Error converting ‘{whatobject}’ to HTML: {e}", exc_info=True)
            raise

    def _wrap_obj(self, val, whatobject):
        if val is None:
            return None
        if isinstance(val, _HtmlObjectWrapper):
            # already wrapped (?!)
            return val
        if isinstance(val, str):
            return _HtmlStringWrapper(val, self.tohtmlconverter, whatobject)
        if isinstance(val, list):
            return _HtmlListObjectWrapper(val, self.tohtmlconverter, whatobject)
        if isinstance(val, dict):
            return _HtmlDictObjectWrapper(val, self.tohtmlconverter, whatobject)
        #logger.debug(f"Got attr value ‘{val!r}’, generic type {type(val)}")
        return _HtmlObjectWrapper(val, self.tohtmlconverter, whatobject)

    def __bool__(self):
        return True if self.obj else False

    def __call__(self, *args, **kwargs):
        return self._wrap_obj(self.obj(*args, **kwargs), self.whatobject+'()')

    def __iter__(self):
        for j, a in enumerate(self.obj):
            yield self._wrap_obj(a, '{}[{}]'.format(self.whatobject, j))

    def __getattr__(self, attr):
        return self._wrap_obj( getattr(self.obj, attr) ,
                               '{}.{}'.format(self.whatobject, attr))

    def __getitem__(self, key):
        return self._wrap_obj( self.obj[key] ,
                              '{}[{!r}]'.format(self.whatobject, key) )

    def __repr__(self):
        return f'_HtmlObjectWrapper({self.obj!r})'


class _HtmlStringWrapper(_HtmlObjectWrapper):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # __bool__ def'd in base class

    def __str__(self):
        return self._to_html_str(self.obj, self.whatobject)

    # The __html__() method will ensure this string is seen as "HTML-safe" by
    # `markup.escape()`.
    #
    # This method works as an alternative to `markupsafe.Markup(..)`, for
    # strings that we don't want to pre-compile before we're sure that the
    # actual string is needed.
    def __html__(self):
        return self._to_html_str(self.obj, self.whatobject)

    def __add__(self, other):
        return self._wrap_obj(self.obj + other, '('+self.whatobject+'+str)')
    def __radd__(self, other):
        return self._wrap_obj(other + self.obj, '(str+'+self.whatobject+')')


class _HtmlListObjectWrapper(_HtmlObjectWrapper):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    # __bool__, __getitem__, __iter__ def'd in base class

    def __len__(self):
        return len(self.obj)

    def __bool__(self):
        return (True if self.obj else False)

    # custom conversion to string
    def __str__(self):
        return "".join(f"<p>{item}</p>" for item in self)

    # see the string wrapper object above (_HtmlStringWrapper) for info about
    # __html__
    def __html__(self):
        return "".join(f"<p>{item}</p>" for item in self)


class _HtmlDictObjectWrapper(_HtmlObjectWrapper):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def keys(self):
        return self.obj.keys()

    def items(self):
        the_items = [ (k, self._wrap_obj(v, '{}[{!r}]'.format(self.whatobject, k)))
                      for (k,v) in self.obj.items() ]
        return the_items


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



class HtmlFootnote:
    def __init__(self, *, no=None, footnote_text_html=None):
        self.no = no
        self.footnote_text_html = footnote_text_html

class HtmlCitation:
    def __init__(self, *, no=None, citation_obj):
        self.no = no
        self.citation_obj = citation_obj

    def full_citation_text_html(self):
        return minilatextohtml.ToHtmlConverter(None) \
                              .to_html(self.citation_obj.full_citation_text_minilatex)


# _rx_ref_code = re.compile(r'^code:(?P<code_id>.*)$', flags=re.IGNORECASE)
# _rx_cite_arxiv = re.compile(r'^arxiv:(?P<arxivid>[-a-zA-Z/_.+0-9]+)$', flags=re.IGNORECASE)
# _rx_cite_doi = re.compile(r'^doi:(?P<doi>.*)$', flags=re.IGNORECASE)


# ------------------------------------------------------------------------------

class RefContextForHtmlConverter(minilatextohtml.HtmlRefContext):
    def __init__(self, htmlpagecollection, html_page_notes):
        super().__init__()
        self.htmlpagecollection = htmlpagecollection
        self.html_page_notes = html_page_notes

    def _get_ref_code(self, code_id):
        code = self.htmlpagecollection.zoo.get_code(code_id)
        code_href = self.htmlpagecollection.get_code_href(code_id)
        code_name_html = minilatextohtml.ToHtmlConverter(self).to_html(code.name)
        return (code_name_html, code_href)
        
    def get_ref(self, ref_key_prefix, ref_key):
        if ref_key_prefix != 'code':
            raise ValueError(f"Invalid ref: ‘{refkey}’.  Such references must be "
                             f"to a code; use a ref label of the form ‘code:<code-id>’.")

        return self._get_ref_code(ref_key)
        

    def _check_html_page_notes_context(self):
        if self.html_page_notes is None:
            raise ValueError(
                f"You cannot use ‘\\footnote’ here, because the text is being rendered "
                f"outside of the main page content.  (You cannot use citations or "
                f"footnotes in code names or domain/kingdom names, for instance, since "
                f"they might be rendered as links in the side navigation links.)"
            )

    def add_footnote(self, footnote_text_html):
        # return (footnotelabel_html, footnotehref)

        self._check_html_page_notes_context()

        footnote = HtmlFootnote(footnote_text_html=footnote_text_html)
        foot_no = self.html_page_notes.add_footnote(footnote)
        foot_label_html = self.htmlpagecollection.format_footnote_label_html(self.foot_no)
        return (foot_label_html, f'#fn-{foot_no}')

    def _get_citation_obj(self, citation_key_prefix, citation_key):

        citation_obj = self.htmlpagecollection.citation_manager.get_citation(
            **{citation_key_prefix.lower(): citation_key}
        )

        citation = HtmlCitation(citation_obj=citation_obj)
        return citation

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        # return (citelabel_html, citehref)

        self._check_html_page_notes_context()

        citation = self._get_citation_obj(citation_key_prefix, citation_key)
        cite_no = self.html_page_notes.add_citation(citation)
        cite_label_html = \
            self.htmlpagecollection.format_citation_label_html(cite_no,
                                                               optional_cite_extra_html)
        return (cite_label_html, f'#cite-{cite_no}')



# ------------------------------------------------------------------------------

class HtmlPageNotes:
    def __init__(self, htmlpagecollection):
        self.foot_no = 0 # last attributed footnote number
        self.footnotes = []
        self.cite_no = 0 # last attributed citation number
        self.citations = []

        self.htmlpagecollection = htmlpagecollection

    def add_footnote(self, footnote):
        self.foot_no += 1

        foot_no = self.foot_no
        #foot_label_html = self.htmlpagecollection.format_footnote_label_html(self.foot_no)

        footnote.no = foot_no
        #footnote.label_html = foot_label_html

        self.footnotes.append( footnote )
        return (foot_no, foot_label_html)

    def add_citation(self, citation):

        # see if citation is already there
        for c in self.citations:
            if c.citation_obj.equals(citation.citation_obj):
                return c.no #(c.no, c.label_html)

        # add it if not there already

        self.cite_no += 1

        cite_no = self.cite_no
        #cite_label_html = self.htmlpagecollection.format_citation_label_html(cite_no)

        citation.no = cite_no
        #citation.label_html = cite_label_html

        self.citations.append( citation )
        return cite_no #(cite_no, cite_label_html)






# ------------------------------------------------------------------------------




class HtmlPageCollection:
    def __init__(self,
                 zoo,
                 site_generation_environment):
        super().__init__()
        self.zoo = zoo
        self.site_generation_environment = site_generation_environment

        self.citation_manager = None

        self.jinja2env = self.site_generation_environment.jinja2env

        self.pages = {}
        self.page_for_code_ids = {}

        self.global_context = {}

        # extend the jinja2 env to include our filter(s)
        self.jinja2env.filters['prebaseurl'] = \
            lambda x: self.site_generation_environment.prefix_base_url(x)

        self.jinja2env.filters['code_ref'] = self._jfilter_code_ref
        self.jinja2env.filters['code_ref_href'] = self._jfilter_code_ref_href
        self.jinja2env.filters['format_footnote_label_html'] = \
            lambda foot_no: markupsafe.Markup( self.format_footnote_label_html(foot_no) )
        self.jinja2env.filters['format_citation_label_html'] = \
            lambda cite_no: markupsafe.Markup( self.format_citation_label_html(cite_no) )


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
    

    def finished(self):
        # check if there are any codes that aren't included in any page, and
        # emit a warning.
        for code_id in self.zoo.all_codes():
            if code_id not in self.page_for_code_ids:
                logger.warning(f"Code ‘{code_id}’ is not included in any page")
                
    def get_code_href(self, code_id):
        try:
            page_name = self.page_for_code_ids[code_id]
        except KeyError:
            logger.error(f"Referenced code with ID ‘{code_id}’ is not included in any page",
                         exc_info=True)
            raise
        page_path = self.pages[page_name].path()
        full_page_path = self.site_generation_environment.prefix_base_url(page_path)
        return f'{full_page_path}#ecc_{code_id}'


    def set_citation_manager(self, citation_manager):
        self.citation_manager = citation_manager


    def format_footnote_label_html(self, foot_no):
        return markupsafe.Markup(f'({foot_no:d})')

    def format_citation_label_html(self, cite_no, optional_cite_extra_html=None):
        if optional_cite_extra_html is not None:
            return markupsafe.Markup(f'[{cite_no:d}; {optional_cite_extra_html}]')
        return markupsafe.Markup(f'[{cite_no:d}]')

    def _jfilter_code_ref(self, code):
        # need str(code.code_id) since for now we brutally wrap all the entire
        # code object into an _HtmlObjectWrapper instance
        code_href = self.get_code_href( str(code.code_id) )
        page_url_html = markupsafe.escape(code_href)
        code_name_html = markupsafe.escape(code.name)
        return markupsafe.Markup(
            f'''<a href="{page_url_html}">{code_name_html}</a>'''
        )
    def _jfilter_code_ref_href(self, code):
        # need str(code.code_id) since for now we brutally wrap all the entire
        # code object into an _HtmlObjectWrapper instance
        return self.get_code_href( str(code.code_id) )

    def update_global_context(self, d):
        self.global_context.update(d)

    def wrap_object_with_minilatex_properties(self, obj, html_page_notes=None):
        tohtml_refcontext = RefContextForHtmlConverter(self, html_page_notes)
        tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)
        return _HtmlObjectWrapper(obj, tohtmlconverter, repr(obj))

    def minilatex_to_html(self, s, html_page_notes=None):
        tohtml_refcontext = RefContextForHtmlConverter(self, html_page_notes)
        tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)
        return markupsafe.Markup( tohtmlconverter.to_html(s) )

    def generate(self, *, output_dir, additional_context={}):

        # generate all the family pages
        for page_name, htmlpage in self.pages.items():

            output_page_fname = htmlpage.pathext()
            logger.info(f"Generating page ‘{output_page_fname}’")

            page_footnotes = HtmlPageNotes(self)

            tohtml_refcontext = RefContextForHtmlConverter(self, page_footnotes)
            tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)

            context = dict(
                code_list=[
                    _HtmlObjectWrapper(
                        codeobj,
                        tohtmlconverter,
                        repr(codeobj)
                    )
                    for codeobj in [
                            self.zoo.get_code(code_id)
                            for code_id in htmlpage.code_id_list
                    ]
                ],
                page_footnotes=page_footnotes,
                pages=self.pages,
                **self.global_context,
                **htmlpage.info,
                **{k: _HtmlObjectWrapper(v, tohtmlconverter, repr(v))
                   for (k, v) in (htmlpage.context.items() if htmlpage.context else {})},
                **additional_context
            )


            self.site_generation_environment.compile_template(
                fn_template=htmlpage.template_name,
                fn_output=output_page_fname,
                context=context
            )

            # template = self.jinja2env.get_template(htmlpage.template_name)
            # with open(os.path.join(self.dirs.output_dir, output_page_fname), 'w', encoding='utf-8') as f:
            #     f.write(template.render(context))

