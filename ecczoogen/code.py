import logging
logger = logging.getLogger(__name__)


class Code:
    def __init__(self, info):
        super().__init__()

        self.source_info = info

        # source file (the zoo sets this relative to the codes_dir folder)
        self.source_info_filename = None

        # parse the data structure.
        try:
            kw = dict(info)

            self.code_id = kw.pop('code_id')
            self.physical = kw.pop('physical', None)
            self.logical = kw.pop('logical', None)

            self.name = kw.pop('name')
            self.introduced = kw.pop('introduced', None)
            self.description = kw.pop('description')

            self.protection = kw.pop('protection', None)

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


    def fields_as_text_for_indexing(self, _minilatextotext):

        def _value_to_text(val):
            if not val:
                return ''
            if isinstance(val, str):
                return _minilatextotext(val)
            if isinstance(val, list):
                return '\n\n'.join(_value_to_text(x) for x in val)
            # if isinstance(val, dict):
            #     return '\n\n'.join( (_minilatextotext(k)+': '+_value_to_text(v))
            #                          for k,v in val.items() )
            raise ValueError(f"Not sure how to handle value ‘{val!r}’ for indexing!")

        d = {
            k: _value_to_text( getattr(self, k, None) )
            for k in (
                    'name', 'description', 'protection',
                    'realizations', 'notes'
            )
        }
        d.update({
            f'feature {featurename}': _value_to_text( self.features[featurename] )
            for featurename in self.features
        })

        d.update({
            f'{reltype} detail': '\n\n'.join([
                _minilatextotext(relobj.detail)
                for relobj in getattr(self.relations, reltype+'s') # "self.relations.parents"
            ])
            for reltype in ('parent', 'cousin')
        })

        return d


    def __str__(self):
        return self.name

    def __repr__(self):
        return (
            f"Code(code_id={self.code_id!r}, "
                 f"source_info_filename={self.source_info_filename!r})"
        )


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



