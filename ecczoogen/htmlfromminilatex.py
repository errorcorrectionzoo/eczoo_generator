# latex inspired mini-language to HTML

import markupsafe
def htmlescape(x):
    return str(markupsafe.escape(x))

import logging
logger = logging.getLogger(__name__)

from pylatexenc import latexwalker, macrospec

_lw_context = macrospec.LatexContextDb()
_lw_context.add_context_category(
    'base-formatting',
    macros=[
        macrospec.MacroSpec('textbackslash', ''),
        macrospec.MacroSpec('%', ''),
        macrospec.MacroSpec(' ', ''),
        macrospec.MacroSpec('{', '{'),
        macrospec.MacroSpec('}', '}'),

        macrospec.MacroSpec('emph', '{'),
        macrospec.MacroSpec('textit', '{'),
        macrospec.MacroSpec('textbf', '{'),
    ]
)
_lw_context.add_context_category(
    'x-refs',
    macros=[
        macrospec.MacroSpec('ref', '{'),
        macrospec.MacroSpec('cite', '[{'),
        macrospec.MacroSpec('footnote', '{'),
        macrospec.MacroSpec('href', '{{'),
        macrospec.MacroSpec('url', '{'),
    ]
)



class HtmlRefContext:
    def __init__(self):
        super().__init__()

    def get_code_and_href(self, code_id):
        # return (code object, codehref)
        raise RuntimeError("Subclass must reimplement get_code_and_href()")
    def add_footnote(self, footnotetext):
        # return (footnotelabel_html, footnotehref)
        raise RuntimeError("Subclass must reimplement add_footnote()")
    def add_citation(self, citation_key):
        # return (citelabel_html, citehref)
        raise RuntimeError("Subclass must reimplement add_citation()")



class ToHtmlConverter:
    def __init__(self, refcontext):
        super().__init__()
        self.refcontext = refcontext

    def to_html(self, s):
        lw = latexwalker.LatexWalker(s, _lw_context)
        nodelist, _, _ = lw.get_latex_nodes()
        html = self.nodelist_to_html(nodelist)
        #logger.debug(f"HTML: ‘{s}’ → ‘{html}’")
        return html

    # --

    def nodelist_to_html(self, nodelist):
        return "".join( self.node_to_html(node) for node in nodelist )
    
    def get_nodearglist(self, node, arg_i):
        if node.nodeargd is None:
            return []
        if node.nodeargd.argnlist is None:
            return []
        if arg_i >= len(node.nodeargd.argnlist):
            logger.error(f"Invalid argument #{arg_i} for macro ‘\\{node.macroname}’")
            raise ValueError(f"Invalid argument #{arg_i} for macro ‘\\{node.macroname}’")
        argnode = node.nodeargd.argnlist[arg_i]
        if argnode is None:
            return [None]
        if argnode.isNodeType(latexwalker.LatexGroupNode):
            return argnode.nodelist
        return [argnode]

    def nodearg_to_html(self, node, arg_i):
        return self.nodelist_to_html( self.get_nodearglist(node, arg_i) )


    def html_wrap_in_tag(self, tagname, htmlcontent, *, attrs=None, class_=None):
        s = f'<{tagname}'
        if attrs:
            for aname, aval in attrs.items():
                s += ' '+aname+'='+'"'+htmlescape(aval)+'"'
        if class_:
            s += ' class="'+htmlescape(class_)+'"'
        s += '>'
        s += str(htmlcontent)
        s += f'</{tagname}>'
        logger.debug(f"html_wrap_in_tag: code is ‘{s}’")
        return s

    def macro_node_to_html(self, mn):

        # special symbols macros
        if mn.macroname == '%':
            return '%'
        if mn.macroname == ' ':
            return ' '
        if mn.macroname == 'textbackslash':
            return htmlescape('\\')

        # formatting macros
        if mn.macroname == 'emph':
            return self.html_wrap_in_tag('span', self.nodearg_to_html(mn, 0), class_='emph')
        if mn.macroname == 'textit':
            return self.html_wrap_in_tag('span', self.nodearg_to_html(mn, 0), class_='textit')
        if mn.macroname == 'textbf':
            return self.html_wrap_in_tag('span', self.nodearg_to_html(mn, 0), class_='textbf')

        # x-reference macros
        if mn.macroname == 'ref':
            tgt = self.get_nodearglist(mn, 0)
            if len(tgt) != 1:
                raise ValueError("Invalid \\ref invocation: expected single argument")
            code_id = tgt[0].chars
            code, code_href = self.refcontext.get_code_and_href(code_id)
            return self.html_wrap_in_tag(
                'a',
                htmlescape(code.name),
                attrs={'href': htmlescape(code_href)},
                class_='code_ref',
            )

        if mn.macroname == 'cite':
            xtra = self.nodearg_to_html(mn, 0)
            citekeylist = self.nodearg_to_html(mn, 1)
            
            # there might be multiple citation keys separated by commas.
            s = ''
            for citekey in citekeylist.split(','):
                citekey = citekey.strip()

                citelabel_html, citehref = self.refcontext.add_citation(citekey)

                s += self.html_wrap_in_tag(
                    'a',
                    citelabel_html,
                    attrs={
                        'href': htmlescape(citehref),
                    },
                    class_='cite',
                )
            logger.debug(f"Citation: ‘{citekeylist}’ → ‘{s}’")
            return s

        if mn.macroname == 'footnote':
            fntext_html = self.nodearg_to_html(mn, 0)
            
            fnlabel_html, fnhref = self.refcontext.add_footnote(fntext_html)
            
            return self.html_wrap_in_tag(
                'a',
                fnlabel_html,
                attrs={
                    'href': htmlescape(fnhref),
                },
                class_='footnote',
            )

        if mn.macroname == 'href':
            url = self.nodearg_to_html(mn, 0)
            disphtml = self.nodearg_to_html(mn, 1)
            
            return self.html_wrap_in_tag(
                'a',
                disp,
                attrs={'href': url, 'target': '_blank'},
                class_='href',
            )

        if mn.macroname == 'url':
            url = self.nodearg_to_html(mn, 0)
            
            return self.html_wrap_in_tag(
                'a',
                url,
                attrs={'href': url, 'target': '_blank'},
                class_='href url',
            )
        
        raise ValueError(f"Unknown macro: ‘\\{mn.macroname}’")

    def environment_node_to_html(self, node):
        logger.error(f"Environments not supported! ‘{node.environmentname}’")
        raise ValueError(f"LaTeX environments are not supported: ‘%{node.environmentname}’")

    def specials_node_to_html(self, node):
        raise ValueError(f"Unknown specials: ‘{mn.macroname}’")

    def node_to_html(self, node):

        if node is None:
            return ''

        if node.isNodeType(latexwalker.LatexCharsNode):
            return htmlescape(node.chars)

        if node.isNodeType(latexwalker.LatexCommentNode):
            logger.error(f"Comment is ignored: ‘%{node.comment}’")
            raise ValueError(f"Comment is ignored: ‘%{node.comment}’")

        if node.isNodeType(latexwalker.LatexGroupNode):
            return (
                htmlescape(node.delimiters[0])
                + self.nodelist_to_html(node.nodelist)
                + htmlescape(node.delimiters[1])
            )

        if node.isNodeType(latexwalker.LatexMacroNode):
            return self.macro_node_to_html(node)

        if node.isNodeType(latexwalker.LatexEnvironmentNode):
            return self.environment_node_to_html(node)

        if node.isNodeType(latexwalker.LatexSpecialsNode):
            return self.specials_node_to_html(node)

        if node.isNodeType(latexwalker.LatexMathNode):
            return htmlescape(
                node.delimiters[0] + "".join(n.latex_verbatim() for n in node.nodelist)
                + node.delimiters[1]
            )

        raise ValueError(f"Invalid node type: {node!r}")

