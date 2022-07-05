
import logging
logger = logging.getLogger(__name__)




import jsonschema





class SchemaData:

    def __init__(
            self,
            source_data,
            full_schema,
            *,
            what='<?>',
            llm_environment,
            llm_resource_info=None, # e.g., to look up figures etc.
            _validate=True
    ):
        self.source_data = source_data
        self.full_schema = full_schema

        # first of all, validate the given data:
        if _validate:
            try:
                jsonschema.validate(source_data, full_schema)
            except Exception as e:
                logger.error(
                    f"Data validation failed in ‘{what}’:\n{e}\n\n"
                )
                raise

        if self.full_schema is None:
            self.full_schema = {}

        self.data_type = self.full_schema.get('type', None)
        self.fields_info = []
        
        self.what = what
        self.llm_environment = llm_environment
        self.llm_resource_info = llm_resource_info

        if self.data_type == 'object':
            self.data = {}
            self._data_sd = {} # SchemaData objects, when appropriate
            all_keys = set( self.full_schema.get('properties', {}).keys() )
            if self.source_data is not None:
                all_keys |= set( self.source_data.keys() )
            for k in all_keys:
                if self.source_data is not None:
                    v = self.source_data.get(k, None)
                else:
                    v = None
                value_schema = self.full_schema.get('properties', {}).get(k, None)
                if value_schema is None:
                    self.full_schema.get('additionalProperties', {}).get(k, None)

                if value_schema is not None and not value_schema.get('_use_schemadata', True):
                    # explicit request not to store in the SchemaData structure
                    # (e.g. for code relations)
                    continue

                sdobj = SchemaData(v, value_schema, what=f"{what}.{k}",
                                   llm_environment=self.llm_environment,
                                   llm_resource_info=self.llm_resource_info,
                                   _validate=False,)
                self._data_sd[k] = sdobj
                if self.source_data is not None and k in self.source_data:
                    self.data[k] = sdobj.data
                self.fields_info.append({
                    'fieldname': k,
                    'schema': value_schema,
                })

        elif self.data_type == 'array':
            self.data = []
            self._data_sd = []
            value_schema = self.full_schema.get('items', {})
            self.fields_info = [{
                'schema': value_schema,
            }]
            if self.source_data is not None:
                for j, v in enumerate(self.source_data):
                    sdobj = SchemaData(
                        v, value_schema, what=f"{what}[{j}]",
                        llm_environment=self.llm_environment,
                        llm_resource_info=self.llm_resource_info,
                        _validate=False,
                    )
                    self._data_sd.append(sdobj)
                    self.data.append(sdobj.data)

        else:
            
            self.data = self._set_up_scalar_value()
            self._data_sd = None


    def _set_up_scalar_value(self):

        source_value = self.source_data
        value_schema = self.full_schema
        what = self.what

        if value_schema is not None and value_schema.get('_llm', None):
            if source_value is None:
                source_value = ''

            standalone_mode = False
            if value_schema['_llm'] == 'standalone':
                standalone_mode = True
            
            return self.llm_environment.make_fragment(
                source_value,
                what=what,
                standalone_mode=standalone_mode,
                resource_info=self.llm_resource_info,
            )

        return source_value


    def add_extra_field(self, key, value, valueschema):
        if self.data_type != 'object':
            raise ValueError("Can only call add_extra_field() on object data types")

        sdobj = SchemaData(v, value_schema, what=f"{self.what}.{key}",
                           llm_environment=self.llm_environment,
                           llm_resource_info=self.llm_resource_info,
                           _validate=False)
        self._data_sd[key] = sdobj
        self.data[key] = sdobj.data
        self.fields_info.append({
            'fieldname': k,
            'schema': value_schema,
        })

    def value(self):
        return self.data

    def __contains__(self, key):
        return key in self.data

    def __getitem__(self, key):
        # do as if we had populated "None" in missing fields.
        return self.getfield(key, default=None, raise_keyerror=False)
    
    def getfield(self, key, default=None, raise_keyerror=False):
        if isinstance(key, str) and '.' in key:
            # descend recursively into sub-tree
            key1, rest = key.split('.', maxsplit=1)
            return self._data_sd[key1].getfield(
                rest, default=default, raise_keyerror=raise_keyerror
            )
        if raise_keyerror:
            return self.data[key]
        return self.data.get(key, default)

    def subobject(self, key):
        if '.' in key:
            # descend recursively into sub-tree
            key1, rest = key.split('.', maxsplit=1)
            return self._data_sd[key1].subobject(rest)
        return self._data_sd.get(key, {})

    def __iter__(self):
        return iter(self.data)

    def items(self):
        return self.data.items()

    def iter_with_field_info(self):
        if self.data_type == 'object':
            for fldinfo in self.fields_info:
                yield (fldinfo, self.data[fldinfo['fieldname']])
        elif self.data_type == 'array':
            fldinfo = self.fields_info[0]
            for v in self.data:
                yield (fldinfo, v)

        raise ValueError("data not iterable")

    def iter_fields_recursive(self, *, arrays_at_once=True):
        def _descend_into_value(fieldname, valuesd):
            for (fldinfo2, value2) in valuesd.iter_fields_recursive(
                    arrays_at_once=arrays_at_once
            ):
                fldinfo2 = dict(fldinfo2)
                if fldinfo2.get('fieldname', None):
                    fldinfo2['fieldname'] = \
                        fieldname + "." + fldinfo2['fieldname']
                else:
                    fldinfo2['fieldname'] = fieldname
                yield (fldinfo2, value2)


        if self.data_type == 'object':
            for fldinfo in self.fields_info:
                valuesd = self._data_sd[fldinfo['fieldname']]
                if fldinfo is not None and fldinfo['schema'] is not None \
                   and fldinfo['schema']['type'] in ('object', 'array'):
                    yield from _descend_into_value(fldinfo['fieldname'], valuesd)
                else:
                    yield (fldinfo, valuesd.data)

        elif self.data_type == 'array':
            #logger.debug(f"Iterating; array ... {arrays_at_once=}, {self.data=}")
            fldinfo = self.fields_info[0]
            if fldinfo is not None and fldinfo['schema'] is not None \
               and fldinfo['schema']['type'] in ('object', 'array'):
                for j, valuesd in enumerate(self._data_sd):
                    yield from _descend_into_value(str(j), valuesd)

            if arrays_at_once:
                yield (fldinfo, self.data)
            else:
                #logger.debug(f"Iterating over array fields ... {self.data=}")
                for j, v in enumerate(self._data_sd):
                    fldinfo = dict(fldinfo,
                                   fieldname=str(j))
                    yield (fldinfo, v.data)

        else:
            raise ValueError("data not iterable")

