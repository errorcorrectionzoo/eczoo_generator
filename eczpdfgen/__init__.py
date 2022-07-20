import logging
logger = logging.getLogger(__name__)

from llm.fragmentrenderer import latex as llmfr_latex


_render_features_list = [
    ('rate', 'Rate'),
    ('magic_scaling_exponent', 'Magic'),
    ('encoders', 'Encoding'),
    ('transversal_gates', 'Transversal Gates'),
    ('general_gates', 'Gates'),
    ('decoders', 'Decoding'),
    ('fault_tolerance', 'Fault Tolerance'),
    ('code_capacity_threshold', 'Code Capacity Threshold'),
    ('threshold', 'Threshold'),
]

def llmrender(value, rc):
    if isinstance(value, list):
        return (
            r"\begin{eczparagraphslist}" + "".join([
                r'\item\relax ' + v.render(rc)
                for v in value
            ])
            + r"\end{eczparagraphslist}"
        )
    return value.render(rc)
    

class CodeInfoLatexRenderer:

    def __init__(self, code):
        self.code = code

    def render_function(self, render_context):

        latex_output = []

        code = self.code

        rc = render_context

        introduced_content = ''
        if code['introduced']:
            introduced_content = ' ' + code['introduced'].render(rc)

        latex_output.append(
            r'\eczcode{' + code.name.render(rc)
            + introduced_content + r'}'
        )

        def render_code_field(fieldname, fieldtitle):
            if code[fieldname]:
                latex_output.append( r'\section{' + fieldtitle + '}' )
                latex_output.append( llmrender(code[fieldname], rc) )

        render_code_field('description', 'Description')

        render_code_field('protection', 'Protection')

        if code['features']:

            for feature_field, feature_name in _render_features_list:

                value = code['features'].get(feature_field, None)
                if value is None:
                    continue

                latex_output.append( r'\section{' + feature_name + '}' )
                latex_output.append( llmrender(value, rc) )

        render_code_field('realizations', 'Realizations')

        render_code_field('notes', 'Notes')

        def render_code_relations_list(rel_types, reltitlesingplur):

            relation_list = []
            for rel_type in rel_types:
                relation_list += getattr(code.relations, rel_type)

            if not relation_list:
                return

            reltitlesing, reltitleplur = reltitlesingplur
            if len(relation_list) > 1:
                reltitle = reltitleplur
            else:
                reltitle = reltitlesing

            latex_output.append(r'\section{' + reltitle + '}')

            def render_relation(relobj):
                cn = llmrender(relobj.code.name, rc)
                cn = r'\href{https://errorcorrectionzoo.org/c/'+relobj.code.code_id+'}{'+cn+'}'
                if relobj.detail:
                    return cn + ' --- ' + llmrender(relobj.detail, rc)
                return cn

            latex_output.append(
                r"\begin{itemize}"
                + "\n".join([
                    r"\item\relax " + render_relation(relobj) + '\n\n'
                    for relobj in relation_list
                ])
                + r"\end{itemize}"
            )
        
        render_code_relations_list(['parents'], ('Parent', 'Parents'))
        render_code_relations_list(['parent_of'], ('Child', 'Children'))
        render_code_relations_list(['cousins','cousin_of'], ('Cousin', 'Cousins'))

        return "\n\n".join( latex_output )

    
    


def generate_codes_latex_document(zoo, code_ids, eczllm_environment):

    fr = llmfr_latex.LatexFragmentRenderer()

    fr.text_format_cmds['defterm-term'] = 'ecztermdef'
    fr.latex_wrap_verbatim_macro = 'eczshowverbatim'
    fr.latex_semantic_block_environments['figure_caption'] = 'eczfigcaption'

    code_renderers = [ CodeInfoLatexRenderer(zoo.get_code(code_id))
                       for code_id in code_ids ]

    def render_function(render_context):
        result = []
        for r in code_renderers:
            result.append( r.render_function(render_context) )

        return "\n\n\\clearpage\n\n".join(result)

    llm_doc = eczllm_environment.make_document( render_function )

    full_rendered_output, render_context = llm_doc.render( fr )

    # render the endnotes
    rendered_endnotes = None
    endnotes_mgr = render_context.feature_render_manager('endnotes')
    if endnotes_mgr is not None:
        rendered_endnotes = endnotes_mgr.render_endnotes(
            endnotes_heading_title='References',
            endnotes_heading_level=2,
        )

    # put together the full document

    ltx = r'\documentclass{ecznote}' + '\n\n'
    ltx += r'\begin{document}' + '\n'

    ltx += full_rendered_output

    if rendered_endnotes:
        ltx += "\n\n"
        if len(code_ids) > 1:
            ltx += r"\clearpage" + "\n"
        ltx += rendered_endnotes

    ltx += "\n\n"
    ltx += r'\end{document}'
    ltx += "\n"

    return ltx
