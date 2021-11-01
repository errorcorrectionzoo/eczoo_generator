import logging
logger = logging.getLogger(__name__)


class Code:
    def __init__(self, info):
        super().__init__()

        self._info = info

        # source file (the zoo sets this relative to the codes_dir folder)
        self.code_src_filename = None

        # parse the data structure.
        try:
            kw = dict(info)

            self.code_id = kw.pop('code_id')

            self.name = kw.pop('name')
            self.description = kw.pop('description')
            self.introduced = kw.pop('introduced', None)

            self.protection = kw.pop('protection', None)
            self.decoder = kw.pop('decoder', None)

            self.physical = kw.pop('physical', None)
            self.logical = kw.pop('logical', None)

            self.features = {
                k: v
                for (k,v) in kw.pop('features', {}).items() # a dictionary
            }

            self.realizations = kw.pop('realizations', None)
            
            self.notes = kw.pop('notes', None) # array of free text entries

            rel_info = dict( kw.pop('relations', {}) )
            self.relations_info = {
                'parents': rel_info.pop('parents', {}),
                'cousins': rel_info.pop('cousins', {}),
            }
            if rel_info:
                raise ValueError(f"Additional unexpected keys "
                                 f"{list(rel_info.keys())} in YML under ‘relations:’ for "
                                 f"code ‘{self.code_id}’")

            if kw:
                raise ValueError(f"Additional unexpected keys "
                                 f"{list(kw.keys())} in YML for code ‘{self.code_id}’")

        except KeyError as e:
            logger.error(f"Missing key for code {self.code_id}: {e}")
            raise
        except Exception as e:
            logger.error(f"Error parsing data structure for code {self.code_id}: {e}")
            raise

        
        # these fields only get set once we are assigned to a CodeCollection
        self.collection = None

        # these fields only get set after we are assigned to a CodeCollection
        # and after the code collection is finalized.
        self.relations = CodeRelations()
        self.family_generation_level = None
        self.family_root_code = None

    def __str__(self):
        return self.name

    def __repr__(self):
        return "Code(code_id={!r})".format(self.code_id)


class Relation:
    def __init__(self, code, detail):
        super().__init__()
        self.code = code
        self.detail = detail


class CodeRelations:
    def __init__(self):
        super().__init__()
        self.parents = None
        self.parent_of = []
        self.cousins = None
        self.cousin_of = []

    def __repr__(self):
        return (
            "CodeRelations(parents={!r}, parent_of={!r}, cousins={!r}, cousin_of={!r})"
            .format(self.parents, self.parent_of, self.cousins, self.cousin_of)
        )



