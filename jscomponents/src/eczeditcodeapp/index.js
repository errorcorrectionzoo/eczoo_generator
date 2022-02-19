import React from "react";
import ReactDOM from "react-dom";

import YAML from 'yaml';

import EczSchemaRefResolver from '../eczschemarefresolver';

import EczEditCodeApp from "./EczEditCodeApp.jsx";

export default EczEditCodeApp;



class EczEditCodeAppInstaller {
    constructor(root_element, code_id, code_yml_filename)
    {
        let _this = this;

        this.root_element = root_element;
        this.code_id = code_id;
        this.code_yml_filename = code_yml_filename;

        this.schema_resolver = new EczSchemaRefResolver();

        // Fetch schema, we'll need it.
        this.resolve_ecc_schema_promise =
            this.schema_resolver.resolve('/schemas/ecc')
            .then( (schema) => {
                console.log("resolved ecc schema: ", schema);
                _this.code_schema = schema;
            } );
        
        this.ready_to_install_promise = this.resolve_ecc_schema_promise;

        if (code_yml_filename) {

            //
            // Fetch the code data that we should edit, and fetch the 
            //
            const fetch_codeyml_url = (
                'https://raw.githubusercontent.com/errorcorrectionzoo/eczoo_data/main/codes/'
                    + code_yml_filename
            );
            this.fetch_code_data_promise = fetch(fetch_codeyml_url).then(
                async (response) => {
                    const response_data = await response.text();
                    _this.code_data = YAML.parse( response_data );
                    console.log("Got code data -> ", _this.code_data);
                }
            );

            this.ready_to_install_promise = Promise.all([
                this.resolve_ecc_schema_promise,
                this.fetch_code_data_promise
            ]);

        } else {

            // prepare empty data structure
            this.code_data = {
                code_id: code_id
            }

        }

        this.ready_to_install_promise.then( () => { _this.install() } );
    };

    
    install()
    {
        //
        // Render the app
        //
        ReactDOM.render(
            <EczEditCodeApp code_id={this.code_id}
                            code_schema={this.code_schema}
                            code_data={this.code_data} />,
            this.root_element
        );
    }

};




window.addEventListener('load', () => {

    //
    // Find where to install our JS App
    //
    let root_element = document.getElementById("main");

    //
    // find the code that we are editing
    //
    const url_params = new URLSearchParams(window.location.search);
    const code_id = url_params.get('code_id');
    const code_yml_filename = url_params.get('code_yml_filename');

    console.log("Preparing to install the edit code app. code_id = ", code_id,
                "; code_yml_filename = ", code_yml_filename);

    window.ecz_edit_code_app_installer =
        new EczEditCodeAppInstaller(root_element, code_id, code_yml_filename);
});
