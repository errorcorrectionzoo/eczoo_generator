import logging
logger = logging.getLogger(__name__)


class Code:
    def __init__(self, data):
        super().__init__()
        # todo: validate data
        self.code_id = data['code_id']
        self.data = data

        self.name = self.data['name']
        
        # these fields only get set once we are assigned to a CodeCollection
        self.collection = None
        self.relations = CodeRelations()

    def __str__(self):
        return self.name

    def __repr__(self):
        return "Code(code_id={!r})".format(self.code_id)



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
