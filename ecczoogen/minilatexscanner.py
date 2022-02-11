import collections

import minilatextohtml


# ------------------------------------------------

# tool to scan for citations & external references to image filenames


EncounteredCitation = collections.namedtuple('EncounteredCitation',
                                             ['citation_key_prefix',
                                              'citation_key',
                                              'encountered_resource_parent_id',
                                              'encountered_where'])

EncounteredImageFilename = collections.namedtuple('EncounteredFloat',
                                                  ['image_filename',
                                                   'encountered_resource_parent_id',
                                                   'encountered_where'])


class ScannerRefContext(minilatextohtml.HtmlRefContext):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # list of (citation_key_prefix [lower-case], citation_key, where)
        self.encountered_citations = []
        self.encountered_image_filenames = []
        self.cur_where = None
        self.cur_resource_parent_id = None

    def get_ref(self, ref_key_prefix, ref_key):
        # return (target_html, targethref)
        return ('','')

    def add_footnote(self, footnotetext):
        # return (footnotelabel_html, footnotehref)
        return ('','')

    def add_citation(self, citation_key_prefix, citation_key,
                     optional_cite_extra_html=None):
        # return (citelabel_html, citehref)
        self.encountered_citations.append(
            EncounteredCitation(
                citation_key_prefix=citation_key_prefix,
                citation_key=citation_key,
                encountered_resource_parent_id=self.cur_resource_parent_id,
                encountered_where=self.cur_where,
            )
        )
        return ('','')

    def add_float(self, float_obj):
        if not float_obj.contents_image_filename:
            return ''
        self.encountered_image_filenames.append(
            EncounteredImageFilename(
                image_filename=float_obj.contents_image_filename,
                encountered_resource_parent_id=self.cur_resource_parent_id,
                encountered_where=self.cur_where,
            )
        )
        return ''


class MiniLatexScanner:
    def __init__(self):
        super().__init__()

        self.refcontext = ScannerRefContext()

    def scan_minilatex(self, minilatex, *, where, resource_parent_id=None):
        #logger.debug(f"Scanning for citations in {where} (“{minilatex}”)")
        try:
            self.refcontext.cur_where = where
            self.refcontext.cur_resource_parent_id = resource_parent_id
            dummy = minilatex.to_html(self.refcontext)
        except Exception as e:
            logger.warning(f"Error while scanning for citations in ‘{where}’: {e}")
            raise
        # we can ignore dummy, our add_citation() callback will have fired for
        # any encountered citation.

    def scan_schemadatalike_obj(self, obj, resource_parent_obj=True, what=None):

        if resource_parent_obj is True:
            resource_parent_obj = obj

        resource_parent_id = None

        for (fldinfo, value) in obj.iter_fields_recursive(
                arrays_at_once=False
        ):
            #logger.debug(f"Cite scanning in {obj} - iter {fldinfo=} / {value=}")
            if value is not None and fldinfo is not None \
               and fldinfo['schema'] is not None \
               and fldinfo['schema'].get('_minilatex', False):
                if resource_parent_obj is not None:
                    resource_parent_id = resource_parent_obj.resource_parent_id()
                if what is not None:
                    this_what = what
                else:
                    this_what = obj.what
                self.scan_minilatex(value,
                                    where=f"{this_what}{fldinfo['fieldname']}",
                                    resource_parent_id=resource_parent_id)

    def get_encountered_citations(self):
        # returns a list of pairs of (citation_key_prefix, citation_key)
        return self.refcontext.encountered_citations

    def get_encountered_image_filenames(self):
        # returns a list of pairs of (citation_key_prefix, citation_key)
        return self.refcontext.encountered_image_filenames
