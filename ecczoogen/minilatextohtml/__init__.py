# latex inspired mini-language to HTML

# note that this sub-module isn't markupsafe-aware, it only treats strings.

import html

def htmlescape(x):
    return str(html.escape(x))


import logging
logger = logging.getLogger(__name__)

from pylatexenc import latexwalker, macrospec

# ----------------------------

# The following utility is used to parse the main argument of \cite{} as well as
# the first argument of \href{}{}.  In those arguments, special characters (such
# as '%' and '$') should be interpreted literally, with no LaTeX special
# meaning.  They are not quite verbatim args because the argument is enclosed in
# matched braces.  Additionally, any open brace opens a normal LaTeX group in
# which normal parsing is used again (e.g., for "\cite{manual:{Author,
# \emph{Some Book Title}, 1955}}")
class VerbatimLikeSingleArgumentParser:
    def __init__(self, delimiters=('{','}',)):
        super().__init__()
        self.delimiters = delimiters

    def parse_arg(self, w, pos, *, parsing_state, **kwargs):
        open_tok = w.get_token(pos, include_brace_chars=[self.delimiters])
        if open_tok.tok != 'brace_open':
            raise ValueError(f"Expected opening brace ‘{self.delimiters[0]}’ for argument")

        open_pos = open_tok.pos

        content_node_list = []
        content_start_pos = open_tok.pos + open_tok.len
        pos = content_start_pos

        def _flush_chars_node():
            if pos == content_start_pos:
                # no chars, no need for a node
                return
            # assemble chars seen so far into a chars node
            charsnode = w.make_node( latexwalker.LatexCharsNode,
                                     chars=w.s[content_start_pos:pos],
                                     pos=content_start_pos,
                                     len=pos - content_start_pos,
                                     parsing_state=parsing_state )
            content_node_list.append(charsnode)

        while pos < len(w.s):
            if w.s[pos] == self.delimiters[1]:
                _flush_chars_node()
                pos += 1 # point one after to return correct length
                break
            if w.s[pos] != '{':
                # add char and move on
                pos += 1
                continue
            # we have s[pos] == '{' -- assemble chars seen so far into a chars
            # node, and read a normal LaTeX group
            _flush_chars_node()
            groupnode, grouppos, grouplen = \
                w.get_latex_braced_group(pos, parsing_state=parsing_state)
            content_node_list.append(groupnode)
            content_start_pos = grouppos + grouplen
            pos = content_start_pos

        group_node = w.make_node(
            latexwalker.LatexGroupNode,
            delimiters=self.delimiters,
            nodelist=content_node_list,
            pos=open_pos,
            len=pos - open_pos,
            parsing_state=parsing_state
        )
        return group_node, group_node.pos, group_node.len



class MacroVerbatimLikeArgumentArgsParser(macrospec.MacroStandardArgsParser):
    def __init__(self, arg_spec_list):
        # arg_spec_list is a list of a standard argspec type ('{', '[', '*') or
        # a VerbatimLikeSingleArgumentParser instance.
        self.arg_spec_list = arg_spec_list
        argspec = ''.join([a if a in ('[', '{', '*') else '{'
                           for a in arg_spec_list])
        super().__init__(argspec)

    def parse_args(self, w, pos, parsing_state=None):
        
        if parsing_state is None:
            parsing_state = w.make_parsing_state()

        start_pos = pos

        argnlist = []

        for j, argt in enumerate(self.arg_spec_list):
            if isinstance(argt, VerbatimLikeSingleArgumentParser):
                node, nodepos, nodelen = \
                    argt.parse_arg(w, pos, parsing_state=parsing_state)
                pos = nodepos + nodelen
                argnlist.append(node)
                continue

            if argt == '{':
                (node, np, nl) = w.get_latex_expression(
                    pos,
                    strict_braces=False,
                    parsing_state=parsing_state,
                )
                pos = np + nl
                argnlist.append(node)

            elif argt == '[':

                optarginfotuple = w.get_latex_maybe_optional_arg(
                    pos,
                    parsing_state=parsing_state,
                )
                if optarginfotuple is None:
                    argnlist.append(None)
                    continue
                (node, np, nl) = optarginfotuple
                pos = np + nl
                argnlist.append(node)

            else:
                raise ValueError(f"Invalid argument type: {argt!r}")
        
        parsed = macrospec.ParsedMacroArgs(
            argspec=self.argspec,
            argnlist=argnlist,
        )

        return (parsed, start_pos, pos-start_pos)


_lw_context = macrospec.LatexContextDb()
_lw_context.add_context_category(
    'base-formatting',
    macros=[
        macrospec.MacroSpec('textbackslash', ''),
        macrospec.MacroSpec('%', ''),
        macrospec.MacroSpec(' ', ''),
        macrospec.MacroSpec('{', ''),
        macrospec.MacroSpec('}', ''),

        macrospec.MacroSpec('emph', '{'),
        macrospec.MacroSpec('textit', '{'),
        macrospec.MacroSpec('textbf', '{'),
    ]
)
_lw_context.add_context_category(
    'x-refs',
    macros=[
        macrospec.MacroSpec('ref', '{'),
        macrospec.MacroSpec('cite',
                            args_parser=MacroVerbatimLikeArgumentArgsParser(
                                arg_spec_list=(
                                    '[',
                                    VerbatimLikeSingleArgumentParser(delimiters=('{','}')),
                                )
                            )),
        macrospec.MacroSpec('footnote', '{'),
        macrospec.MacroSpec('href',
                            args_parser=MacroVerbatimLikeArgumentArgsParser(
                                arg_spec_list=(
                                    VerbatimLikeSingleArgumentParser(delimiters=('{','}')),
                                    '{',
                                )
                            )),
        macrospec.MacroSpec('hyperref', '[{'),
        macrospec.MacroSpec('url', '{'),
    ]
)



# ----------------------------


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



class ToHtmlConverter:
    def __init__(self, refcontext):
        super().__init__()
        self.refcontext = refcontext

    def to_html(self, s):
        lw = latexwalker.LatexWalker(s, latex_context=_lw_context, tolerant_parsing=False)
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
        #logger.debug(f"html_wrap_in_tag: code is ‘{s}’")
        return s

    def _get_ref(self, reftarget):
        refprefix = None
        if ':' in reftarget:
            (refprefix, reftarget) = reftarget.split(':', 1)
        (target_html, target_href) = self.refcontext.get_ref(refprefix, reftarget)
        return (target_html, target_href)



    def macro_node_to_html(self, mn):

        # special symbols macros
        if mn.macroname == '%':
            return '%'
        if mn.macroname == ' ':
            return ' '
        if mn.macroname == '{':
            return '{'
        if mn.macroname == '}':
            return '}'
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
                raise ValueError("Invalid \\ref invocation: expected single braced argument")
            reftarget = tgt[0].chars
            (target_html, target_href) = self._get_ref(reftarget)
            logger.debug(f"Ref: ‘{mn.latex_verbatim()}’ → ‘{target_html}’")
            return self.html_wrap_in_tag(
                'a',
                target_html,
                attrs={'href': htmlescape(target_href)},
                class_='ref',
            )

        if mn.macroname == 'hyperref':
            reftarget = self.nodearg_to_html(mn, 0)
            disphtml = self.nodearg_to_html(mn, 1)
            (target_html, target_href) = self._get_ref(reftarget)
            # ignore target_html
            logger.debug(f"Ref: ‘{mn.latex_verbatim()}’ → ‘{target_html}’")
            return self.html_wrap_in_tag(
                'a',
                disphtml,
                attrs={'href': htmlescape(target_href)},
                class_='ref',
            )

        if mn.macroname == 'cite':
            optional_cite_extra_html_nodelist = self.get_nodearglist(mn, 0)

            if optional_cite_extra_html_nodelist \
               and len(optional_cite_extra_html_nodelist) \
               and optional_cite_extra_html_nodelist[0]:
                optional_cite_extra_html = \
                    self.nodelist_to_html(optional_cite_extra_html_nodelist)
            else:
                optional_cite_extra_html = None

            citekeylist_nodelist = self.get_nodearglist(mn, 1)

            #logger.debug(f"Parsing citation command: {citekeylist_nodelist=}")
            #logger.debug(f"  {optional_cite_extra_html_nodelist=}")

            if not citekeylist_nodelist:
                raise ValueError("Expected single {...} argument to ‘\\cite’") 

            cite_key_split_nodelist = [ [] ]

            # split arg into commas, but obey protected {...} groups.
            #
            # we first iterate through the node list and build the list of
            # citation keys.  We keep everything in terms of nodes and node
            # lists for now.  The only nodes that should appear are char nodes
            # and group nodes; anything else points to an internal parsing
            # error.
            for n in citekeylist_nodelist:
                #logger.debug(f"{cite_key_split_nodelist=}")
                if n.isNodeType(latexwalker.LatexCharsNode):
                    parts = n.chars.split(',')
                    if parts[0]:
                        cite_key_split_nodelist[-1].append(parts[0])
                    parts = parts[1:]
                    if not parts:
                        # string didn't contain any comma
                        continue
                    for p in parts:
                        cite_key_split_nodelist.append( [p] )
                    #logger.debug(f"  now {cite_key_split_nodelist=}")
                    continue
                if n.isNodeType(latexwalker.LatexGroupNode):
                    cite_key_split_nodelist[-1].append(n)
                    continue
                raise ValueError(f"Unexpected node {n!r}, expected char node or group node in citation argument")
                        
            #logger.debug(f"Citation keys are split: {cite_key_split_nodelist=}")

            s = ''
            for citekeynodes in cite_key_split_nodelist:

                if not citekeynodes or citekeynodes == ['']:
                    continue

                citekey_verbatim = ''
                citekey_prefix = None
                after_prefix_nodes = None
                for n in citekeynodes:
                    if isinstance(n, str):
                        citekey_verbatim += n
                    else:
                        citekey_verbatim += n.latex_verbatim()

                    if after_prefix_nodes is None and ':' in citekey_verbatim:
                        citekey_prefix, citekey_rest = citekey_verbatim.split(':', 1)
                        after_prefix_nodes = [ citekey_rest ]
                    elif after_prefix_nodes is not None:
                        after_prefix_nodes.append(n)

                if after_prefix_nodes is not None:
                    after_prefix_verbatim = ''.join(
                        n if isinstance(n, str) else n.latex_verbatim()
                        for n in after_prefix_nodes
                    )
                else:
                    after_prefix_verbatim = None

                if after_prefix_verbatim is not None:
                    # have a prefix
                    citation_key_prefix = citekey_prefix
                    citation_key = after_prefix_verbatim
                else:
                    # didn't have a prefix
                    citation_key_prefix = None
                    citation_key = citekey_verbatim

                citelabel_html, citehref = \
                    self.refcontext.add_citation(citation_key_prefix, citation_key,
                                                 optional_cite_extra_html)

                s += self.html_wrap_in_tag(
                    'a',
                    citelabel_html,
                    attrs={
                        'href': htmlescape(citehref),
                    },
                    class_='cite',
                )
            logger.debug(f"Citation: ‘{mn.latex_verbatim()}’ → ‘{s}’")
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

        # useful for some of our processing tools, c.f. e.g. \cite implementation above
        if isinstance(node, str):
            s = node
            return htmlescape(s)

        if node.isNodeType(latexwalker.LatexCharsNode):
            return htmlescape(node.chars)

        if node.isNodeType(latexwalker.LatexCommentNode):
            logger.error(
                f"You cannot use LaTeX comments (‘%{node.comment}’). "
                f"To type a percent sign, use ‘\\%’"
            )
            raise ValueError(f"LaTeX comments not supported: ‘%{node.comment}’. "
                             f"To type a percent sign, use ‘\\%’")

        if node.isNodeType(latexwalker.LatexGroupNode):
            return (
                #htmlescape(node.delimiters[0]) -- doesn't make sense to include {...}
                #+
                self.nodelist_to_html(node.nodelist)
                #+ htmlescape(node.delimiters[1])
            )

        if node.isNodeType(latexwalker.LatexMacroNode):
            return self.macro_node_to_html(node)

        if node.isNodeType(latexwalker.LatexEnvironmentNode):
            return self.environment_node_to_html(node)

        if node.isNodeType(latexwalker.LatexSpecialsNode):
            return self.specials_node_to_html(node)

        if node.isNodeType(latexwalker.LatexMathNode):
            return (
                f'<span class="{node.displaytype}-math">'
                + htmlescape(
                    node.delimiters[0]
                    + "".join(n.latex_verbatim() for n in node.nodelist)
                    + node.delimiters[1]
                )
                + '</span>'
            )

        raise ValueError(f"Invalid node type: {node!r}")

