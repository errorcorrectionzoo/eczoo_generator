import logging
logger = logging.getLogger(__name__)


from minilatextohtml import MiniLatex


from .schemadata import SchemaData


class Code:
    def __init__(self, info, full_schema):
        super().__init__()

        self.source_info = info

        # source file (the zoo sets this relative to the codes_dir folder)
        self.source_info_filename = None

        self.citation_info = {
            'year': 2021 # FIXME: WHAT YEAR SHOULD WE SET?  FIND FILE/GIT MODIFICATION DATE?
        }

        code_id = info['code_id']

        self.schemadata = SchemaData(info, full_schema, what=f"<code {code_id}>")

        # often used properties
        self.code_id = self.schemadata['code_id']
        self.name = self.schemadata['name']

        
        # these fields only get set once we are assigned to a CodeCollection
        self.collection = None

        # these fields only get set after we are assigned to a CodeCollection
        # and after the code collection is finalized.
        self.relations = CodeRelations()

        self.family_generation_level = None
        self.family_root_code = None


    def __getitem__(self, key):
        return self.schemadata[key]

    def getfield(self, key, default=None):
        return self.schemadata.getfield(key, default=default)


    def iter_fields_recursive(self, **kwargs):
        for (fldinfo, value) in self.schemadata.iter_fields_recursive(**kwargs):
            yield (fldinfo, value)
        # now also yield the relations data structure which is trickier to
        # traverse
        relschema = self.schemadata.full_schema \
            ['properties']['relations']['properties']['parents']['items']['properties']
        for rel_type in ('parent', 'cousin',):
            for rel_direction in ('s', '_of',):
                for j, rel in enumerate(self.relations[rel_type+rel_direction]):
                    for rel_field in ('code_id', 'detail'):
                        fldinfo = {
                            'fieldname': f"{rel_type}{rel_direction}.{j}.{rel_field}",
                            'schema': relschema[rel_field],
                        }
                        yield (fldinfo, rel[rel_field])

    def __str__(self):
        return self.name.minilatex

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

    def __getitem__(self, key):
        if key == 'code_id':
            return self.code.code_id
        return self.__dict__[key]


class CodeRelations:
    def __init__(self):
        super().__init__()
        self.parents = None
        self.parent_of = []
        self.cousins = None
        self.cousin_of = []

    def __getitem__(self, key):
        return self.__dict__[key]

    def __repr__(self):
        return (
            "CodeRelations(parents={!r}, parent_of={!r}, cousins={!r}, cousin_of={!r})"
            .format(self.parents, self.parent_of, self.cousins, self.cousin_of)
        )



