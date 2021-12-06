import React from 'react';

import YAML from 'yaml';


import "./EczToolDecodeSubmittedJsonCode_style.scss";


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
        console.log("Got JSON = ", {data: json});

        const d = JSON.parse( json );

        const yamldoc = new YAML.Document( d );

        yamldoc.commentBefore =
             '######################################################\n'
            +'# This is a code entry in the error correction zoo. ##\n'
            +'#       https://github.com/errorcorrectionzoo       ##\n'
            +'######################################################\n';

        YAML.visit(
            yamldoc,
            {
                Pair(_, pair, path) {
                    console.log('pair =', pair, '; path =', path);
                    if (path.length <= 6) { // [document, map object] for root map
                        pair.key.spaceBefore = true;
                    } else {
                        pair.key.spaceBefore = false;
                    }
                },
                Seq(key, node, path) {
                    console.log('seq; node =', node, '; path =', path);
                    node.items.forEach( (child, index) => {
                        if (index > 0) {
                            child.spaceBefore = true;
                        }
                    } );
                },
                Map(key, node, path) {
                    console.log('map; node =', node, '; path =', path);
                    node.items.forEach( (child, index) => {
                        if (index > 0) {
                            child.spaceBefore = true;
                        }
                    } );
                },
                Scalar(key, node) {
                    console.log('string; key =', key, ' node =', node);
                    if (key == 'key') {
                        node.type = 'PLAIN';
                    } else if (typeof node.value === 'string') {
                        let value = node.value;
                        if (value.indexOf('\n') == -1) {
                            node.type = 'QUOTE_SINGLE';
                        } else {
                            node.type = 'BLOCK_LITERAL';
                        }
                    }
                },
            }
        );

        const yamlcode = yamldoc.toString({
            lineWidth: 0, // inhibit folding of single-quoted strings for Victor
        });

        console.log("Got YaML = ", {data: yamlcode});

        this.setState({ output_yaml_code: yamlcode });
    }
};
