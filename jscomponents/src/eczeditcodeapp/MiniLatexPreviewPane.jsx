import React from 'react';

import * as minilatextohtml from 'eczpytranscrypt/minilatextohtml.js';
import { repr, __kwargtrans__ } from 'eczpytranscrypt/org.transcrypt.__runtime__.js';
const $$kw = __kwargtrans__;



let preview_timeout_ms = 750;






function format_minilatex_error_string(err)
{
    if ('__str__' in err) {
        return minilatextohtml.htmlescape( err.__str__() );
    } else if ('__class__' in err && '__args__' in err) {
        return minilatextohtml.htmlescape(err.__class__.__name__ + ": "
                                          + err.__args__.join('\n'));
    } else {
        return minilatextohtml.htmlescape( err.toString() );
    }
}


class PreviewMiniLatexDocContext //extends minilatextohtml.HtmlRefContext
{
    constructor()
    {
        //super();
    }

    get_ref(ref_key_prefix, ref_key)
    {
        // return (target_html, target_href)

        if (ref_key_prefix === 'code') {
            const targethref = minilatextohtml.htmlescape('/c/'+ref_key);
            return [
                minilatextohtml.html_wrap_in_tag(
                    'a',
                    minilatextohtml.htmlescape(ref_key),
                    $$kw({
                        attrs: {
                            target: '_blank',
                            href: targethref,
                        },
                        class_: 'ref'
                    })
                ),
                null
            ];
        } else if (ref_key_prefix === 'figure' || ref_key_prefix === 'table') {
            return [
                minilatextohtml.htmlescape(ref_key_prefix+':'+ref_key)
                ,
                null
            ];
        } else {
            return [
                minilatextohtml.html_wrap_in_tag(
                    'span',
                    '(invalid ref key prefix '+ref_key_prefix+')',
                    $$kw({
                        class_: 'ref-error'
                    })
                ),
                null
            ];
        }
    }

    add_footnote(footnote_content_html)
    {
        console.log('add_footnote: footnote_content_html = ', footnote_content_html);
        // return (footnotelabel_html, footnotehref)
        return [ footnote_content_html, null ];
    }

    add_citation(citation_key_prefix, citation_key, optional_cite_extra_html)
    {
        console.log('add_citation: citation_key_prefix = ', citation_key_prefix,
                    '; citation_key = ', citation_key,
                    '; optional_cite_extra_html = ', optional_cite_extra_html);

        // return (citelabel_html, citehref)
        let citelabel_html = citation_key_prefix + ':' + citation_key;
        let citehref = null;
        // simple citation preview for some known schemes
        if (citation_key_prefix === 'doi') {
            citehref = 'https://doi.org/' + citation_key;
        } else if (citation_key_prefix === 'arxiv') {
            citehref = 'https://arxiv.org/abs/' + citation_key;
        } else if (citation_key_prefix === 'preset') {
            // nothing extra to do
        } else if (citation_key_prefix === 'manual') {
            try {
                citelabel_html = new minilatextohtml.MiniLatex(citation_key).to_html();
            } catch (err) {
                citelabel_html = (
                    '<div class="minilatex-html-preview-error">'
                    + minilatextohtml.htmlescape( format_minilatex_error_string(err) )
                    + '</div>'
                );
            }
        } else {
            citelabel_html += ' (INVALID PREFIX)';
        }
        if (optional_cite_extra_html) {
            citelabel_html += ', ' + optional_cite_extra_html;
        }
        citelabel_html = '[' + citelabel_html + ']'
        // custom wrapping because we want the link to be generated
        // explicitly with target="_blank"
        if (citehref === null) {
            return [citelabel_html, null];
        }
        return [
            minilatextohtml.html_wrap_in_tag(
                'a',
                citelabel_html,
                $$kw({
                    attrs: {
                        target: '_blank',
                        href: minilatextohtml.htmlescape(citehref),
                    },
                    class_: 'cite'
                })
            ),
            null
        ];
    }

    add_float(float_obj)
    {
        // return float_html

        const float_contents_part_html =
              '<div class="float-preview-contents-noimpl">(Preview not available for '
              + float_obj.float_type + ')</div>' ;
        let float_caption_part_html = '';
        if (float_obj.caption) {
            float_caption_part_html =
                '<div class="float-preview-caption">'
                + float_obj.float_caption_name + ':&#x2002;'
                + float_obj.caption + '</div>' ;
        }

        return '<div class="float-preview">'
            + float_contents_part_html
            + float_caption_part_html
            + '</div>';
    }
};



import './MiniLatexPreviewPane_style.scss';



export class MiniLatexPreviewPane extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            minilatex: props.minilatex,
            delay_state: 'waiting',
            result_html: null,
            result_error: null,
        };
        this.last_preview_update_timer_id = null;
        this.resultElementRef = React.createRef();
    }

    shouldComponentUpdate(newProps, newState) {
        if ( this.props.minilatex != newProps.minilatex ) {
            return true;
        }
        if ( this.state.delay_state !== newState.delay_state) {
            return true;
        }
        return false;
    }

    componentWillUnmount()
    {
        if ( this.last_preview_update_timer_id !== null ) {
            clearTimeout( this.last_preview_update_timer_id );
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.minilatex === state.minilatex) {
            // all good, continue with the current state
            return state;
        }
        // recompute HTML will be necessary
        return {
            minilatex: props.minilatex,
            delay_state: 'waiting',
            // keep previous result & error to display while new result is
            // waiting & computing
            result_html: state.result_html,
            result_error: state.result_error,
        };
    }

    componentDidMount() {
        this._initiate_generate_html();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.minilatex !== this.props.minilatex) {
            this._initiate_generate_html();
        }

        if (this.state.delay_state === 'ready') {
            // go ahead and typeset math to finish it off
            this.typesetMath();
        }
    }

    render() {
        return (
            <div className="minilatex-html-preview">
                <div className="minilatex-html-preview-header">
                    <span>PREVIEW</span>
                    {
                        (this.state.delay_state == 'waiting')
                            ? (<span className="updating-animation"></span>)
                            : []
                    }
                </div>
                <div className="minilatex-html-preview-error">
                    {this.state.result_error !== null ? this.state.result_error : []}
                </div>
                <div
                    ref={this.resultElementRef}
                    dangerouslySetInnerHTML={
                        { __html:
                          (this.state.result_html !== null) ? this.state.result_html : '' }
                    }
                />
            </div>
        );
                    /* <a onClick={(event) => this.typesetMath()}>TYPESET MATH</a> */
    }

    _initiate_generate_html()
    {
        if (this.state.delay_state === 'waiting') {
            if (this.last_preview_update_timer_id !== null) {
                // reset timer & start delay again
                clearTimeout( this.last_preview_update_timer_id );
                this.last_preview_update_timer_id = null;
            }
            // fire!
            const _this = this;
            this.last_preview_update_timer_id = setTimeout(
                () => _this.generate_html_preview(),
                preview_timeout_ms
            );
        }
    }

    generate_html_preview()
    {
        // no active timer any more
        this.last_preview_update_timer_id = null;

        // go ahead and generate the preview HTML

        const minilatex = this.props.minilatex;

        try {

            const ref_context = new PreviewMiniLatexDocContext();
            const result_html =
                  new minilatextohtml.MiniLatex(minilatex)
                  .to_html(ref_context);

            this.setState({
                minilatex: minilatex,
                delay_state: 'ready',
                result_html: result_html,
                result_error: null,
            });

        } catch (err) {

            console.log(err);

            const err_msg = format_minilatex_error_string(err);

            this.setState({
                minilatex: minilatex,
                delay_state: 'ready',
                result_html: null,
                result_error: err_msg,
            });
        }
    }
    
    typesetMath()
    {
        if (typeof MathJax != 'undefined') {

            //const parent_element = event.target.closest('.minilatex-html-preview');
            const parent_element = this.resultElementRef.current;

            // also tell MathJaX to forget about earlier math that was typeset
            MathJax.typesetClear();
            MathJax.texReset();

            // go ahead and typeset math
            MathJax.typesetPromise([ parent_element ]);

        }
    }

};
