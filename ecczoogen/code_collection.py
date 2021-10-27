import logging
logger = logging.getLogger(__name__)

from . import code

class InvalidCodeReference(Exception):
    def __init__(self, msg):
        super().__init__(msg)


class CodeCollection:
    def __init__(self):
        super().__init__()
        self.code_collection = {}

    def add_code(self, code):
        if code.code_id in self.code_collection:
            raise ValueError("A code with ID {} already exists in collection"
                             .format(code.code_id))
        if code.collection is not None:
            raise ValueError("The code {} already belongs to a collection"
                             .format(code.code_id))
        self.code_collection[code.code_id] = code
        # register the collection on the Code object
        code.collection = self

    def get_code(self, code_id):
        try:
            return self.code_collection[code_id]
        except:
            raise InvalidCodeReference("Unknown code ID: ‘{}’".format(code_id))

    def finish(self):
        r"""
        Call this method when you finished constructing the code collection and you
        want to establish all relations.
        """

        #
        # Iterate over each code and inspect its relations to other codes.
        #
        for code_id, codeobj in self.code_collection.items():

            codeobj.relations.parents = []
            codeobj.relations.cousins = []

            code_data_relations = codeobj._info.get('relations', {})
            if not code_data_relations:
                continue

            # do the same thing for each relation type (parent, cousin):
            for rel_type in ('parent', 'cousin'):

                rels_fld = getattr(codeobj.relations, rel_type+'s')

                # iterate over e.g. codeobj._info.relations.parents

                code_data_relations_reltypelist = code_data_relations.get(rel_type+'s', [])
                if not code_data_relations_reltypelist:
                    continue

                for relinfo in code_data_relations_reltypelist:
                    logger.debug(
                        f"Processing {rel_type} relation of {code_id} to {relinfo['code_id']}"
                    )

                    related_code = self.get_code(relinfo['code_id'])

                    rel_data = code.Relation(code=related_code,
                                             detail=relinfo.get('detail', None))
                    rels_fld.append(rel_data)

                    # add to the other code's OTHER.relations.parent_of to include this code

                    rel_data_other = code.Relation(code=codeobj,
                                                   detail=relinfo.get('detail', None))
                    getattr(related_code.relations, rel_type+'_of') .append( rel_data_other )
            
