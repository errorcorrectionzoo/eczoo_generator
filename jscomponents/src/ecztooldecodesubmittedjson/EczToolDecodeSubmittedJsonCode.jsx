import React from 'react';

import YAML from 'yaml';


export default class EczToolDecodeSubmittedJsonCode extends React.Component
{
    render()
    {
        var output_yaml_code = '';
        if (this.state) {
            output_yaml_code = this.state.output_yaml_code;
        }
        return (
            <div className="EczToolDecodeSubmittedJsonCode">
                <input type="file" onChange={ (event) => this.set_file_input(event) } />
                <textarea
                    className="output-yaml-code"
                    defaultValue={output_yaml_code}
                />
            </div>
        );
    }

    set_file_input(event)
    {
        const elem = event.target;
        const file = elem.files[0];
        if (!file) {
            this.setState({ output_yaml_code: '' });
            return
        }

        file.text().then( (text_content) => this.set_json_content(text_content) );
    }
    set_json_content(json)
    {
        console.log("Got JSON = ", json);

        const d = JSON.parse( json );

        const yamldoc = new YAML.Document(d);

        YAML.visit(
            yamldoc,
            {
                Scalar(key, node) {
                    console.log('string; key =', key, ' node =', node);
                    if (key == 'key') {
                        node.type = 'PLAIN';
                    } else if (typeof node.value === 'string') {
                        if (node.value.indexOf('\n') == -1) {
                            node.type = 'QUOTE_SINGLE';
                        } else {
                            node.type = 'BLOCK_LITERAL';
                        }
                    }
                }
            }
        );

        const yamlcode = yamldoc.toString();

        console.log("Got YaML = ", yamlcode);

        this.setState({ output_yaml_code: yamlcode });
    }
};
