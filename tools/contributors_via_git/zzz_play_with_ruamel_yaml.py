import os.path
import ruamel.yaml


SQstr = ruamel.yaml.scalarstring.SingleQuotedScalarString
Lstr = ruamel.yaml.scalarstring.LiteralScalarString


yaml = ruamel.yaml.YAML(typ='rt', pure=True) # round-trip
yaml.preserve_quotes = True
yaml.width = 32767
yaml.indent(mapping=2,sequence=4,offset=2)

with open( os.path.join(os.path.dirname(__file__), '../../../eczoo_data/codes/quantum/qubits/topological/surface/surface/surface.yml' ) ) as f:
    data = yaml.load(f)

#print(repr(data))


# short_string_len = 60

# def data_fix_strings(d):

#     def fix_item(k):
#         v = d[k]
#         if isinstance(v, str):
#             if len(v) < short_string_len:
#                 d[k] = SQstr(v)
#             else:
#                 d[k] = Lstr(v)
#         else:
#             data_fix_strings(v)

#     if isinstance(d, dict):
#         for k in d:
#             fix_item(k)
#     elif isinstance(d, list):
#         for k in range(len(d)):
#             fix_item(k)

#data_fix_strings(data)


data['_meta'] = { 'contributors': [ { 'name': SQstr('Jane Smith') }, { 'name': SQstr('Jack Smith') } ] }

with open( 'output_tmp.yml', 'w' ) as fw:
    yaml.dump(data, fw)
