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
            'year': 2022 # FIXME: WHAT YEAR SHOULD WE SET?  FIND FILE/GIT MODIFICATION DATE?
        }

        self.schemadata = SchemaData(info, full_schema)

        # often used properties
        self.code_id = self.schemadata.data['code_id']
        self.name = self.schemadata.data['name']

        # # parse the data structure.
        # try:
        #     kw = dict(info)

        #     self._fields = []
        #     self.data = {}

        #     def def_fld(fld, *, mandatory=False, minilatex=False, is_list=False):

        #         fldseq = fld.split('.')
        #         fldobj = self.data
        #         fldkw = kw
        #         for fldpart in fldseq[:-1]:
        #             if fldpart not in fldobj:
        #                 fldpart[fldpart] = {}
        #             fldobj = fldpart[fldpart]
        #             fldvalue = fldkw.get(fldvalue, {})
        #         fldpart = fldseq[len(fldseq)-1]

        #         if mandatory:
        #             value = fldkw.get(fld)
        #         else:
        #             value = fldkw.get(fld, None)

        #         if minilatex:
        #             if is_list:
        #                 value = [ MiniLatex( x ) for x in value ]
        #             else:
        #                 value = MiniLatex( value )
                    
        #         fldobj[fldpart] = value

        #         self._fields.append({
        #             'fieldname': fld,
        #             'mandatory': mandatory,
        #             'minilatex': minilatex,
        #             'is_list': is_list,
        #         })

        #     def_fld('code_id', mandatory=True)
        #     def_fld('physical')
        #     def_fld('logical')

        #     def_fld('name', mandatory=True, minilatex=True)
        #     def_fld('introduced', minilatex=True)
        #     def_fld('description', minilatex=True)

        #     def_fld('protection', minilatex=True)

        #     def_fld('features..........', 

        #     self.features = {}
        #         if isinstance(v, list):
        #             self.features[k] = [ MiniLatex( x ) for x in v ]
        #         else:
        #             self.features[k] = MiniLatex( v )

        #     self.realizations = [
        #         MiniLatex( x ) for x in kw.pop('realizations', None)
        #     ]
            
        #     self.notes = [
        #         Minilatex(x) for x in kw.pop('notes', None)
        #     ]

        #     rel_info = dict( kw.pop('relations', {}) )
        #     self.relations_info = {}
        #     for rel_type in ('parents', 'cousins'):
        #         self.relations_info[rel_type] = []
        #         for rel in rel_info.pop(rel_type, {}):
        #             self.relations_info[rel_type].append(
        #                 { 'code_id': rel['code_id'],
        #                   'detail': MiniLatex( rel['detail'] ) }
        #             )

        #     if rel_info:
        #         raise ValueError(f"Additional unexpected keys "
        #                          f"{list(rel_info.keys())} in YML under ‘relations:’ for "
        #                          f"code ‘{self.code_id}’")

        #     if kw:
        #         raise ValueError(f"Additional unexpected keys "
        #                          f"{list(kw.keys())} in YML for code ‘{self.code_id}’")

        # except KeyError as e:
        #     logger.error(f"Missing key for code {self.code_id}: {e}")
        #     raise
        # except Exception as e:
        #     logger.error(f"Error parsing data structure for code {self.code_id}: {e}")
        #     raise

        
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

    # def fields_as_text_for_indexing(self, _minilatextotext):
    #     def _value_to_text(val, *, where):
    #         if not val:
    #             return ''
    #         if isinstance(val, str):
    #             return _minilatextotext(val, where=where)
    #         if isinstance(val, list):
    #             return '\n\n'.join(_value_to_text(x, where=f'{where}[{j}]')
    #                                for j, x in enumerate(val))
    #         # if isinstance(val, dict):
    #         #     return '\n\n'.join( (_minilatextotext(k)+': '+_value_to_text(v))
    #         #                          for k,v in val.items() )
    #         raise ValueError(f"Not sure how to handle value ‘{val!r}’ for indexing!")
    #     d = {
    #         k: _value_to_text( getattr(self, k, None), 
    #                            where=f'{self!r}.{k}')
    #         for k in (
    #                 'name', 'description', 'protection',
    #                 'realizations', 'notes'
    #         )
    #     }
    #     d.update({
    #         f'feature_{featurename}': _value_to_text(
    #             featuredata,
    #             where=f'{self!r}.features[{featurename!r}]'
    #         )
    #         for featurename, featuredata in self.features.items()
    #     })
    #     d.update({
    #         f'{reltype}_detail': '\n\n'.join([
    #             _minilatextotext(relobj.detail, where=f'{self!r}.relations.{reltype}s[{j}]')
    #             for j, relobj in enumerate(
    #                     getattr(self.relations, reltype+'s') # "self.relations.parents"
    #             )
    #         ])
    #         for reltype in ('parent', 'cousin')
    #     })
    #     return d

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



