import lunr from 'lunr';

import tippy from 'tippy.js';

import 'tippy.js/dist/tippy.css'; // for styling
import 'tippy.js/themes/light.css';

import './searchwidget.scss';

const default_context_length = 50; // chars

const max_num_results_for_mathjax = 100;



function _escapeHTML(str)
{
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}





export class EczooSearchWidget
{
    constructor(a)
    {
        this.search_widget_container = a.search_widget_container;

        this.fields = a.fields;

        this.initial_search_query = a.initial_search_query;

        this.fields_boost = a.fields_boost;
        if (typeof this.fields_boost == 'undefined') {
            this.fields_boost = { name: 10, description: 5 };
        }

        this.ref_field = a.ref_field;
        this.title_field = a.title_field;
        this.href_field = a.href_field;

        this.auto_fuzz_distance = a.auto_fuzz_distance || 1;
        console.log("Auto fuzz distance is = ", this.auto_fuzz_distance);

        this.context_length = a.context_length;
        if (typeof this.context_length == 'undefined') {
            this.context_length = default_context_length;
        }

        this.idx = a.idx;

        this.store_fetch_json = a.store_fetch_json;
        if (typeof this.store_fetch_json != 'undefined') {
            if (typeof this.store != 'undefined') {
                throw Error("EczooSearchFunction: don't specify both store: "
                            +"and store_fetch_json: ");
            }
            fetch(this.store_fetch_json).then(
                (response) => response.json()
            ).then(
                (data) => this._set_store_and_install(data)
            )
            return;
        }
        this._set_store_and_install(a.store);
    }
    
    // private
    _set_store_and_install(store)
    {
        this.store = store;
        console.log('Got store. Store = ', store);

        if (typeof this.store == 'undefined') {
            throw Error("EczooSearchFunction: no store specified or none found");
        }

        // maybe we might need to auto-detect the list of fields
        if (typeof this.fields == 'undefined' || this.fields.length == 0) {
            let fields = [];
            Object.keys(this.store).forEach( (store_key) => {
                let store_obj = this.store[store_key];
                Object.keys(store_obj).forEach( (field_key) => {
                    if ( fields.indexOf(field_key) == -1 ) {
                        fields.push(field_key);
                    }
                });
            });
            this.fields = fields;
        }

        /// TODO: add a suitable "boost" to name and description fields

        // this.idx
        if (typeof this.idx == 'undefined') {
            let _this = this;

            const buildidx = function ()
            {
                let obj = this;
                obj.ref(_this.ref_field);
                _this.fields.forEach( (fldname) => {
                    if (_this.fields_boost.hasOwnProperty(fldname)) {
                        obj.field(fldname, {boost: _this.fields_boost[fldname]});
                    } else {
                        obj.field(fldname);
                    }
                } );
                obj.metadataWhitelist = [ 'position' ];
            
                Object.keys(_this.store).forEach(function (k) {
                    const doc = _this.store[k];
                    obj.add(doc);
                }, obj);
            };

            this.idx = lunr(buildidx);
        }

        //console.log('store =', this.store);
        //console.log('index is = ', this.idx);

        this._do_install();
    }

    // private:
    _do_install()
    {
        console.log("Installing the search widget in the page.");

        // clear any existing content in the target app container
        this.search_widget_container.innerHTML = '';

        const inputbox = document.createElement('input');
        inputbox.setAttribute('type', "text");
        inputbox.classList.add("search-input");
        inputbox.value = (this.initial_search_query ? this.initial_search_query : '');
        inputbox.placeholder = 'type & hit RETURN to search';
        this.search_widget_container.appendChild(inputbox);

        this.search_input = inputbox;

        const divresults = document.createElement('div');
        divresults.classList.add('search-results');
        this.search_widget_container.appendChild(divresults);

        this.search_results_container = divresults;

        this.search_input.addEventListener(
            'change',
            (event) => this._do_search_event(event)
        );
        
        let display_fields_html =
            this.fields.filter( (fld) => (fld.substr(0,1) != '_') )
            .map( (fld) => '<code>'+fld+'</code>' )
            .join(', ');

        // create a simple instructions widget
        let instructions_widget = document.createElement('div');
        instructions_widget.classList.add('search-instructions-tip');
        instructions_widget.innerHTML = 
           `<p>Type query term(s) and hit RETURN to search. </p>
            <p>Advanced usage:</p>
            <p class="search-instructions-item">
                <code>+term</code> or <code>-term</code> to force the presence
                or the abscence of a term;
            </p>
            <p class="search-instructions-item">
              <code>field:term</code> to restrict the search term to within
              the given <i>field</i>. Possible fields: ${display_fields_html}.
            </p>
            <p class="search-instructions-item">
              <code>term~4</code> to include all terms
              with edit distance 4 from the given term (use
              <code>term~0</code> to cancel default fuzziness);
            </p>
            <p class="search-instructions-item">
              <code>term^10</code> to &quot;boost&quot; the term, i.e., to make
              it contribute more to the final match score.
            </p>`;

        // add a tippy widget for some simple instructions
        this.tippy_instance = tippy(
            this.search_input,
            {
                content: instructions_widget,
                allowHTML: true,
                trigger: 'focus',
                interactive: true,
                interactiveBorder: 30,
                maxWidth: '450px',
                placement: 'bottom',
                flip: false,
                // popperOptions: {
                //     placement: 'bottom',
                // },
                theme: 'light',
            }
        );

        if (this.initial_search_query) {
            this.do_search(this.initial_search_query);
        }
    }

    _do_search_event(event)
    {
        const value = event.target.value;
        this.do_search(value);
    }

    do_search(search_str)
    {
        if (typeof MathJax != 'undefined') {
            MathJax.typesetClear(this.search_results_container);
        }
        this.search_results_container.innerHTML = '';

        this.tippy_instance.hide();

        if (!search_str || search_str.trim().length == 0) {
            this._display_search_no_query_string();
            return;
        }

        console.log("Searching! search_str =", search_str);

        let _auto_fuzz_distance = this.auto_fuzz_distance;


        let results;
        try {

            //results = this.idx.search(search_str);

            let q = function (query) {
                let parser = new lunr.QueryParser(search_str, query);
                let qq = parser.parse();
                console.log("Query = ", qq);
                // tweak the query to add an edit distance to all terms
                qq.clauses.forEach( (clause) => {
                    console.log("Processing clause: ", clause,
                                " auto_fuzz_distance = ", _auto_fuzz_distance);
                    if (typeof clause.editDistance === 'undefined') {
                        clause.editDistance = _auto_fuzz_distance;
                    }
                } );
                console.log("Done processing clauses.");
                return qq;
            };

            results = this.idx.query(q);

        } catch (e) {
            if (e instanceof lunr.QueryParseError) {
                this._display_search_error(search_str, e);
                return
            } else {
                throw e;
            }
        }

        console.log('results =', results);

        this._display_search_results(search_str, results);
    }

    _display_search_no_query_string()
    {
        const p = document.createElement('p');
        p.classList.add('search-no-query-string');
        p.textContent =
            'Type a few words above and hit “RETURN” to search the error correction zoo.';

        this.search_results_container.appendChild(p);
    }

    _display_search_error(search_str, error)
    {
        console.log("Error in search.", error);

        const p = document.createElement('p');
        p.classList.add('search-results-error');
        
        const s1 = document.createElement('span');
        s1.textContent = 'Error in search query ‘'+search_str+'’: ';
        p.appendChild(s1);
        
        const s2 = document.createElement('span');
        s2.classList.add('search-results-error-message');
        s2.textContent = error.message;
        p.appendChild(s2);
        
        // const a = document.createElement('a');
        // a.classList.add('search-query-info');
        // a.setAttribute("href", "https://lunrjs.com/guides/searching.html");
        // a.setAttribute("target", "_blank");
        // a.textContent = "(more information on search syntax)";
        // p.appendChild(a);

        this.search_results_container.appendChild(p);
    }

    _display_search_results(search_str, results)
    {
        if (results.length == 0) {
            this._display_search_no_results(search_str);
        } else {
            results.forEach(
                (r) => this._add_display_result(r, this.search_results_container)
            );

            if ( (results.length < max_num_results_for_mathjax)
                 && typeof MathJax != 'undefined') {

                // reset equation numbering & disable numbers (to avoid
                // potentially multiply-defined labels)
                MathJax.texReset();

                // Setting tags to null here doesn't work, probably need to do
                // this before loading MathJax
                //
                //MathJax.config.tex.tags = null;

                // typeset the math in our results
                MathJax.typesetPromise();
            }
        }
    }

    _display_search_no_results(search_str)
    {
        const p = document.createElement('p');
        p.classList.add('search-no-results');
        p.textContent = 'Your search for ‘' + search_str + '’ did not yield any results.';
        // const a = document.createElement('a');
        // a.classList.add('search-query-info');
        // a.setAttribute("href", "https://lunrjs.com/guides/searching.html");
        // a.setAttribute("target", "_blank");
        // a.textContent = "(more information on search syntax)";
        // p.appendChild(a);

        this.search_results_container.appendChild(p);
    }


    _add_display_result(result, container)
    {
        //console.log('store =', this.store);
        //console.log('result =', result);

        const doc = this.store[result.ref];

        const div = document.createElement('div');
        div.classList.add("search-result");

        let srt = document.createElement('div');
        srt.classList.add("search-result-title");
        div.appendChild(srt);
        if (this.href_field) {
            let a = document.createElement('a');
            a.setAttribute('href', doc[this.href_field]);
            a.classList.add("search-result-link");
            srt.appendChild(a);
            srt = a;
        }
        srt.innerText = doc[this.title_field];

        const hipos = {}; // hipos[field] = [ (list of highlight positions) ]

        Object.keys(result.matchData.metadata).forEach( (word) => {
            const wordmatches = result.matchData.metadata[word];
            Object.keys(wordmatches).forEach( (fieldname) => {
                const fieldmatches = wordmatches[fieldname];
                const poslist = fieldmatches.position;
                //console.log('word =', word, 'fieldname =', fieldname, 'poslist =', poslist);

                if ( ! hipos.hasOwnProperty(fieldname) ) {
                    hipos[fieldname] = [];
                }

                hipos[fieldname] = hipos[fieldname].concat(poslist);
            });
        });


        const context_length = this.context_length;

        // iterate over this.fields instead, to preserve field order
        for (const fieldname of this.fields) {

            if ( ! hipos.hasOwnProperty(fieldname) ) {
                // no such field in match
                continue;
            }

            const poslist = hipos[fieldname];

            // sort highlight positions by starting position
            poslist.sort( (a, b) => a[0] - b[0] );
            // make sure that end position does not overstep another starting position
            poslist.forEach( (x, index) => {
                if ( (index < poslist.length - 1)
                     && x[0]+x[1] > poslist[index+1][0] ) {
                    // oversteps onto next position; shorten
                    return [ x[0], poslist[index+1][0]-x[0] ];
                } else {
                    return [ x[0], x[1] ]; // all ok
                }
            });

            //console.log('fieldname =', fieldname, 'poslist =', poslist);

            const docfieldstr = doc[fieldname];

            let showhtml = '';
            let lastpos = 0;

            for (const pospair of poslist) {
                if ( (lastpos>0 && ((pospair[0] - lastpos) < 2*context_length))
                     || (lastpos==0 && (pospair[0] < context_length) ) ) {
                    // close to previous match (or string start), do not elide
                    showhtml += _escapeHTML(docfieldstr.substr(lastpos, pospair[0]-lastpos));
                } else {
                    if (lastpos != 0) {
                        showhtml += _escapeHTML(
                            docfieldstr.substr(lastpos, context_length)
                        );
                        showhtml += '…';
                    }
                    showhtml += ' …';
                    showhtml += _escapeHTML(
                        docfieldstr.substr(pospair[0] - context_length, context_length)
                    );
                }
                showhtml += '<span class="sr-highlight">'
                    + _escapeHTML( docfieldstr.substr(pospair[0], pospair[1]) )
                    + '</span>';
                lastpos = pospair[0] + pospair[1];
            }
            if (docfieldstr.length > (lastpos + context_length)) {
                showhtml += _escapeHTML(
                    docfieldstr.substr(lastpos, context_length)
                ) + '…';
            } else {
                showhtml += _escapeHTML(
                    docfieldstr.substr(lastpos)
                );
            }

            // field name
            showhtml += '<span class="search-result-display-field-name">'
                + _escapeHTML(fieldname)
                + '</span>';

            const p = document.createElement('div');
            p.classList.add('search-result-field-display');
            let fieldnameclsname = fieldname.replace(/[^a-zA-Z0-9_-]/g, "");
            p.classList.add('search-result-field-display--' + fieldnameclsname);
            p.innerHTML = showhtml;

            div.appendChild(p);
        }

        container.appendChild(div);
    }

};
