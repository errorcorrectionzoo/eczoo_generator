from llm import llmstd
from llm.feature.refs import RefInstance
from llm.feature.graphics import GraphicsResource


class CitationsProvider:
    def __init__(self, citationsmanager):
        self.citationsmanager = citationsmanager

    def get_citation_full_text_llm(self, cite_prefix, cite_key):
        citeobj = self.citationsmanager.get_citation(cite_prefix, cite_key)
        return citeobj.full_citation_text_minilatex


class ExternalRefResolver:
    def __init__(self, htmlpgcollection):
        self.htmlpgcollection = None
    
    def get_ref(ref_prefix, ref_target):
        if ref_prefix == 'code':
            # refers to another code, find it & return link to it
            code = self.zoo.get_code(ref_target) # okay to raise exception

            target_href = self.htmlpgcollection.get_code_href(code.code_id)

            return RefInstance(
                ref_type=ref_prefix,
                ref_target=ref_target,
                formatted_ref_llm_text=code.name,
                target_href=target_href,
            )

        if ref_prefix == 'defterm':
            # refers to a \begin{defterm}...\end{defterm} in another code page
            defterm_term_llm_text, defterm_href = \
                self.htmlpgcollection.get_defterm_href(ref_target)

            return RefInstance(
                ref_type=ref_prefix,
                ref_target=ref_target,
                formatted_ref_llm_text=defterm_term_llm_text,
                target_href=target_href,
            )

        return None



class FeatureEczGraphicsResourceProvider(Feature):

    feature_name = 'graphics_resource_provider'

    def __init__(self, htmlpgcollection):
        self.htmlpgcollection = htmlpgcollection


    class RenderManager(Feature.RenderManager):

        def get_graphics_resource(self, graphics_path, resource_info):

            ymlpath = resource_info['ymlpath']
            
            self.htmlpgcollection.get_graphics_resource

            GraphicsResource(....)




def get_llm_environment(*, htmlpgcollection, citationsmanager):

    external_citations_provider = CitationsProvider(citationsmanager)
    external_ref_resolver = ExternalRefResolver(htmlpgcollection)

    features = llmstd.standard_features(
        external_citations_provider=external_citations_provider,
        external_ref_resolver=external_ref_resolver,
        use_simple_path_graphics_resource_provider=False,
    )
    features.append(
        FeatureEczGraphicsResourceProvider(htmlpgcollection=htmlpgcollection)
    )

    eczllmenviron = llmstd.LLMStandardEnvironment(
        features=features
    )

    return eczllmenviron



# ----------------------------


class NodeScanner(LatexNodesVisitor):
    def __init__(self, *, htmlpgcollection, citationsmanager):
        self.htmlpgcollection = htmlpgcollection
        self.citationsmanager = citationsmanager

    def visit_macro_node(self, node):
        if hasattr(node, 'llmarg_graphics_path'):
            # it's a graphics node, e.g., \includegraphics
            ymlfile = node.latex_walker.resource_info['ymlfile']
            self.htmlpgcollection.register_graphics(
                graphics_path=node.llmarg_graphics_path,
                relative_to_yml_file=ymlfile
            )

        if hasattr(node, 'llmarg_cite_items'):
            # it's a citation node with citations to track
            self.citationsmanager.add_citation(.........)


        super().visit_macro_node(node)



