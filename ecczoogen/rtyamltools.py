import ruamel.yaml


class EczYAML(ruamel.yaml.YAML):
    def __init__(self, **kwargs):
        super().__init__(typ='rt', pure=True, **kwargs)
        self.preserve_quotes = True
        self.width = 32767
        self.indent(mapping=2,sequence=4,offset=2)

    SqStr = ruamel.yaml.scalarstring.SingleQuotedScalarString
    LStr = ruamel.yaml.scalarstring.LiteralScalarString

    
