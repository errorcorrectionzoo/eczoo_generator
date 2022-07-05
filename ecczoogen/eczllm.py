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
            
            self.htmlpgcollection.get_graphics_resource ........

            return GraphicsResource(....)




class EczLLMResourceInfo:
    def __init__(self, resource_type, resource_id, ymlfile):
        super().__init__()
        self.resource_type = resource_type
        self.resource_id = resource_id
        self.ymlfile = ymlfile




class EczLLMEnvironment(llmstd.LLMStandardEnvironment):
    def __init__(self, *, htmlpgcollection, citationsmanager, figure_filename_extensions):

        self.htmlpgcollection = htmlpgcollection
        self.citationsmanager = citationsmanager

        self.figure_filename_extensions = tuple([e for e in figure_filename_extensions if e])

        self.external_citations_provider = CitationsProvider(citationsmanager)
        self.external_ref_resolver = ExternalRefResolver(htmlpgcollection)
        self.graphics_resource_provider = \
            FeatureEczGraphicsResourceProvider(htmlpgcollection=htmlpgcollection)

        features = llmstd.standard_features(
            external_citations_provider=self.external_citations_provider,
            external_ref_resolver=self.external_ref_resolver,
            use_simple_path_graphics_resource_provider=False,
        )
        features.append(
            self.graphics_resource_provider
        )

        super().__init__( features=features )

    def make_resource_info(self, *args, **kwargs):
        return EczLLMResourceInfo(*args, **kwargs)

    def get_figure_filename_extensions(self):
        return self.figure_filename_extensions




# ----------------------------




EncounteredCitation = collections.namedtuple('EncounteredCitation',
                                             ['citation_key_prefix',
                                              'citation_key',
                                              'encountered_resource_info',
                                              'encountered_where'])

EncounteredImageFilename = collections.namedtuple('EncounteredFloat',
                                                  ['image_filename',
                                                   'encountered_resource_info',
                                                   'encountered_where'])



class NodeScanner(LatexNodesVisitor):
    def __init__(self, *, htmlpgcollection, citationsmanager):
        self.htmlpgcollection = htmlpgcollection
        self.citationsmanager = citationsmanager

        ....... directly add to htmlpgcollection/citationsmanager or store
        separately for later additions????...........

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




    def scan_schemadatalike_obj(self, obj, what=None):

        for (fldinfo, value) in obj.iter_fields_recursive(
                arrays_at_once=False
        ):
            #logger.debug(f"Scanning LLM in {obj} - iter {fldinfo=} / {value=}")
            if value is not None and fldinfo is not None \
               and fldinfo['schema'] is not None \
               and fldinfo['schema'].get('_llm', False):
                #
                if what is not None:
                    this_what = what
                else:
                    this_what = obj.what
                self.visit_nodelist(
                    value.nodes,
                    where=f"{this_what}{fldinfo['fieldname']}",
                    resource_info=value.resource_info
                )
