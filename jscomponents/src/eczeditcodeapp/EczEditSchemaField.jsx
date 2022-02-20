import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/stream-parser';
import { stex } from '@codemirror/legacy-modes/mode/stex';
import { EditorView } from '@codemirror/view';

//import "./EczEditSchemaField_style.scss";



class EczEditSchemaFieldObjectType extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return ! Object.is(this.props.value, newProps.value);
    }

    render()
    {
        const schema = this.props.schema;
        const value = this.props.value || {};
        if (schema.additionalProperties !== false) {
            throw Exception("additionalProperties not supported!");
        }
        let props_components_list = 
            Object.keys(schema.properties).map( (prop_key) => {
                let prop_schema = schema.properties[prop_key];
                const prop_value = value[prop_key];
                if ( ! (schema.required || []).includes(prop_key) ) {
                    prop_schema = { _optional: true, ...prop_schema };
                }
                return (
                    <EczEditSchemaField
                        key={prop_key}
                        fieldname={prop_key} 
                        schema={prop_schema}
                        value={prop_value}
                        onChange={ (val) => this.field_changed(prop_key, val) }  />
                );
            });
        return props_components_list;
    }

    field_changed(prop_key, val) {

        let new_value = { ...(this.props.value || {})};

        if ( (typeof val == 'undefined' || val === null
              || (Array.isArray(val) && val.length == 0) || val === '')
             && !(this.props.schema.required || []).includes(prop_key) ) {
            // empty value on non-required field -> remove from dictionary
            delete new_value[prop_key];
        } else {
            new_value[prop_key] = val;
        }

        console.log("Property changed, new value is ", val, " --> ", new_value);

        this.props.onChange( new_value );
    }
};





class EczEditSchemaFieldArrayType extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return ! Object.is(this.props.value, newProps.value);
    }

    render()
    {
        const schema = this.props.schema;
        const value = this.props.value || [];

        let schema_items = schema.items;

        let props_components_list = (value || []).map(
            (item_value, index) => {
                return (
                    <div key={index}
                         className="array_item">
                        <button key={'-'} onClick={ ()=>this.itemRemove(index) }>-</button>
                        <button key={'^'} onClick={ ()=>this.itemMoveUp(index) }>↑</button>
                        <button key={'v'} onClick={ ()=>this.itemMoveDown(index) }>↓</button>
                        <EczEditSchemaField
                            key={'fld'}
                            skip_description={true}
                            fieldname={'Item ' + (1+index)} 
                            schema={schema_items}
                            value={item_value}
                            onChange={(val) => this.item_changed(index, val) } />
                    </div>);
            }
        );
        
        return (<div key={'arr-items-list'} className="array_items_list">
                    <EczEditFieldDescription
                        key={'desc'}
                        fieldname={''}
                        schema={schema_items} />
                    {props_components_list}
                    <button key={'+'} onClick={ ()=>this.itemNew() }>+</button>
                </div>);
    }

    itemNew() {
        const value = (this.props.value || []);
        let new_array = value.slice();
        new_array.push( null );
        console.log("New array is ", new_array);
        this.props.onChange( new_array );
    }
    itemRemove(idx) {
        const value = (this.props.value || []);

        const confirm_result = window.confirm(
            "Remove item #" + (1+idx) + ": " + JSON.stringify(value[idx]) + " ?"
        );
        if (!confirm_result) {
            return;
        }

        let new_array = value.slice();
        new_array.splice(idx, 1);
        this.props.onChange( new_array );
    }
    itemMoveUp(idx) {
        const value = (this.props.value || []);
        if (idx <= 0) { return; }
        let new_array = value.slice();
        let temp = new_array[idx-1];
        new_array[idx-1] = new_array[idx];
        new_array[idx] = temp;
        this.props.onChange( new_array );
    }
    itemMoveDown(idx) {
        const value = (this.props.value || []);
        if (idx >= (value.length - 1)) { return; }
        let new_array = value.slice();
        let temp = new_array[idx+1];
        new_array[idx+1] = new_array[idx];
        new_array[idx] = temp;
        this.props.onChange( new_array );
    }

    item_changed(index, newval) {
        let new_array = (this.props.value || []).slice();
        new_array[index] = newval;
        this.props.onChange( new_array );
    }
};



class EczEditSchemaFieldScalarType extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return this.props.value != newProps.value;
    }

    render()
    {
        const schema = this.props.schema;

        if (schema.type != 'string') {
            throw Exception("Can't handle non-string scalar types yet.");
        }

        const value = this.props.value || '';

        if (schema['enum']) {
            const enums = schema['enum'];
            let options_components = enums.map( (s) => 
                (<option key={s} value={s}>{s}</option>)
            );
            return (
                <select value={value}
                        onChange={(event) => this.props.onChange(event.target.value) }> 
                  {options_components}
                </select>
            );
        }

        if ( ! schema._minilatex ) {
            if (schema._single_line_string) {
                return (
                    <input type="string"
                           value={value}
                           onChange={(event) => this.props.onChange(event.target.value)} />
                );
            } else {
                return (
                    <textarea
                        onChange={(event) => this.props.onChange(event.target.value)}
                        >{value}</textarea>
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
                    this.props.onChange(value);
                }}
            />
        );
    }
}



class EczEditFieldDescription extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return false; // schema never changes
    }

    render() {

        const fieldname = this.props.fieldname;
        const schema = this.props.schema;

        let expected_items = [];
        if (schema._optional) {
            expected_items.push('this is an optional field');
        }
        if (schema._single_line_string) {
            expected_items.push('single line text')
        }
        if (schema._minilatex) {
            if (schema._minilatex == 'full') {
                expected_items.push(
                    'you can use LaTeX-like commands including citations and references'
                );
            } else if (schema._minilatex == 'simple') {
                expected_items.push(
                    'you can use LaTeX-like commands except for citations and references'
                );
            }
        }

        let expected = expected_items.join('; ');
        if (expected) {
            expected = '[' + expected + '.]';
        }
        
        return [
            <div key={'fldname'}
                 className="EczEditSchemaField_field_name">{fieldname}</div>,
            <div key={'description'}
                 className="EczEditSchemaField_field_description">{schema._description}</div>,
            <div key={'expected'}
                 className="EczEditSchemaField_field_expected">{expected}</div>
        ];
    }
};



export default class EczEditSchemaField extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    render()
    {
        const fieldname = this.props.fieldname;
        const schema = this.props.schema;
        const value = this.props.value;

        console.log("render()! fieldname = ", fieldname);

        let edit_component = null;

        if (schema.type == 'object') {
            edit_component = (
                <EczEditSchemaFieldObjectType
                    key={'object'}
                    schema={schema}
                    value={value}
                    onChange={this.props.onChange} />
            );
        } else if (schema.type == 'array') {
            edit_component = (
                <EczEditSchemaFieldArrayType
                    key={'array'}
                    schema={schema}
                    value={value}
                    onChange={this.props.onChange} />
            );
        } else {
            edit_component = (
                <EczEditSchemaFieldScalarType
                    key={'scalar'}
                    schema={schema}
                    value={value}
                    onChange={this.props.onChange} />
            );
        }

        let description_component = null;
        if ( ! this.props.skip_description ) {
            description_component = (
                <EczEditFieldDescription
                    key={'desc'}
                    fieldname={fieldname}
                    schema={schema} />
            );
        }

        return (
            <div className="EczEditSchemaField">
                {description_component}
                {edit_component}
            </div>
        )
    }
};
