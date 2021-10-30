import os
import os.path

import yaml

import logging
logger = logging.getLogger(__name__)


from . import code, code_collection, schema_validator


class Zoo:
    def __init__(self, *, dirs):
        super().__init__()

        codes_dir = dirs.codes_dir
        schemas_dir = dirs.schemas_dir

        self._collection = code_collection.CodeCollection()

        validator = schema_validator.SchemaValidator(schemas_dir=schemas_dir)

        logger.info("Building the zoo ...")

        if not os.path.exists(codes_dir):
            raise RuntimeError(f"Folder ‘{codes_dir}’ doesn't exist!")

        for (dirpath, dirnames, filenames) in os.walk(codes_dir, followlinks=True):
            show_dirpath = os.path.relpath(dirpath)

            logger.info(f"Scanning for code YAML files (.yml) in ‘{show_dirpath}’ ...")

            for filename in filenames:
                fullfname = os.path.join(dirpath, filename)
                if not fullfname.endswith('.yml'):
                    continue

                logger.debug(f"Loading code file ‘{filename}’ ...")
                with open(os.path.join(codes_dir, fullfname), 'r') as f:
                    try:
                        code_info = yaml.safe_load(f)
                    except Exception as e:
                        logger.error(f"Failed to parse YAML file ‘{filename}’:\n{e}\n\n")
                        raise

                # validate the code data structure, to be sure
                try:
                    validator.validate(code_info, 'ecc')
                except Exception as e:
                    logger.error(f"Code data validation failed in YAML file ‘{filename}’:\n{e}\n\n")
                    raise

                codeobj = code.Code( code_info )

                codeobj.code_src_filename = os.path.relpath(fullfname, start=codes_dir)

                self._collection.add_code( codeobj )

        logger.info(f"Finalizing code collection ...")

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

    def root_codes(self, *args, **kwargs):
        return self._collection.root_codes(*args, **kwargs)

    def get_code(self, *args, **kwargs):
        return self._collection.get_code(*args, **kwargs)

    # def get_code_ids_by_physical_logial(self, *args, **kwargs):
    #     return self._collection.get_code_ids_by_physical_logial(*args, **kwargs)

    def get_code_family_tree(self, *args, **kwargs):
        return self._collection.get_code_family_tree(*args, **kwargs)
