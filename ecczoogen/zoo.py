import os
import os.path

import yaml

import logging
logger = logging.getLogger(__name__)


from . import code, code_collection, schemaloader

import jsonschema


_junk_files = (
    '.DS_Store',
    '.gitignore',
)

_accessory_ignore_exts = (
    '.tex',
    '.pdf',
    '.aux',
    '.log',
    '.dvi',
    '.xcf',
    '.ai',
    '.indd',
    '.afdesign',
    '.afpub',
)


class Zoo:
    def __init__(self, *, dirs, fig_exts):
        super().__init__()

        codes_dir = dirs.codes_dir
        schemas_dir = dirs.schemas_dir

        # make into a tuple; remove empty suffix if present
        fig_exts = tuple([e for e in fig_exts if e])

        self._collection = code_collection.CodeCollection()

        schema_loader = schemaloader.SchemaLoader(schemas_dir=schemas_dir)
        code_full_schema = schema_loader.get_full_schema('ecc')

        logger.info("Building the zoo ...")

        if not os.path.exists(codes_dir):
            raise RuntimeError(f"Folder ‘{codes_dir}’ doesn't exist!")

        for (dirpath, dirnames, filenames) in os.walk(codes_dir, followlinks=True):
            show_dirpath = os.path.relpath(dirpath)

            logger.info(f"Scanning for code YAML files (.yml) in ‘{show_dirpath}’ ...")

            for filename in filenames:
                fullfname = os.path.join(dirpath, filename)

                if os.path.basename(fullfname) in _junk_files \
                   or fullfname.endswith('~') or fullfname.endswith('.bak'):
                    # okay, backup file, we can skip
                    logger.debug(f"Skipping junk file {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith( _accessory_ignore_exts ):
                    logger.debug(f"Skipping accessory file {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith( fig_exts ):
                    logger.debug(f"Skipping figure {show_dirpath}/{filename}")
                    continue

                if fullfname.endswith('.yml'):

                    logger.debug(f"Loading code file ‘{filename}’ ...")
                    with open(os.path.join(codes_dir, fullfname), 'r', encoding='utf-8') as f:
                        try:
                            code_info = yaml.safe_load(f)
                        except Exception as e:
                            logger.error(f"Failed to parse YAML file ‘{filename}’:\n{e}\n\n")
                            raise

                    # validate the code data structure, to be sure
                    try:
                        jsonschema.validate(code_info, code_full_schema)
                    except Exception as e:
                        logger.error(
                            f"Code data validation failed in YAML file ‘{filename}’:\n{e}\n\n"
                        )
                        raise

                    codeobj = code.Code( code_info , full_schema=code_full_schema )

                    codeobj.source_info_filename = os.path.relpath(fullfname, start=codes_dir)

                    self._collection.add_code( codeobj )
                    
                    continue


                msg = (
                    f"All files in the code data tree must have the suffix '.yml' to "
                    f"indicate that they are YaML files. "
                    f"Offending file: ‘{show_dirpath}/{filename}’."
                )
                logger.error(msg)
                raise ValueError(msg)

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

    def get_code_or_None(self, *args, **kwargs):
        try:
            return self.get_code(*args, **kwargs)
        except code_collection.InvalidCodeReference:
            return None


    # def get_code_ids_by_physical_logial(self, *args, **kwargs):
    #     return self._collection.get_code_ids_by_physical_logial(*args, **kwargs)

    def get_code_family_tree(self, *args, **kwargs):
        return self._collection.get_code_family_tree(*args, **kwargs)
