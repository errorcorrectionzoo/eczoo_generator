import os
import os.path

import yaml

import logging
logger = logging.getLogger(__name__)


from . import code, code_collection


class Zoo:
    def __init__(self, *, codes_dir):
        super().__init__()

        self.collection = code_collection.CodeCollection()

        for codeymlfname in os.listdir(codes_dir):
            if not codeymlfname.endswith('.yml'):
                continue
            with open(os.path.join(codes_dir, codeymlfname), 'r') as f:
                logger.info(f"Adding code from YAML file ‘{codeymlfname}’ ...")
                self.collection.add_code( code.Code( yaml.safe_load(f) ) )

        self.collection.finish()
