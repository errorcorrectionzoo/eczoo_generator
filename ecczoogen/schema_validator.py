import re
import os
import os.path
import logging
logger = logging.getLogger(__name__)

import yaml

import jsonschema
import jsonref


class SchemaValidator:
    def __init__(self, schemas_dir):
        # load code schemas

        logger.debug(f"Loading schemas from ‘{os.path.relpath(schemas_dir)}’ ...")

        schema_uri_data = {}

        for (dirpath, dirnames, filenames) in os.walk(schemas_dir, followlinks=True):
            for filename in filenames:
                if filename.endswith('.yml'):
                    # load as a schema
                    schema_fs_path = os.path.join(dirpath, filename)
                    schema_rel_path = os.path.relpath(schema_fs_path, start=schemas_dir)
                    schema_rel_path = re.sub('\.yml$', '', schema_rel_path)
                    schema_uri = f'https://errorcorrectionzoo.org/schemas/{schema_rel_path}'
                    
                    logger.debug(f"Loading schema data ‘/schemas/{schema_rel_path}’ ...")

                    with open(schema_fs_path, encoding='utf-8') as f:
                        d = yaml.safe_load(f)
        
                    schema_uri_data[schema_uri] = d
            
        self.schema_uri_data = schema_uri_data

        self.json_ref_loader = jsonref.JsonLoader(store=self.schema_uri_data)

    def get_full_schema(self, schema_rel_name):
        schema_uri = f'https://errorcorrectionzoo.org/schemas/{schema_rel_name}'

        #logger.debug("Trying to load schema ‘{schema_uri}’ ...")
        return jsonref.load_uri(schema_uri, loader=self.json_ref_loader)

    def validate(self, code_info, schema_rel_name):

        schema_full_data = self.get_full_schema(schema_rel_name)

        #logger.debug(f"Loaded schema for {schema_rel_name=}: {schema_full_data=}")
    
        jsonschema.validate(code_info, schema_full_data)

        return schema_full_data
