import React from 'react';

//import YAML from 'yaml';

import EczEditSchemaField from './EczEditSchemaField.jsx';

import './EczEditCodeApp_style.scss';


export default class EczEditCodeApp extends React.Component
{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         code_id: props.code_id,
    //         code_schema: props.code_schema,
    //         code_data: props.code_data
    //     }
    // }

    render()
    {
        return [
            <div className="EczEditCodeApp_main_pane">
                <EczEditSchemaField schema={this.props.code_schema}
                                    value={this.props.code_data} />
            </div>,
            <div className="EczEditCodeApp_helpers">
                In the future, some helpers will appear here.
            </div>
        ];
    }
};
