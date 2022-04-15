import React from 'react';

import { MiniLatex } from 'eczpytranscrypt/minilatextohtml.js';
import { repr, __kwargtrans__ } from 'eczpytranscrypt/org.transcrypt.__runtime__.js';
const $$kw = __kwargtrans__;


import './MiniLatexPreviewPane_style.scss';


export class MiniLatexPreviewPane extends React.Component
{
    shouldComponentUpdate(newProps, newState) {
        return ( this.props.minilatex != newProps.minilatex );
    }

    render() {
        let minilatex_result = null;
        try {
            const html_result = MiniLatex(this.props.minilatex).to_html();
            minilatex_result = (
                <div
                    className="minilatex-html-preview"
                    dangerouslySetInnerHTML={{__html: html_result}} />
            );
        } catch (err) {
            console.error(err);
            minilatex_result = (
                <pre className="minilatex-html-error"
                     style={{color: 'red', fontWeight: 'bold', whiteSpace: 'pre-wrap'}}>
                {err.__args__.join('\n')}
                </pre>
            );
        }

        return minilatex_result;

        // if (typeof MathJax != 'undefined') {
        //     MathJax.typesetPromise([this.element_container]);
        // }
    }
};
