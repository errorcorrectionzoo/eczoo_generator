import os
import os.path
import re

import logging
logger = logging.getLogger(__name__)

import markupsafe

from . import code


import minilatextohtml


# ------------------------------------------------------------------------------

# _id_fields = ('code_id', )

# class _HtmlObjectWrapper:
#     def __init__(self, obj, tohtmlconverter, whatobject):
#         super().__init__()
#         self.obj = obj
#         self.tohtmlconverter = tohtmlconverter
#         self.whatobject = whatobject

#     def _to_html_str(self, value, whatobject):
#         return self.tohtmlconverter.to_html(value, what=whatobject)

#     def _wrap_obj(self, val, whatobject):
#         if val is None:
#             return None
#         if isinstance(val, _HtmlObjectWrapper):
#             # already wrapped (?!)
#             return val
#         if isinstance(val, (int, float, bool)):
#             return val # don't wrap ints, floats, or bools
#         if isinstance(val, str):
#             return _HtmlStringWrapper(val, self.tohtmlconverter, whatobject)
#         if isinstance(val, list):
#             return _HtmlListObjectWrapper(val, self.tohtmlconverter, whatobject)
#         if isinstance(val, dict):
#             return _HtmlDictObjectWrapper(val, self.tohtmlconverter, whatobject)
#         #logger.debug(f"Got attr value ‘{val!r}’, generic type {type(val)}")
#         return _HtmlObjectWrapper(val, self.tohtmlconverter, whatobject)

#     def __bool__(self):
#         return True if self.obj else False

#     def __call__(self, *args, **kwargs):
#         return self._wrap_obj(self.obj(*args, **kwargs), self.whatobject+'()')

#     def __iter__(self):
#         for j, a in enumerate(self.obj):
#             yield self._wrap_obj(a, '{}[{}]'.format(self.whatobject, j))

#     def __getattr__(self, attr):
#         # special exception for internal identificator fields (e.g., code_id)
#         if attr in _id_fields:
#             return getattr(self.obj, attr)
#         return self._wrap_obj( getattr(self.obj, attr) ,
#                                '{}.{}'.format(self.whatobject, attr))

#     def __getitem__(self, key):
#         if key in _id_fields:
#             return self.obj[key]
#         return self._wrap_obj( self.obj[key] ,
#                               '{}[{!r}]'.format(self.whatobject, key) )

#     def __repr__(self):
#         return f'_HtmlObjectWrapper({self.obj!r})'


# class _HtmlStringWrapper(_HtmlObjectWrapper):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)

#     # __bool__ def'd in base class

#     def __str__(self):
#         return self._to_html_str(self.obj, self.whatobject)

#     # The __html__() method will ensure this string is seen as "HTML-safe" by
#     # `markup.escape()`.
#     #
#     # This method works as an alternative to `markupsafe.Markup(..)`, for
#     # strings that we don't want to pre-compile before we're sure that the
#     # actual string is needed.
#     def __html__(self):
#         return self._to_html_str(self.obj, self.whatobject)

#     def __add__(self, other):
#         return self._wrap_obj(self.obj + other, '('+self.whatobject+'+str)')
#     def __radd__(self, other):
#         return self._wrap_obj(other + self.obj, '(str+'+self.whatobject+')')


# class _HtmlListObjectWrapper(_HtmlObjectWrapper):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)

#     # __bool__, __getitem__, __iter__ def'd in base class

#     def __len__(self):
#         return len(self.obj)

#     def __bool__(self):
#         return (True if self.obj else False)

#     # custom conversion to string
#     def __str__(self):
#         return "".join([f"<span class=\"paragraph-in-list\">{item}</span>" for item in self])

#     # see the string wrapper object above (_HtmlStringWrapper) for info about
#     # __html__
#     def __html__(self):
#         return "".join([f"<span class=\"paragraph-in-list\">{item}</span>" for item in self])


# class _HtmlDictObjectWrapper(_HtmlObjectWrapper):
#     def __init__(self, *args, **kwargs):
#         super().__init__(*args, **kwargs)

#     def keys(self):
#         return self.obj.keys()

#     def items(self):
#         the_items = [ (k, self._wrap_obj(v, '{}[{!r}]'.format(self.whatobject, k)))
#                       for (k,v) in self.obj.items() ]
#         return the_items


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

    def full_footnote_text_html(self):
        return markupsafe.Markup( self.footnote_text_html )

class HtmlCitation:
    def __init__(self, *, no=None, citation_obj):
        self.no = no
        self.citation_obj = citation_obj

    def full_citation_text_html(self):
        minilatex = self.citation_obj.full_citation_text_minilatex
        if minilatex is None:
            raise ValueError(f"Unresolved citation {self.citation_obj}!  "
                             f"Is it a valid reference?")
        return markupsafe.Markup( minilatex.to_html() )

class HtmlFloat:
    def __init__(self, *, no=None, float_obj, html_page_notes=None):
        self.no = no
        self.float_obj = float_obj
        self.html_page_notes = html_page_notes
        self.htmlpagecollection = html_page_notes.htmlpagecollection

    def numbered(self):
        return self.float_obj.label is not None

    def full_float_html(self):
        if self.float_obj.contentstype == 'image_filename':
            floatinfo = self.htmlpagecollection.get_image_filename_path_info(
                self.float_obj.contents_image_filename,
                resource_parent=self.float_obj.resource_parent
            )
            imgpath = floatinfo['prefixed_path']
            image_info = floatinfo['image_info']
            if image_info['type'] == 'vector':
                width_dimunit, height_dimunit = image_info['physical_dimensions']
                width_dim, width_unit = width_dimunit
                height_dim, height_unit = height_dimunit
            else:
                # specify dimensions in pixels; I'm not sure that makes a huge
                # difference...
                width_dim, height_dim = image_info['pixel_dimensions']
                dpi = image_info['dpi']
                pxfactor = dpi/96
                width_dim = width_dim / pxfactor
                height_dim = height_dim / pxfactor
                width_unit, height_unit = 'px', 'px'
            style = (
                f"width: {width_dim:.6f}{width_unit}; "
                f"height: {height_dim:.6f}{height_unit}"
            )
            float_inner_contents_html = \
                f"""<img src="{imgpath}" style="{style}" alt="(float)">"""
        else:
            raise ValueError("I don't know how to display the float {!r}"
                             .format(self.float_obj))

        float_contents_html = \
            f"""<div class="float-contents">{float_inner_contents_html}</div>"""

        float_type = self.float_obj.float_type

        figuretag_attrs = {}
        figuretag_classes = []

        captionhtml = ''
        if self.numbered():
            figuretag_attrs['id'] = f"{float_type}-{self.no}"

            # we have a figure caption
            _, fltnostr, flthref = self.html_page_notes.get_float_ref(
                self.float_obj.float_type,
                self.float_obj.label
            )
            fltnohtml = f"""<span class="float-number">{fltnostr}</span>"""
            if self.float_obj.caption:
                captiontexthtml = \
                    f"""<span class="caption-text">{self.float_obj.caption}</span>"""
                captionhtml = \
                    f"""<figcaption>{fltnohtml}: {captiontexthtml}</figcaption>"""
            else:
                captionhtml = f"<figcaption>{fltnohtml}</figcaption>"

        figuretag_classes += ['float', f'float-{float_type}']

        figuretag_attrs['class'] = " ".join(figuretag_classes)
        attrsstr = " ".join([ f'{k}="{markupsafe.escape(v)}"'
                              for k, v in figuretag_attrs.items() ])

        return f"""<figure {attrsstr}>{float_contents_html}{captionhtml}</figure>"""



# ------------------------------------------------------------------------------

class RefContextForHtmlConverter(minilatextohtml.HtmlRefContext):
    def __init__(self, htmlpagecollection, html_page_notes):
        super().__init__()
        self.htmlpagecollection = htmlpagecollection
        self.html_page_notes = html_page_notes

        self.state = None

    def _get_ref_code(self, code_id):
        code = self.htmlpagecollection.zoo.get_code(code_id)
        code_href = self.htmlpagecollection.get_code_href(code_id)
        code_name_html = code.name.to_html()
        return (code_name_html, code_href)
        
    def get_ref(self, ref_key_prefix, ref_key):

        if self.state != 'generation':
            return ('','')

        if ref_key_prefix == 'eq':
            raise ValueError(
                f"Equation references should use \\eqref{{eq:XXX}}, not \\ref{{eq:XXX}}: "
                f"‘{ref_key}’"
            )

        if ref_key_prefix in ('figure', 'table'):
            (htmlfloat, floatnostr, floathref) = \
                self.html_page_notes.get_float_ref(ref_key_prefix, ref_key)
            return (floatnostr, floathref)

        if ref_key_prefix == 'code':
            return self._get_ref_code(ref_key)

        raise ValueError(
            f"Invalid ref: ‘{ref_key}’.  Such references must be "
            f"to a code; use a ref label of the form ‘code:<code-id>’.  "
            f"For equation references, use \\eqref{{eq:XXX}} instead of \\ref."
        )

        

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

        if self.state != 'generation':
            return ('','')

        self._check_html_page_notes_context()

        footnote = HtmlFootnote(footnote_text_html=footnote_text_html)
        foot_no = self.html_page_notes.add_footnote(footnote)
        foot_label_html = self.htmlpagecollection.format_footnote_label_html(foot_no)
        return (foot_label_html, f'#fn-{foot_no}')

    def _get_citation_obj(self, citation_key_prefix, citation_key):

        if not citation_key_prefix:
            raise ValueError(f"Invalid {citation_key_prefix=}; {citation_key=}")

        citation_obj = self.htmlpagecollection.citation_manager.get_citation(
            **{citation_key_prefix: citation_key}
        )

        citation = HtmlCitation(citation_obj=citation_obj)
        return citation

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        # return (citelabel_html, citehref)

        if self.state != 'generation':
            return ('','')

        self._check_html_page_notes_context()

        citation = self._get_citation_obj(citation_key_prefix, citation_key)
        cite_no = self.html_page_notes.add_citation(citation)
        cite_label_html = \
            self.htmlpagecollection.format_citation_label_html(cite_no,
                                                               optional_cite_extra_html)
        return (cite_label_html, f'#cite-{cite_no}')

    def add_float(self, float_obj):
        # return float_html
        
        self._check_html_page_notes_context()

        if self.state == 'pre-pass':

            if float_obj.label is not None: # numbered float --> register it!!
                htmlfloat = \
                    HtmlFloat(float_obj=float_obj, html_page_notes=self.html_page_notes)

                float_no = self.html_page_notes.add_float(htmlfloat)
                htmlfloat.no = float_no

            return ''

        if self.state == 'generation':

            if float_obj.label is None: # not a numbered float
                htmlfloat = HtmlFloat(float_obj=float_obj,
                                      html_page_notes=self.html_page_notes)
            else:
                htmlfloat, _, _ = self.html_page_notes.get_float_ref(
                    float_obj.float_type, float_obj.label
                )

            return htmlfloat.full_float_html()

        return ''
        


# ------------------------------------------------------------------------------

class HtmlPageNotes:
    def __init__(self, htmlpagecollection):
        self.foot_no = -1 # last attributed footnote number
        self.footnotes = []
        self.cite_no = -1 # last attributed citation number
        self.citations = []

        self.floats = {
            'figure': [],
            'table': [],
        }

        self.htmlpagecollection = htmlpagecollection

    def add_footnote(self, footnote):
        self.foot_no += 1

        foot_no = self.foot_no
        #foot_label_html = self.htmlpagecollection.format_footnote_label_html(self.foot_no)

        footnote.no = foot_no
        #footnote.label_html = foot_label_html

        self.footnotes.append( footnote )
        return foot_no #, foot_label_html)

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

    def add_float(self, htmlfloat):

        float_type = htmlfloat.float_obj.float_type

        float_no = len(self.floats[float_type])
        self.floats[float_type].append(htmlfloat)

        return float_no

    def get_float_ref(self, ref_key_prefix, ref_key):

        float_type = ref_key_prefix
        for htmlfloat in self.floats[float_type]:
            if htmlfloat.float_obj.label == ref_key:
                # found float!
                floatnostr = (
                    htmlfloat.float_obj.float_caption_name + '&nbsp;'
                    + self.htmlpagecollection.format_float_no_html(
                        float_type=float_type,
                        no=htmlfloat.no,
                    )
                )
                floatnohref = f'#{float_type}-{htmlfloat.no}'
                return (htmlfloat, floatnostr, floatnohref)

        raise ValueError(f"Float reference ‘{ref_key_prefix}:{ref_key}’ not resolved!")
                    

        

# ------------------------------------------------------------------------------


_alpha = 'abcdefghijklmnopqrstuvwxyz'

def alphacounter(n, lower=True):
    # a, b, c, d, ..., y, z, aa, bb, cc, ..., zz, aaa, ...
    w = 1 + (n // 26)
    m = n % 26
    s = _alpha[m] * w
    if lower:
        return s
    return s.upper()
    
_romancounterchars = (
    (1000, "M"),
    (900, "CM"),
    (500, "D"),
    (400, "CD"),
    (100, "C"),
    (90, "XC"),
    (50, "L"),
    (40, "XL"),
    (10, "X"),
    (9, "IX"),
    (5, "V"),
    (4, "IV"),
    (1, "I"),
)

def romancounter(n, lower=True):
    s = ''
    for romancharvalue, romanchar in _romancounterchars:
        s += romanchar * (n // romancharvalue)
        n = n % romancharvalue
    if lower:
        return s.lower()
    return s



# ------------------------------------------------------------------------------




class HtmlPageCollection:
    def __init__(self,
                 zoo,
                 site_generation_environment):
        super().__init__()
        self.zoo = zoo
        self.site_generation_environment = site_generation_environment

        self.citation_manager = None
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
        self.jinja2env.filters['format_footnote_label_html'] = \
            lambda foot_no: markupsafe.Markup( self.format_footnote_label_html(foot_no) )
        self.jinja2env.filters['format_citation_label_html'] = \
            lambda cite_no: markupsafe.Markup( self.format_citation_label_html(cite_no) )

        # # explicitly wrap attributes for minilatex rendering
        # self.jinja2env.filters['wrap_minilatex'] = \
        #     lambda obj: self.wrap_object_with_minilatex_properties(obj)

        self.jinja2env.filters['to_html_with_notes'] = self._jfilter_to_html_with_notes

        # # access raw minilatex code on objects wrapped as _HtmlObjectWrapper
        # self.jinja2env.filters['raw_minilatex_code'] = \
        #     lambda wrapperobj: wrapperobj.obj
        self.jinja2env.filters['minilatex'] = \
            lambda minilatexobj: minilatexobj.minilatex


    def _jfilter_to_html_with_notes(self, obj, refcontext=None):
        if isinstance(obj, list):
            return markupsafe.Markup( "".join([
                (f"<span class=\"paragraph-in-list\">"
                 + item.to_html(refcontext=refcontext)
                 + f"</span>")
                for item in obj
            ]) )
        return markupsafe.Markup( obj.to_html(refcontext=refcontext) )


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
        page = self.pages[page_name]
        page_path = page.path()
        full_page_path = self.site_generation_environment.prefix_base_url(page_path)
        if len(page.code_id_list) > 1:
            # there are multiple codes on this page, need #xxx anchor
            return f'{full_page_path}#ecc_{code_id}'
        # url suffices
        return full_page_path

    def get_image_filename_path_info(self, image_filename, resource_parent):
        if hasattr(resource_parent, 'code_id'):
            code_id = resource_parent.code_id
            try:
                info = dict( self.figsdb[(code_id, image_filename)] )
                info['prefixed_path'] = \
                    self.site_generation_environment.prefix_base_url( info['path'] )
                return info
            except KeyError:
                raise ValueError(f"Image ‘{image_filename}’ in {code_id} was not "
                                 f"included in image database!")

        raise ValueError(f"I don't know where to look for {image_filename!r} with "
                         f"{resource_parent=!r}")

    def set_citation_manager(self, citation_manager):
        self.citation_manager = citation_manager

    def set_image_filename_database(self, figsdb):
        self.figsdb = figsdb

    def format_footnote_label_html(self, foot_no):
        fn_symb = alphacounter(foot_no)
        return fn_symb

    def format_citation_label_html(self, cite_no, optional_cite_extra_html=None):

        cite_symb = f'{1+cite_no:d}'

        if optional_cite_extra_html is not None:
            return markupsafe.Markup(f'[{cite_symb}; {optional_cite_extra_html}]')
        return markupsafe.Markup(f'[{cite_symb}]')

    def format_float_no_html(self, float_type, no):
        return romancounter(1 + no, lower=False)


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

    # def wrap_object_with_minilatex_properties(self, obj, html_page_notes=None):
    #     tohtml_refcontext = RefContextForHtmlConverter(self, html_page_notes)
    #     tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)
    #     return _HtmlObjectWrapper(obj, tohtmlconverter, repr(obj))

    # def minilatex_to_html(self, s, html_page_notes=None, what='(unknown)'):
    #     tohtml_refcontext = RefContextForHtmlConverter(self, html_page_notes)
    #     tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)
    #     return markupsafe.Markup( tohtmlconverter.to_html(s, what=what) )

    def generate(self, *, output_dir, additional_context={}):

        # generate all the family pages
        for page_name, htmlpage in self.pages.items():

            output_page_fname = htmlpage.pathext()
            logger.info(f"Generating page ‘{output_page_fname}’")

            page_footnotes = HtmlPageNotes(self)

            tohtml_refcontext = RefContextForHtmlConverter(self, page_footnotes)
            #tohtmlconverter = minilatextohtml.ToHtmlConverter(tohtml_refcontext)

            context = dict(
                code_list=[
                    self.zoo.get_code(code_id)
                    for code_id in htmlpage.code_id_list
                ],
                page_footnotes=page_footnotes,
                pages=self.pages,
                rc=tohtml_refcontext, # rc = "refcontext" for filter
                **self.global_context,
                **htmlpage.info,
                **{k: v
                   for (k, v) in (htmlpage.context.items() if htmlpage.context else {})},
                **additional_context
            )

            logger.debug("Generating page; first doing a pre-pass to detect floats ...")

            # do a first pass to detect & register floats
            tohtml_refcontext.state = 'pre-pass'
            try:
                pg_template = self.jinja2env.get_template(htmlpage.template_name)
                rendered_output = pg_template.render(context)
            except Exception as e:
                logger.error(f"Error compiling template: {e}", exc_info=True)
                raise

            logger.debug("Generating page; generating ...")

            tohtml_refcontext.state = 'generation'

            self.site_generation_environment.compile_template(
                fn_template=htmlpage.template_name,
                fn_output=output_page_fname,
                context=context,
            )

            # template = self.jinja2env.get_template(htmlpage.template_name)
            # with open(os.path.join(self.dirs.output_dir, output_page_fname), 'w', encoding='utf-8') as f:
            #     f.write(template.render(context))

