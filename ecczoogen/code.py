import logging
logger = logging.getLogger(__name__)


class Code:
    def __init__(self, info):
        super().__init__()
        # todo: validate data
        self.code_id = info['code_id']
        self._info = info

        # parse data structure into fields
        self.name = self._info['name']
        self.fields = {k: self._info[k]
                       for k in self._info.keys()
                       if k not in ('name', 'relations', 'features')}
        if not self._info.get('features'):
            self.features = {}
        else:
            self.features = {k: self._info['features'][k]
                             for k in self._info.get('features').keys()}
        
        # these fields only get set once we are assigned to a CodeCollection
        self.collection = None

        # these fields only get set after we are assigned to a CodeCollection
        # and after the code collection is finalized.
        self.relations = CodeRelations()
        self.generation_level = None


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
