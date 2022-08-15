import os.path
import logging
logger = logging.getLogger(__name__)

from pylatexenc.latexnodes.nodes import LatexNodesVisitor

from llm import llmstd
from llm.feature import Feature
from llm.feature.headings import FeatureHeadings
from llm.feature.endnotes import FeatureEndnotes, EndnoteCategory
from llm.feature.refs import FeatureRefs, RefInstance
from llm.feature.cite import FeatureExternalPrefixedCitations
from llm.feature.floats import FeatureFloatsIncludeGraphicsOnly, FloatType
from llm.feature.defterm import FeatureDefTerm
from llm.feature.graphics import GraphicsResource

from llm.fragmentrenderer.html import HtmlFragmentRenderer
from llm.fragmentrenderer.text import TextFragmentRenderer


class CitationsProvider:
    def __init__(self, citationsmanager):
        self.citationsmanager = citationsmanager

    def get_citation_full_text_llm(self, cite_prefix, cite_key, *, resource_info=None):
        citeobj = self.citationsmanager.get_citation(**dict([(cite_prefix, cite_key)]))
        if citeobj.full_citation_text_llm is None:
            raise ValueError(
                f"The citation manager was unable to resolve citation ‘{cite_prefix}:{cite_key}’"
            )
        return citeobj.full_citation_text_llm.llm_text


class ExternalRefResolver:
    def __init__(self, htmlpgcollection, zoo):
        self.htmlpgcollection = htmlpgcollection
        self.zoo = zoo
    
    def get_ref(self, ref_prefix, ref_target, *, resource_info=None):
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
                target_href=defterm_href,
            )

        if ref_prefix == 'topic':
            # refer to a referenceable topic, a section or a defterm (or ???)
            formatted_ref_llm_text, target_href = \
                self.htmlpgcollection.get_topic_href(ref_target)

            return RefInstance(
                ref_type=ref_prefix,
                ref_target=ref_target,
                formatted_ref_llm_text=formatted_ref_llm_text,
                target_href=target_href,
            )

        return None



class FeatureEczGraphicsResourceProvider(Feature):

    feature_name = 'graphics_resource_provider'

    def __init__(self):
        super().__init__()
        self.htmlpgcollection = None

    def set_htmlpgcollection(self, htmlpgcollection):
        self.htmlpgcollection = htmlpgcollection


    class RenderManager(Feature.RenderManager):

        def get_graphics_resource(self, graphics_path, resource_info):
            
            # TODO: do something smarter, please...

            info = self.feature.htmlpgcollection.get_image_filename_path_info(
                graphics_path,
                resource_info
            )
            image_info = info['image_info']

            phys_dim = image_info.get('physical_dimensions', ((None,'pt'), (None, 'pt')))

            assert phys_dim[0][1] == 'pt' and phys_dim[1][1] == 'pt'

            return GraphicsResource(
                src_url=info['prefixed_path'],
                graphics_type=image_info['type'],
                dpi=image_info.get('dpi', None),
                pixel_dimensions=image_info.get('pixel_dimensions', (None, None)),
                physical_dimensions=(phys_dim[0][0], phys_dim[1][0]),
            )




class EczLLMResourceInfo:
    def __init__(self, resource_type, resource_id):
        super().__init__()
        self.resource_type = resource_type
        self.resource_id = resource_id

    def __repr__(self):
        return f"{self.__class__.__name__}({self.resource_type!r}, {self.resource_id!r})"

    def __eq__(self, other):
        if not isinstance(other, EczLLMResourceInfo):
            return False
        return (
            self.resource_type == other.resource_type
            and self.resource_id == other.resource_id
        )

    def __hash__(self):
        # Define hash so we can use EczLLMResourceInfo types as dict keys.  We
        # need to define hash manually because we redefined __eq__.
        return hash( (self.resource_type, self.resource_id) )



heading_section_commands_by_level = {
    # only 'subsection' and 'paragraph' available.
    3: FeatureHeadings.SectionCommandSpec(r"subsection", inline=False),
    4: FeatureHeadings.SectionCommandSpec(r"paragraph", inline=True),
}

footnote_counter_formatter = 'alph'

endnote_categories = [
    EndnoteCategory('footnote',
                    counter_formatter=footnote_counter_formatter,
                    heading_title='Footnotes',
                    endnote_command='footnote'),
]

citation_counter_formatter = 'arabic'
citation_delimiters = ('[', ']')


float_types = [
    FloatType('figure', 'Figure', counter_formatter='Roman'),
    FloatType('table', 'Table', counter_formatter='Roman'),
]



class EczLLMEnvironment(llmstd.LLMStandardEnvironment):
    def __init__(self, *, figure_filename_extensions):

        self.htmlpgcollection = None
        self.citationsmanager = None
        self.zoo = None

        self.figure_filename_extensions = \
            tuple([e for e in figure_filename_extensions if e])

        self.external_citations_provider = None
        self.external_ref_resolver = None

        self.feature_headings = FeatureHeadings(
            section_commands_by_level=heading_section_commands_by_level,
        )
        self.feature_refs = FeatureRefs(
            external_ref_resolver=None,
        )

        self.feature_endnotes = FeatureEndnotes(categories=endnote_categories)
        
        self.feature_citations = FeatureExternalPrefixedCitations(
            external_citations_provider=None,
            counter_formatter=citation_counter_formatter,
            citation_delimiters=citation_delimiters,
        )

        self.feature_floats = FeatureFloatsIncludeGraphicsOnly(float_types=float_types)

        self.feature_defterm = FeatureDefTerm()
        #self.feature_defterm.render_defterm_with_term = False

        self.graphics_resource_provider = FeatureEczGraphicsResourceProvider()

        # SUPERCLASS constructor call here --
        super().__init__(
            features=[
                self.feature_headings,
                self.feature_refs,
                self.feature_endnotes,
                self.feature_citations,
                self.feature_floats,
                self.feature_defterm,
                self.graphics_resource_provider,
            ]
        )

    def set_htmlpgcollection_zoo(self, htmlpgcollection, zoo):
        self.htmlpgcollection = htmlpgcollection
        self.zoo = zoo

        self.graphics_resource_provider.set_htmlpgcollection(htmlpgcollection)

        self.external_ref_resolver = ExternalRefResolver(self.htmlpgcollection, self.zoo)
        self.feature_refs.set_external_ref_resolver(self.external_ref_resolver)

    def set_citationsmanager(self, citationsmanager):
        self.citationsmanager = citationsmanager

        self.external_citations_provider = CitationsProvider(citationsmanager)
        self.feature_citations.set_external_citations_provider(
            self.external_citations_provider
        )

    def make_resource_info(self, *args, **kwargs):
        return EczLLMResourceInfo(*args, **kwargs)

    def get_figure_filename_extensions(self):
        return self.figure_filename_extensions


    def make_html_fragment_renderer(self):
        return EczHtmlFragmentRenderer()

# ----------------------------


def _is_local_url(urlstring):
    return urlstring.startswith('#') or (
        urlstring.startswith('/')
        and not urlstring.startswith('//')
    )


class EczHtmlFragmentRenderer(HtmlFragmentRenderer):

    @classmethod
    def use_link_target_blank(cls, urlstring):
        return not _is_local_url(urlstring)

    inline_heading_add_space = False

    html_blocks_joiner = ""
    


def render_as_text(value, eczllm_environment):
    doc = eczllm_environment.make_document(
        value.render,
        feature_document_options=dict(
            citations=dict(
                use_endnotes=False,
            ),
        ),
    )

    tfr = TextFragmentRenderer()
    tfr.display_href_urls = False

    rendered_text, _ = doc.render( tfr )

    return rendered_text




# ----------------------------




class EncounteredCitation:
    def __init__(self, citation_key_prefix, citation_key,
                 encountered_resource_info, encountered_where):
        super().__init__()
        self.citation_key_prefix = citation_key_prefix
        self.citation_key = citation_key
        self.encountered_resource_info = encountered_resource_info
        self.encountered_where = encountered_where

        self._fields = ('citation_key_prefix', 'citation_key',
                        'encountered_resource_info', 'encountered_where',)

    def __repr__(self):
        return (
            f"{self.__class__.__name__}("
            + ", ".join(f"{k}={getattr(self,k)!r}" for k in self._fields)
            + ")"
        )


class EncounteredImageFilename:
    def __init__(self, image_filename, encountered_resource_info, encountered_where):
        super().__init__()
        self.image_filename = image_filename
        self.encountered_resource_info = encountered_resource_info
        self.encountered_where = encountered_where

        self._fields = ('image_filename',
                        'encountered_resource_info', 'encountered_where',)

    def __repr__(self):
        return (
            f"{self.__class__.__name__}("
            + ", ".join(f"{k}={getattr(self,k)!r}" for k in self._fields)
            + ")"
        )


# ### I think EncounteredDefTerm is redundant now that we have the
# ### EncounteredReferenceableInfo.  I'm not 100% sure and I'll leave it like
# ### this, at least for now ...
class EncounteredDefTerm:
    def __init__(self, defterm_llm_text, defterm_safe_target_id,
                 defterm_body_llm,
                 encountered_resource_info, encountered_where):
        super().__init__()
        self.defterm_llm_text = defterm_llm_text
        self.defterm_safe_target_id = defterm_safe_target_id
        self.defterm_body_llm = defterm_body_llm
        self.encountered_resource_info = encountered_resource_info
        self.encountered_where = encountered_where

        self._fields = ('defterm_llm_text', 'defterm_safe_target_id', 'defterm_body_llm',
                        'encountered_resource_info', 'encountered_where',)

    def __repr__(self):
        return (
            f"{self.__class__.__name__}("
            + ", ".join(f"{k}={getattr(self,k)!r}" for k in self._fields)
            + ")"
        )


class EncounteredReferenceableInfo:
    def __init__(self, referenceable_info, encountered_resource_info, encountered_where):
        super().__init__()
        self.referenceable_info = referenceable_info
        self.encountered_resource_info = encountered_resource_info
        self.encountered_where = encountered_where

        self._fields = ('referenceable_info',
                        'encountered_resource_info', 'encountered_where',)

    def __repr__(self):
        return (
            f"{self.__class__.__name__}("
            + ", ".join(f"{k}={getattr(self,k)!r}" for k in self._fields)
            + ")"
        )




class NodeScanner(LatexNodesVisitor):
    def __init__(self):
        super().__init__()
        self.encountered = {
            'citations': [],
            'image_filenames': [],
            'defterms': [],
            'referenceable_infos': [],
        }

    def get_encountered_citations(self, *, resource_info=None):
        return self._get_encountered('citations', resource_info)

    def get_encountered_image_filenames(self, *, resource_info=None):
        return self._get_encountered('image_filenames', resource_info)

    def get_encountered_defterms(self, *, resource_info=None):
        return self._get_encountered('defterms', resource_info)

    def get_encountered_referenceable_infos(self, *, resource_info=None):
        return self._get_encountered('referenceable_infos', resource_info)

    def _get_encountered(self, object_type, resource_info=None):
        if resource_info is None:
            return self.encountered[object_type]
        return (
            x
            for x in self.encountered[object_type]
            if x.encountered_resource_info == resource_info
        )


    def compile_referenceableinfo_list_by_reftype(self, ref_type, *, resource_info=None):
        encountered_referenceable_infos = \
            self._get_encountered('referenceable_infos', resource_info)

        ref_list = []
        for encountered_referenceable_info in encountered_referenceable_infos:
            for label_ref_type, label_ref_label in \
                encountered_referenceable_info.referenceable_info.labels:
                #
                if label_ref_type == ref_type:
                    ref_list.append(
                        {
                            'ref_type': label_ref_type,
                            'ref_label': label_ref_label,
                            'referenceable_info':
                                encountered_referenceable_info.referenceable_info
                        }
                    )

        return ref_list
                    

    # ---

    def visit_macro_node(self, node):
        #logger.debug("scanner -- visiting node %r", node)

        if hasattr(node, 'llmarg_graphics_path'):
            # it's a graphics node, e.g., \includegraphics
            graphics_options_value = node.llmarg_graphics_options_value
            graphics_path = node.llmarg_graphics_path

            self.encountered['image_filenames'].append(
                EncounteredImageFilename(
                    image_filename=graphics_path,
                    encountered_resource_info=node.latex_walker.resource_info,
                    encountered_where=node.latex_walker.what,
                )
            )

        if hasattr(node, 'llmarg_cite_items'):
            # it's a citation node with citations to track
            for cite_item in node.llmarg_cite_items:
                citation_key_prefix, citation_key = cite_item
                self.encountered['citations'].append(
                    EncounteredCitation(
                        citation_key_prefix=citation_key_prefix,
                        citation_key=citation_key,
                        encountered_resource_info=node.latex_walker.resource_info,
                        encountered_where=node.latex_walker.what,
                    )
                )

        if hasattr(node, 'llm_referenceable_info'):
            self.encountered['referenceable_infos'].append(
                EncounteredReferenceableInfo(
                    referenceable_info=node.llm_referenceable_info,
                    encountered_resource_info=node.latex_walker.resource_info,
                    encountered_where=node.latex_walker.what,
                )
            )

        super().visit_macro_node(node)

    def visit_environment_node(self, node):
        if hasattr(node, 'llmarg_term_llm_ref_label_verbatim'):
            defterm_llm_text = node.llmarg_term_llm_ref_label_verbatim
            defterm_safe_target_id = node.llm_referenceable_info.get_target_id()
            defterm_body_llm = node.latex_walker.llm_environment.make_fragment(
                node.nodelist,
                is_block_level=True,
                resource_info=None,
                what=f'defterm ‘{defterm_llm_text}’ body',
            )

            logger.debug(
                f"registering defterm for {node.latex_walker.resource_info=}: "
                f"{defterm_llm_text=!r}"
            )

            self.encountered['defterms'].append(
                EncounteredDefTerm(
                    defterm_llm_text=defterm_llm_text,
                    defterm_safe_target_id=defterm_safe_target_id,
                    defterm_body_llm=defterm_body_llm,
                    encountered_resource_info=node.latex_walker.resource_info,
                    encountered_where=node.latex_walker.what,
                )
            )

        if hasattr(node, 'llm_referenceable_info'):
            self.encountered['referenceable_infos'].append(
                EncounteredReferenceableInfo(
                    referenceable_info=node.llm_referenceable_info,
                    encountered_resource_info=node.latex_walker.resource_info,
                    encountered_where=node.latex_walker.what,
                )
            )

        super().visit_environment_node(node)

    def scan_schemadatalike_obj(self, obj, what=None):
        visitor_scan_schemadatalike_obj(self, obj, what=what)



def visitor_scan_schemadatalike_obj(visitor, obj, what=None):
    for (fldinfo, value) in obj.iter_fields_recursive(
            arrays_at_once=False
    ):
        #logger.debug(f"Scanning for LLM in {obj} - iter {fldinfo=} / {value=}")
        if value is not None and fldinfo is not None \
           and fldinfo['schema'] is not None \
           and fldinfo['schema'].get('_llm', False):
            #
            if what is not None:
                this_what = what
            else:
                this_what = obj.what

            #logger.debug(f"Scanning LLM “{value.what}”")

            value.start_node_visitor( visitor )
