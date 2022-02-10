
import logging
logger = logging.getLogger(__name__)


from minilatextohtml import MiniLatex



class SchemaData:

    def __init__(self, source_data, full_schema, *, what='<?>'):
        self.source_data = source_data
        self.full_schema = full_schema

        self.data_type = self.full_schema.get('type', None)
        self.fields_info = []
        
        self.what = what

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

                if not value_schema.get('_use_schemadata', True):
                    # explicit request not to store in the SchemaData structure
                    # (e.g. for code relations)
                    continue

                sdobj = SchemaData(v, value_schema, what=f"{what}.{k}")
                self._data_sd[k] = sdobj
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
                    sdobj = SchemaData(v, value_schema, what=f"{what}[{j}]")
                    self._data_sd.append(sdobj)
                    self.data.append(sdobj.data)

        else:
            
            self.data = self._set_up_scalar_value()
            self._data_sd = None


    def _set_up_scalar_value(self):

        source_value = self.source_data
        value_schema = self.full_schema
        what = self.what

        if value_schema.get('_minilatex', None):
            if source_value is None:
                source_value = ''
            return MiniLatex( source_value, what=what )

        return source_value


    def value(self):
        return self.data

    def __getitem__(self, key):
        return self.data[key]
    
    def getfield(self, key, default=None):
        return self.data.get(key, default)

    def __iter__(self):
        return iter(self.data)

    def iter_with_field_info(self):
        if self.data_type == 'object':
            for fldinfo in self.fields_info:
                yield (fldinfo, self.data[fldinfo['fieldname']])
        elif self.data_type == 'array':
            fldinfo = self.fields_info[0]
            for v in self.data:
                yield (fldinfo, v)

        raise ValueError("data not iterable")

    def iter_values_with_field_info_recursive(self, *, arrays_at_once=True):
        if self.data_type == 'object':
            for fldinfo in self.fields_info:
                valuesd = self._data_sd[fldinfo['fieldname']]
                if fldinfo['schema']['type'] in ('object', 'array'):
                    for (fldinfo2, value2) in valuesd.iter_values_with_field_info_recursive(
                            arrays_at_once=arrays_at_once
                    ):
                        #print(f"*** {fldinfo2} -> {value2}")
                        fldinfo2 = dict(fldinfo2)
                        if fldinfo2.get('fieldname', None):
                            fldinfo2['fieldname'] = \
                                fldinfo['fieldname'] + "." + fldinfo2['fieldname']
                        else:
                            fldinfo2['fieldname'] = fldinfo['fieldname']
                        yield (fldinfo2, value2)
                else:
                    yield (fldinfo, valuesd.data)

        elif self.data_type == 'array':
            #logger.debug(f"Iterating; array ... {arrays_at_once=}, {self.data=}")
            fldinfo = self.fields_info[0]
            if fldinfo['schema']['type'] in ('object', 'array'):
                # can't descend into sub-structures for now
                raise ValueError("Not yet supported. (what's the combined field name?)")
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


    # def _get_value_schemadata_object(self, value, valueschema):

    #     typ = valueschema['type']

    #     if typ == 'string':
    #         if valueschema.get('_minilatex', None):
    #             if value is None:
    #                 value = ''
    #             return MiniLatex( value )
    #         return value

    #     if typ in ('object', 'array'):
    #         return SchemaData(value, valueschema)

    #     raise RuntimeError(f'Unknown jsonschema type {typ}')
