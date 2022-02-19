import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/stream-parser';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { EditorView } from '@codemirror/view';

//import "./EczEditSchemaField_style.scss";



class EczEditSchemaFieldObjectType extends React.PureComponent
{
    render()
    {
        const schema = this.props.schema;
        const value = this.props.value;
        if (schema.additionalProperties !== false) {
            throw Exception("additionalProperties not supported!");
        }
        let props_components_list = [];
        Object.keys(schema.properties).forEach( (prop_key) => {
            const prop_schema = schema.properties[prop_key];
            const prop_value = value[prop_key];
            props_components_list.push(
                <EczEditSchemaField
                    key={prop_key}
                    fieldname={prop_key} 
                    schema={prop_schema}
                    value={prop_value} />
            );
        });
        return props_components_list;
    }
};


class EczEditSchemaFieldArrayType extends React.PureComponent
{
    render()
    {
        const schema = this.props.schema;
        const value = this.props.value;

        let schema_items = schema.items;

        let props_components_list = [];
        if (value) {
            value.forEach( (item_value, index) => {
                props_components_list.push(
                    <EczEditSchemaField
                        key={index}
                        fieldname={'Item ' + (1+index)} 
                        schema={schema_items}
                        value={item_value} />
                );
            });
        }
        /// !!! need UI to add/remove items !!!
        return props_components_list;
    }
};



class EczEditSchemaFieldScalarType extends React.PureComponent
{
    render()
    {
        const schema = this.props.schema;
        const value = this.props.value;

        if (schema['enum']) {
            const enums = schema['enum'];
            let options_components = [];
            enums.forEach( (s) => {
                options_components.push(<option key={s} value={s}>{s}</option>);
            });
            return <select value={value}>{options_components}</select>;
        }

        if ( ! schema._minilatex ) {
            if (schema._single_line_string) {
                return (
                    <input type="string"
                           value={value}
                    />
                );
            } else {
                return (
                    <textarea>{value}</textarea>
                );
            }
        }

        // minilatex features enabled -> use CodeMirror editor

        const height = (schema._single_line_string ? '2em': '18em');

        return (
            <CodeMirror
                placeholder="<<< Type text here. >>>"
                value={value}
                min-height={height}
                extensions={[StreamLanguage.define(stex), EditorView.lineWrapping]}
                onChange={(value, viewUpdate) => {
                    console.log('value:', value);
                }}
            />
        );
    }
}



export default class EczEditSchemaField extends React.PureComponent
{
    render()
    {
        const fieldname = this.props.fieldname;
        const schema = this.props.schema;
        const value = this.props.value;

        let edit_component = null;

        if (schema.type == 'object') {
            edit_component =
                ( <EczEditSchemaFieldObjectType schema={schema} value={value} /> );
        } else if (schema.type == 'array') {
            edit_component =
                ( <EczEditSchemaFieldArrayType schema={schema} value={value} /> );
        } else {
            edit_component =
                ( <EczEditSchemaFieldScalarType schema={schema} value={value} /> );
        }

        let expected_items = [];
        if (schema._single_line_string) {
            expected_items.push('single line text')
        }
        if (schema._minilatex) {
            if (schema._minilatex == 'full') {
                expected_items.push(
                    'you can use LaTeX-like commands, including citations and references'
                );
            } else if (schema._minilatex == 'simple') {
                expected_items.push(
                    'you can use LaTeX-like commands, except for citations and references'
                );
            }
        }

        let expected = expected_items.join('; ');
        if (expected) {
            expected = '[' + expected + '.]';
        }
            

        return (
            <div className="EczEditSchemaField">
                <div className="EczEditSchemaField_field_name">{fieldname}</div>
                <div className="EczEditSchemaField_field_description">{schema._description}</div>
                <div className="EczEditSchemaField_field_expected">{expected}</div>
                {edit_component}
            </div>
        )
    }
};

