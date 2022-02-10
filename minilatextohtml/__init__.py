# latex inspired mini-language to HTML

# note that this sub-module isn't markupsafe-aware, it only treats strings.

import re
import html

def htmlescape(x):
    return str(html.escape(x))


import logging
logger = logging.getLogger(__name__)
logger_debug = logger.debug
logger_error = logger.error


from pylatexenc import latexnodes, latexwalker, macrospec
from pylatexenc.latexnodes.parsers import (
    LatexGeneralNodesParser,
    LatexCharsCommaSeparatedListParser,
    LatexCharsGroupParser,
    LatexDelimitedVerbatimParser,
)
from pylatexenc.latexnodes import nodes
from pylatexenc.macrospec import LatexArgumentSpec


# --------------------------------------------------------------------


class _ItemToHtmlSpec(object):
    def __init__(self, item_to_html=None, **kwargs):
        super(_ItemToHtmlSpec, self).__init__(**kwargs)
        if item_to_html is None:
            self.item_to_html = ItemToHtmlVerbatim()
        elif isinstance(item_to_html, str):
            self.item_to_html = ItemToHtmlConst(item_to_html)
        else:
            self.item_to_html = item_to_html
        
class MiniHtmlMacroSpec(macrospec.MacroSpec, _ItemToHtmlSpec):
    def __init__(self, macroname, arguments_spec_list=None, item_to_html=None):
        super(MiniHtmlMacroSpec, self).__init__(
            macroname,
            arguments_spec_list=arguments_spec_list,
            item_to_html=item_to_html,
        )

class MiniHtmlEnvironmentSpec(macrospec.EnvironmentSpec, _ItemToHtmlSpec):
    def __init__(self, macroname, arguments_spec_list=None, body_parser=None,
                 item_to_html=None):
        super(MiniHtmlEnvironmentSpec, self).__init__(
            macroname,
            arguments_spec_list=arguments_spec_list,
            body_parser=body_parser,
            item_to_html=item_to_html,
        )

class MiniHtmlSpecialsSpec(macrospec.SpecialsSpec, _ItemToHtmlSpec):
    def __init__(self, specials_chars, arguments_spec_list=None, item_to_html=None):
        super(MiniHtmlSpecialsSpec, self).__init__(
            specials_chars,
            arguments_spec_list=arguments_spec_list,
            item_to_html=item_to_html,
        )

# ----

def html_wrap_in_tag(tagname, htmlcontent, *, attrs=None, class_=None):
    s = f'<{tagname}'
    if attrs:
        for aname, aval in attrs.items():
            s += f' {aname}="{htmlescape(aval)}"'
    if class_:
        s += f' class="{htmlescape(class_)}"'
    s += '>'
    s += str(htmlcontent)
    s += f'</{tagname}>'
    #logger_debug(f"html_wrap_in_tag: code is ‘{s}’")
    return s

# ----

class ItemToHtmlBase:
    def __call__(self, node, doccontext):
        raise RuntimeError("subclasses should reimplement me!")
    
    def get_as(self, node, doccontext, fmt='html'):
        if fmt == 'html':
            return self(node, doccontext)
        if fmt == 'text':
            return self.as_text(node, doccontext)
        raise ValueError(f"Invalid format ‘{fmt}’")

    def as_text(self, node, doccontext):
        return html.unescape(self(node, doccontext))

class ItemToHtmlConst(ItemToHtmlBase):
    def __init__(self, replacement):
        self.replacement = replacement
    def __call__(self, node, doccontext):
        return self.replacement

class ItemToHtmlError(ItemToHtmlBase):
    def __call__(self, node, doccontext):
        raise ValueError(
            f"The node {node} cannot be placed here."
        )

class ItemToHtmlVerbatim(ItemToHtmlBase):
    def __call__(self, node, doccontext):
        return htmlescape( self.node.latex_verbatim() )

class ItemToHtmlWrapTag(ItemToHtmlBase):
    def __init__(self, tagname='span', attrs=None, class_=None):
        self.tagname = tagname
        self.attrs = attrs
        self.class_ = class_

    def __call__(self, node, doccontext):
        arghtml = doccontext.nodearg_to_html(node, 0)
        return html_wrap_in_tag(
            self.tagname,
            arghtml,
            attrs=self.attrs,
            class_=self.class_,
        )

    def as_text(self, node, doccontext):
        argtext = doccontext.nodearg_to_text(node, 0)
        return argtext


class ItemToHtmlVerbatimWrapTag(ItemToHtmlWrapTag):
    def __init__(self, tagname='span', attrs=None, class_=None):
        self.tagname = tagname
        self.attrs = attrs
        self.class_ = class_

    def __call__(self, node, doccontext):
        return html_wrap_in_tag(
            tagname=self.tagname,
            htmlcontent=htmlescape( node.latex_verbatim() ),
            attrs=self.attrs,
            class_=self.class_
        )

    def as_text(self, node, doccontext):
        return node.latex_verbatim()

# ----

class ItemToHtmlRef(ItemToHtmlWrapTag):
    def get_ref(self, reftarget, doccontext):
        refprefix = None
        if ':' in reftarget:
            (refprefix, reftarget) = reftarget.split(':', 1)

        # normalize refprefix to allow for surrounding spaces as well
        # as case tolerance e.g. 'code' vs 'Code' etc.
        refprefix = refprefix.strip().lower()

        if doccontext.get_ref is None:
            logger.debug("Missing doc context to resolve reference %s", reftarget)
            return (f'&lt;{reftarget}&gt;', '#')

        (target_html, target_href) = doccontext.get_ref(refprefix, reftarget)
        return (target_html, target_href)
        
    def ref_to_html(self, reftarget, doccontext, display_html=None):
        (target_html, target_href) = self.get_ref(reftarget, doccontext)
        if display_html is None:
            display_html = target_html
        logger_debug(f"Ref: ‘{reftarget}’ → ‘{display_html}’")
        return html_wrap_in_tag(
            'a',
            display_html,
            attrs={'href': htmlescape(target_href)},
            class_='ref',
        )

    def __call__(self, node, doccontext):
        tgt = doccontext.get_nodearglist(node, 'reftarget')
        if len(tgt) != 1 or not tgt[0].isNodeType(nodes.LatexCharsNode):
            raise ValueError("Invalid \\ref invocation: expected single braced argument")
        reftarget = tgt[0].chars
        return self.ref_to_html(reftarget, doccontext)

    def as_text(self, node, doccontext):
        tgt = doccontext.get_nodearglist(node, 'reftarget')
        return f"<{tgt.latex_verbatim()}>"

class ItemToHtmlEqRef(ItemToHtmlWrapTag):
    def __call__(self, node, doccontext):
        # this one is an exception, as it is directly picked up by MathJax.
        tgt = doccontext.get_nodearglist(node, 'reftarget')
        #logger.debug(f"Got eqref; {tgt=}")
        if len(tgt) != 1 or not tgt[0].isNodeType(nodes.LatexGroupNode):
            raise ValueError("Invalid \\eqref invocation: expected single braced argument")
        grp = tgt[0]
        if len(grp.nodelist) != 1 or not grp.nodelist[0].isNodeType(nodes.LatexCharsNode):
            raise ValueError("Invalid \\eqref invocation: expected single braced argument")

        eqref_target = grp.nodelist[0].chars

        return html_wrap_in_tag(
            'span',
            r'\eqref{' + htmlescape(eqref_target) + r'}'
            ,
            class_='inline-math eqref',
        )

class ItemToHtmlHyperref(ItemToHtmlRef):
    def __call__(self, node, doccontext):
        reftarget = doccontext.nodearg_to_html(node, 0)
        display_html = doccontext.nodearg_to_html(node, 1)
        return self.ref_to_html(reftarget, doccontext=doccontext,
                                display_html=display_html)

    def as_text(self, node, doccontext):
        reftarget = doccontext.nodearg_to_html(node, 0)
        display_text = doccontext.nodearg_to_text(node, 1)
        return f"{display_text}<{reftarget}>"

class ItemToHtmlCite(ItemToHtmlWrapTag):

    def __call__(self, node, doccontext):

        optional_cite_extra_html_nodelist = doccontext.get_nodearglist(node, 'cite_pre_text')

        if optional_cite_extra_html_nodelist \
           and len(optional_cite_extra_html_nodelist) \
           and optional_cite_extra_html_nodelist[0]:
            optional_cite_extra_html = \
                doccontext.nodelist_to_html(optional_cite_extra_html_nodelist)
        else:
            optional_cite_extra_html = None

        citekeylist_nodelist = doccontext.get_nodearglist(node, 'citekey')

        # citekeylist_nodelist is a list of groups, each group is delimited by
        # ('', ',') and represents a citation key.  It was parsed using
        # pylatexenc3's LatexCharsCommaSeparatedListParser.

        #logger_debug(f"Citation key nodes: {citekeylist_nodelist=}")

        s_items = []
        for citekeygroupnode in citekeylist_nodelist:

            if not citekeygroupnode:
                continue

            citekey_verbatim = citekeygroupnode.latex_verbatim()
            if citekeygroupnode.delimiters[0]:
                citekey_verbatim = citekey_verbatim[
                    len(citekeygroupnode.delimiters[0]) :
                ]
            if citekeygroupnode.delimiters[1]:
                citekey_verbatim = citekey_verbatim[
                    : -len(citekeygroupnode.delimiters[1])
                ]

            if doccontext.add_citation is None:
                #logger.debug("Missing doc context to add citation %s", node.latex_verbatim())
                s_items.append( f'&lt;{citekey_verbatim}&gt;' )
                continue

            logger.debug(f"Parsing citation {citekey_verbatim=}")

            if ':' in citekey_verbatim:
                citation_key_prefix, citation_key = citekey_verbatim.split(':', 1)
                # normalize citation_key_prefix to allow for surrounding spaces as well
                # as case tolerance e.g. 'arxiv' vs 'arXiv' etc.
                citation_key_prefix = citation_key_prefix.strip().lower()
            else:
                citation_key_prefix, citation_key = None, citekey_verbatim
            
            citelabel_html, citehref = \
                doccontext.add_citation(citation_key_prefix, citation_key,
                                        optional_cite_extra_html)

            s_items.append( html_wrap_in_tag(
                'a',
                citelabel_html,
                attrs={
                    'href': htmlescape(citehref),
                },
                class_='cite',
            ) )

        s = "".join(s_items)

        #logger_debug(f"Citation: ‘{mn.latex_verbatim()}’ → ‘{s}’")
        return s

    def as_text(self, node, doccontext):
        optional_cite_extra_text = doccontext.nodearg_to_text(node, 'cite_pre_text')
        citekeylist_nodelist = doccontext.get_nodearglist(node, 'citekey')

        ckeys = [
            self._pretty_citekey_as_text(n, doccontext)
            for n in citekeylist_nodelist.nodelist
            if n is not None
        ]

        citekeys = ",".join(ckeys)

        if optional_cite_extra_text:
            return f"[{citekeys}; {optional_cite_extra_text}]"
        return f"[{citekeys}]"

    def _pretty_citekey_as_text(self, n, doccontext):
        key = doccontext.nodelist_to_text([n])
        key = re.sub(r'^[a-zA-Z]+:', '', key) # remove prefix, avoid it being indexed...
        return key


class ItemToHtmlFootnote(ItemToHtmlWrapTag):
    def __call__(self, node, doccontext):
        fntext_html = doccontext.nodearg_to_html(node, 'footnotetext')

        if doccontext.add_footnote is None:
            #logger.debug("Missing doc context to add footnote %s", node.latex_verbatim())
            return '&lt;footnote&gt;'

        fnlabel_html, fnhref = doccontext.add_footnote(fntext_html)

        return html_wrap_in_tag(
            'a',
            fnlabel_html,
            attrs={
                'href': htmlescape(fnhref),
            },
            class_='footnote',
        )

    def as_text(self, node, doccontext):
        fntext_text = doccontext.nodearg_to_text(node, 'footnotetext')
        return "{" + fntext_text + "}"

class ItemToHtmlHref(ItemToHtmlWrapTag):
    def __call__(self, node, doccontext):
        url = doccontext.nodearg_to_html(node, 'url')
        disphtml = doccontext.nodearg_to_html(node, 'displaytext')

        return html_wrap_in_tag(
            'a',
            disphtml,
            attrs={'href': url, 'target': '_blank'},
            class_='href',
        )

    def as_text(self, node, doccontext):
        url = doccontext.nodearg_to_html(node, 'url')
        disptext = doccontext.nodearg_to_text(node, 'displaytext')
        return disptext + f" <{url}>"

class ItemToHtmlUrl(ItemToHtmlWrapTag):
    def __call__(self, node, doccontext):
        url = doccontext.nodearg_to_html(node, 'url')

        url_display = url
        for prefix in ('http://', 'https://'):
            if url_display.startswith(prefix):
                url_display = url_display[len(prefix):]
                break
        for suffix in ('/', ):
            if len(suffix) and url_display.endswith(suffix):
                url_display = url_display[:-len(suffix)]

        return html_wrap_in_tag(
            'a',
            url_display,
            attrs={'href': url, 'target': '_blank'},
            class_='href',
        )

    def as_text(self, node, doccontext):
        url = doccontext.nodearg_to_html(node, 'url')
        return f"<{url}>"





# --------------------------------------------------------------------




def _make_lw_context():
    lw_context = macrospec.LatexContextDb()
    lw_context.add_context_category(
        'base-formatting',
        macros=[
            MiniHtmlMacroSpec('textbackslash', '', item_to_html='\\'),
            MiniHtmlMacroSpec('%', '', item_to_html='%'),
            MiniHtmlMacroSpec('#', '', item_to_html='#'),
            MiniHtmlMacroSpec('&', '', item_to_html='&amp;'),
            MiniHtmlMacroSpec('$', '', item_to_html='$'),
            MiniHtmlMacroSpec(' ', '', item_to_html=' '),
            MiniHtmlMacroSpec('{', '', item_to_html='{'),
            MiniHtmlMacroSpec('}', '', item_to_html='}'),

            MiniHtmlMacroSpec(
                'emph', '{',
                item_to_html=ItemToHtmlWrapTag(class_='emph')
            ),
            MiniHtmlMacroSpec(
                'textit', '{',
                item_to_html=ItemToHtmlWrapTag(class_='textit')
            ),
            MiniHtmlMacroSpec(
                'textbf', '{',
                item_to_html=ItemToHtmlWrapTag(class_='textbf')
            ),
        ],
        specials=[
            MiniHtmlSpecialsSpec(
                '~',
                item_to_html=' '
            ),
            # new paragraph
            MiniHtmlSpecialsSpec(
                '\n\n',
            ),
        ]
    )
    lw_context.add_context_category(
        'math-environments',
        environments=[
            MiniHtmlEnvironmentSpec(
                math_environment_name,
                '',
                item_to_html=ItemToHtmlVerbatimWrapTag(
                    tagname='span',
                    class_=f"display-math env-{math_environment_name.replace('*','-star')}",
                )
            )
            for math_environment_name in (
                    'align',
                    'align*',
                    'gather',
                    'gather*',
                    'split',
                    'split*',
            )
        ]
    )
    lw_context.add_context_category(
        'x-refs',
        macros=[
            MiniHtmlMacroSpec(
                'ref',
                arguments_spec_list=[
                    LatexArgumentSpec(LatexCharsGroupParser(), argname='reftarget'),
                ],
                item_to_html=ItemToHtmlRef()
            ),
            MiniHtmlMacroSpec(
                'eqref',
                arguments_spec_list=[
                    LatexArgumentSpec(LatexCharsGroupParser(), argname='reftarget'),
                ],
                item_to_html=ItemToHtmlEqRef()
            ),
            # \label{...} for equations
            MiniHtmlMacroSpec(
                'label',
                arguments_spec_list=[
                    LatexArgumentSpec(LatexCharsGroupParser(), argname='reftarget'),
                ],
                item_to_html=ItemToHtmlError()
            ),
            MiniHtmlMacroSpec(
                'cite',
                arguments_spec_list=[
                    LatexArgumentSpec(
                        '[',
                        argname='cite_pre_text'
                    ),
                    LatexArgumentSpec(
                        LatexCharsCommaSeparatedListParser(enable_comments=False),
                        argname='citekey'
                    ),
                ],
                item_to_html=ItemToHtmlCite()
            ),
            MiniHtmlMacroSpec(
                'footnote',
                arguments_spec_list=[
                    LatexArgumentSpec(
                        '{',
                        argname='footnotetext'
                    ),
                ],
                item_to_html=ItemToHtmlFootnote()
            ),
            MiniHtmlMacroSpec(
                'href',
                arguments_spec_list=[
                    LatexArgumentSpec(
                        LatexDelimitedVerbatimParser( ('{','}') ),
                        argname='url',
                    ),
                    LatexArgumentSpec(
                        '{',
                        argname='displaytext',
                    )
                ],
                item_to_html=ItemToHtmlHref()
            ),
            MiniHtmlMacroSpec(
                'hyperref',
                arguments_spec_list=[
                    LatexArgumentSpec(
                        '[',
                        argname='target'
                    ),
                    LatexArgumentSpec(
                        '{',
                        argname='displaytext'
                    ),
                ],
                item_to_html=ItemToHtmlHyperref()
            ),
            MiniHtmlMacroSpec(
                'url',
                arguments_spec_list=[
                    LatexArgumentSpec(
                        LatexDelimitedVerbatimParser( ('{','}') ),
                        argname='url',
                    )
                ],
                item_to_html=ItemToHtmlUrl()
            ),
        ]
    )

    lw_context.set_unknown_macro_spec(MiniHtmlMacroSpec(''))
    lw_context.set_unknown_environment_spec(MiniHtmlEnvironmentSpec(''))

    return lw_context




# ----------------------------


_minilatex_context_db = _make_lw_context()


# --------------------------------------------------------------------


class HtmlRefContext:
    def __init__(self):
        super().__init__()

    # references and citations are inspected to see if they are of the form
    # "prefix:key".  If so, the prefix is reported in `ref_key_prefix` or
    # `citeation_key_prefix`; those arguments are None if no prefix was given.

    def get_ref(self, ref_key_prefix, ref_key):
        # return (target_html, targethref)
        raise RuntimeError("Subclass must reimplement get_ref()")

    def add_footnote(self, footnotetext):
        # return (footnotelabel_html, footnotehref)
        raise RuntimeError("Subclass must reimplement add_footnote()")

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        # return (citelabel_html, citehref)
        raise RuntimeError("Subclass must reimplement add_citation()")


# --------------------------------------------------------------------


class MiniLatex:
    def __init__(self, minilatex,
                 minilatex_context_db=_minilatex_context_db,
                 what='(unknown)'):

        self.minilatex = minilatex
        self.what = what

        self._latex_walker = latexwalker.LatexWalker(
            self.minilatex,
            latex_context=minilatex_context_db,
            tolerant_parsing=False
        )

        try:
            self.nodes, _ = self._latex_walker.parse_content( LatexGeneralNodesParser() )
        except Exception as e:
            logger.error(f"Error parsing latex-like minilanguage ‘{self.what}’: {e}\n"
                         f"Given text was:\n‘{self.minilatex}’\n\n")
            raise

        # helper
        self._math_node_to_html = {
            'inline': ItemToHtmlVerbatimWrapTag(
                tagname='span',
                class_='inline-math'
            ),
            'display': ItemToHtmlVerbatimWrapTag(
                tagname='span',
                class_='display-math'
            ),
        }

        self.text = self._to_text()



    class DocContext:
        def __init__(self, minilatexobj, refcontext):
            self.minilatexobj = minilatexobj
            self.refcontext = refcontext

            self.get_nodearglist = self.minilatexobj.get_nodearglist

            if self.refcontext is not None:
                self.get_ref = self.refcontext.get_ref
                self.add_footnote = self.refcontext.add_footnote
                self.add_citation = self.refcontext.add_citation
            else:
                self.get_ref = None
                self.add_footnote = None
                self.add_citation = None

        def nodearg_to_html(self, node, arg_i):
            nodelist = self.get_nodearglist(node, arg_i)
            #logger.debug(f"nodearg_to_html: {nodelist=}")
            return self.minilatexobj._nodelist_to_html( nodelist, self )

        def nodelist_to_html(self, nodelist):
            return self.minilatexobj._nodelist_to_html( nodelist, self )

        def nodearg_to_text(self, node, arg_i):
            nodelist = self.get_nodearglist(node, arg_i)
            #logger.debug(f"nodearg_to_html: {nodelist=}")
            return self.minilatexobj._nodelist_to_text( nodelist, self )

        def nodelist_to_text(self, nodelist):
            return self.minilatexobj._nodelist_to_text( nodelist, self )


    def __str__(self):
        return self.minilatex

    def __repr__(self):
        return f'{self.__class__.__name__}({self.minilatex!r})'

    def __bool__(self):
        # "if s: " should be false if the minilatex code ‘s’ is empty
        return (True if self.minilatex else False)

    def to_html(self, refcontext=None):
        try:
            doccontext = MiniLatex.DocContext(self, refcontext)
            return self._nodelist_to_html(self.nodes, doccontext)
        except Exception as e:
            logger.error(f"Error producing HTML from latex-like minilanguage ‘{self.what}’: "
                         f" {e}\n"
                         f"Given text was:\n‘{self.minilatex}’\n\n")
            raise

    def _to_text(self, refcontext=None):
        try:
            doccontext = MiniLatex.DocContext(self, refcontext)
            return self._nodelist_to_text(self.nodes, doccontext)
        except Exception as e:
            logger.error(f"Error producing text from latex-like minilanguage ‘{self.what}’: "
                         f" {e}\n"
                         f"Given text was:\n‘{self.minilatex}’\n\n")
            raise


    def __html__(self):
        return self.to_html()

    def _nodelist_to_html(self, nodelist, doccontext):
        return self._nodelist_to_x(nodelist, doccontext, fmt='html')
    def _nodelist_to_text(self, nodelist, doccontext):
        return self._nodelist_to_x(nodelist, doccontext, fmt='text')

    def _nodelist_to_x(self, nodelist, doccontext, fmt='html'):
        # There are two cases.  Either we have paragraph breaks --> we need to
        # wrap each paragraph in <p>...</p>, or we don't have any paragraph
        # breaks --> no wrapping in <p>.

        #logger.debug("NODELIST to HTML: --> %r", nodelist)

        nodelists_paragraphs = [ [] ]
        #logger.debug("nodelist = %r", nodelist)
        for n in nodelist:
            if n is not None \
               and n.isNodeType(nodes.LatexSpecialsNode) and n.specials_chars == '\n\n':
                nodelists_paragraphs.append([])
            else:
                nodelists_paragraphs[len(nodelists_paragraphs)-1].append(n)

        # conver to HTML per-paragraph
        html_paragraphs = [
            "".join([
                self._node_to_x(node, doccontext, fmt=fmt) for node in para_nodelist
            ])
            for para_nodelist in nodelists_paragraphs
        ]

        # if we only have a single paragraph, i.e., without any paragraph
        # break(s), then return the HTML content as is
        if len(html_paragraphs) == 1:
            return html_paragraphs[0]

        # wrap in paragraphs
        if fmt == 'html':
            para_wrapper = lambda p : html_wrap_in_tag('p', p.strip())
        elif fmt == 'text':
            para_wrapper = lambda p : (p.strip() + '\n')
        else:
            raise ValueError(f"Invalid format {fmt=}")

        # otherwise, wrap each paragraph in <p>...</p>.
        full_html = "\n".join([
            para_wrapper(p)
            for p in html_paragraphs
            if p.strip()
        ])
        #logger.debug(f" --> {full_html=}")
        return full_html

    def _charsnode_to_x(self, node, fmt='html'):
        if fmt == 'html':
            return htmlescape(node.chars)
        return node.chars

    def _node_to_x(self, node, doccontext, fmt='html'):

        if node is None:
            return ''

        #logger.debug("NODE to HTML: --> %r", node)

        if node.isNodeType(nodes.LatexCharsNode):
            return self._charsnode_to_x(node, fmt=fmt)

        if node.isNodeType(nodes.LatexCommentNode):
            logger_error(
                f"You cannot use LaTeX comments (‘%{node.comment}’). "
                f"To type a percent sign, use ‘\\%’"
            )
            raise ValueError(f"LaTeX comments not supported: ‘%{node.comment}’. "
                             f"To type a percent sign, use ‘\\%’")

        if node.isNodeType(nodes.LatexGroupNode):
            return (
                self._nodelist_to_x(node.nodelist, doccontext, fmt=fmt)
            )

        if node.isNodeType(nodes.LatexMacroNode) \
           or node.isNodeType(nodes.LatexEnvironmentNode) \
           or node.isNodeType(nodes.LatexSpecialsNode):
            #
            return node.spec.item_to_html.get_as(node, doccontext, fmt=fmt)

        if node.isNodeType(nodes.LatexMathNode):
            return self._math_node_to_html[node.displaytype].get_as(node, doccontext, fmt=fmt)

        raise ValueError(f"Invalid node type: {node!r}")
 
    def get_nodearglist(self, node, arg_i):
        if node.nodeargd is None:
            return []
        if node.nodeargd.argnlist is None:
            return []
        if isinstance(arg_i, str):
            # find the correct argument number
            for j, arg_spec in enumerate(node.nodeargd.arguments_spec_list):
                if arg_spec.argname == arg_i:
                    break
            else:
                raise ValueError(f"No argument named ‘{arg_i}’ found in node {node=}")
            arg_i = j
        if arg_i >= len(node.nodeargd.argnlist):
            logger_error(f"Invalid argument #{arg_i} for macro ‘\\{node.macroname}’")
            raise ValueError(f"Invalid argument #{arg_i} for macro ‘\\{node.macroname}’")
        argnode = node.nodeargd.argnlist[arg_i]
        if argnode is None:
            return [None]
        if argnode.isNodeType(nodes.LatexGroupNode):
            return argnode.nodelist
        return nodes.LatexNodeList([argnode])
