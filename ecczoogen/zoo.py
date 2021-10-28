import os
import os.path

import yaml

import logging
logger = logging.getLogger(__name__)


from . import code, code_collection


class Zoo:
    def __init__(self, *, codes_dir):
        super().__init__()

        self._collection = code_collection.CodeCollection()

        for codeymlfname in os.listdir(codes_dir):
            if not codeymlfname.endswith('.yml'):
                continue
            with open(os.path.join(codes_dir, codeymlfname), 'r') as f:
                logger.info(f"Adding code from YAML file ‘{codeymlfname}’ ...")
                self._collection.add_code( code.Code( yaml.safe_load(f) ) )

        self._collection.finish()

    #
    # Only expose a subset of the CodeCollection's API.  E.g., prevent the user
    # from adding more codes, etc.
    #
    # For this reason, I don't think the Zoo object should inherit from
    # CodeCollection.
    #

    def all_codes(self, *args, **kwargs):
        return self._collection.all_codes(*args, **kwargs)

    def get_code(self, *args, **kwargs):
        return self._collection.get_code(*args, **kwargs)

    def get_code_ids_by_physical_logial(self, *args, **kwargs):
        return self._collection.get_code_ids_by_physical_logial(*args, **kwargs)
