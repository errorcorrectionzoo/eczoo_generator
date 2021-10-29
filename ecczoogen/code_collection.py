import logging
logger = logging.getLogger(__name__)

from . import code

class InvalidCodeReference(Exception):
    def __init__(self, msg):
        super().__init__(msg)


class CodeCollection:
    def __init__(self):
        super().__init__()
        self._codes = {}
        self._root_codes = None

    def add_code(self, code):
        if code.code_id in self._codes:
            raise ValueError("A code with ID {} already exists in collection"
                             .format(code.code_id))
        if code.collection is not None:
            raise ValueError("The code {} already belongs to a collection"
                             .format(code.code_id))
        self._codes[code.code_id] = code
        # register the collection on the Code object
        code.collection = self

    def finish(self):
        r"""
        Call this method when you finished constructing the code collection and you
        want to establish all relations.  This will also compute additional
        properties on codes, such as their generation.
        """

        #
        # Iterate over each code and inspect its relations to other codes.
        #
        for code_id, codeobj in self._codes.items():

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
            

        #
        # Compute the generation of codes.
        #
        self._root_codes = dict(
            [ (code_id, codeobj)
              for (code_id, codeobj) in self._codes.items()
              if not codeobj.relations.parents ]
        )
        # start with the top-level code objects
        for code_id, codeobj in self._root_codes.items():
            codeobj.generation_level = 0
            self._visit_code_computing_generation(codeobj, 0)

        #
        # finish() done.
        #
        

    def _visit_code_computing_generation(self, cur_code, cur_generation_level):
        for child_rel in cur_code.relations.parent_of:
            child_code = child_rel.code
            if (child_code.generation_level is not None
                and child_code.generation_level > cur_generation_level + 1):
                # code is actually of a higher generation via some other parent
                child_code.generation_level = cur_generation_level + 1
            else:
                child_code.generation_level = cur_generation_level + 1


    # methods for accessing codes:

    def all_codes(self):
        return self._codes

    def root_codes(self):
        return self._root_codes

    def get_code(self, code_id):
        try:
            return self._codes[code_id]
        except:
            raise InvalidCodeReference("Unknown code ID: ‘{}’".format(code_id))

    def get_code_ids_by_physical_logial(self, physical, logical):
        return [
            code_id
            for code_id, code in self._codes.items()
            if code.fields.get('physical') == physical and code.fields.get('logical') == logical
        ]

    def get_code_family_tree(self, parent_code_id):

        logger.debug(f"getting code family tree for ‘{parent_code_id}’ ...")

        parent_code = self.get_code(parent_code_id)
        
        all_child_ids = [ parent_code_id ]

        def _visit_code(c):
            children = c.relations.parent_of
            for child_rel in children:
                child = child_rel.code
                if child.code_id not in all_child_ids:
                    all_child_ids.append(child.code_id)
            for child_rel in children:
                _visit_code(child_rel.code)

        _visit_code(parent_code)

        logger.debug(f"code family tree for ‘{parent_code_id}’ -> ‘{all_child_ids}’")

        return all_child_ids
