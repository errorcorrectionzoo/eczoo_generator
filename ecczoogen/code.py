import logging
logger = logging.getLogger(__name__)

import datetime


from .schemadata import SchemaData



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



class Code:
    def __init__(self, info, full_schema, source_info_filename, eczllm_environment):
        super().__init__()

        self.source_info = info

        self.source_info_filename = source_info_filename

        year = datetime.date.today().year
        if '_meta' in self.source_info:
            if 'year' in self.source_info['_meta']:
                year = self.source_info['_meta']['year']

        self.citation_info = {
            'year': year,
        }

        code_id = info['code_id']

        self.eczllm_environment = eczllm_environment
        self.llm_resource_info = self.eczllm_environment.make_resource_info(
            resource_type='code',
            resource_id=code_id,
        )

        self.schemadata = SchemaData(
            self.source_info,
            full_schema,
            what=f"<code {code_id}>",
            llm_environment=self.eczllm_environment,
            llm_resource_info=self.llm_resource_info,
        )

        # often used properties
        self.code_id = self.schemadata['code_id']
        self.name = self.schemadata['name']

        self.description = self.schemadata['description']
        
        # these fields only get set once we are assigned to a CodeCollection
        self.collection = None

        # these fields only get set after we are assigned to a CodeCollection
        # and after the code collection is finalized.
        self.relations = CodeRelations()

        self.family_generation_level = None
        self.family_root_code = None

    def short_name(self):
        if 'short_name' in self.schemadata:
            return self.schemadata['short_name']
        name = self.name
        if name.llm_text.endswith(" code"):
            return self.eczllm_environment.make_fragment(
                llm_text=name.llm_text[:-len(" code")],
                what=f"{name.what} (short)",
                resource_info=self.llm_resource_info,
                standalone_mode=True,
            )
        return name

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
        return self.name.llm_text

    def __repr__(self):
        return (
            f"Code(code_id={self.code_id!r}, "
                 f"source_info_filename={self.source_info_filename!r})"
        )

    def is_descendant_of(self, other_code_id):
        # follow parents until we find other_code_id.

        if self.code_id == other_code_id:
            return True
        
        code_ids_checked = set()

        checking_codes = [self]

        while checking_codes:

            new_checking_codes = []

            for checking_code in checking_codes:
                code_ids_checked.add(checking_code.code_id)

                for r in checking_code.relations.parents:
                    rcid = r.code.code_id
                    if other_code_id == rcid:
                        # parent found
                        return True
                    # add parent to codes that need to be checked
                    if rcid not in code_ids_checked:
                        new_checking_codes.append(r.code)
                        
            checking_codes = new_checking_codes

        return False

    def is_in_domain(self, domain_obj):
        # domain_obj is a data structure conforming to the "domains:" in
        # 'domainshierarchy' schema
        for kingdom in domain_obj['kingdoms']:
            if self.is_descendant_of(kingdom):
                return True
        return False

    def is_cousin_of(self, other_code_id):
        for rel in self.relations.cousins:
            if rel.code.code_id == other_code_id:
                return True
        for rel in self.relations.cousin_of:
            if rel.code.code_id == other_code_id:
                return True
        return False

    def get_relationship_to(self, other_code_id):
        for rel_field in ('parents', 'parent_of', 'cousins', 'cousin_of'):
            for rel in getattr(self.relations, rel_field):
                if rel.code.code_id == other_code_id:
                    return rel
        return None
        


