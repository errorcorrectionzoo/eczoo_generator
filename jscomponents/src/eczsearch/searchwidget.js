import lunr from 'lunr';


const default_context_length = 50; // chars

const max_num_results_for_mathjax = 50;



function _escapeHTML(str)
{
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}



export class EczooSearchWidget
{
    constructor(a)
    {
        this.search_widget_container = a.search_widget_container;

        this.fields = a.fields;

        this.ref_field = a.ref_field;
        this.title_field = a.title_field;
        this.href_field = a.href_field;

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
            var fields = [];
            Object.keys(this.store).forEach( (store_key) => {
                var store_obj = this.store[store_key];
                Object.keys(store_obj).forEach( (field_key) => {
                    if ( fields.indexOf(field_key) == -1 ) {
                        fields.push(field_key);
                    }
                });
            });
            this.fields = fields;
        }

        // this.idx
        if (typeof this.idx == 'undefined') {
            var _this = this;

            const buildidx = function ()
            {
                var obj = this;
                obj.ref(_this.ref_field);
                _this.fields.forEach( (fldname) => obj.field(fldname) );
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
        inputbox.value = '';
        inputbox.placeholder = 'type & hit RETURN to search';
        this.search_widget_container.appendChild(inputbox);

        this.search_input = inputbox;

        const divresults = document.createElement('div');
        divresults.classList.add('search-results');
        this.search_widget_container.appendChild(divresults);

        this.search_results_container = divresults;

        this.search_input.addEventListener('change', (event) => this._do_search(event));
    }

    _do_search(event)
    {
        this.search_results_container.innerHTML = '';

        const value = event.target.value;

        if (!value || value.trim().length == 0) {
            this._display_search_no_query_string();
            return;
        }

        console.log("Searching! value =", value);

        var results;
        try {

            results = this.idx.search(value);

        } catch (e) {
            if (e instanceof lunr.QueryParseError) {
                this._display_search_error(value, e)
                return
            } else {
                throw e
            }
        }

        console.log('results =', results);

        this._display_search_results(value, results);
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
        
        const a = document.createElement('a');
        a.classList.add('search-query-info');
        a.setAttribute("href", "https://lunrjs.com/guides/searching.html");
        a.setAttribute("target", "_blank");
        a.textContent = "(more information on search syntax)";
        p.appendChild(a);

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
                MathJax.typeset();
            }
        }
    }

    _display_search_no_results(search_str)
    {
        const p = document.createElement('p');
        p.classList.add('search-no-results');
        p.textContent = 'Your search for ‘' + search_str + '’ did not yield any results.';
        const a = document.createElement('a');
        a.classList.add('search-query-info');
        a.setAttribute("href", "https://lunrjs.com/guides/searching.html");
        a.setAttribute("target", "_blank");
        a.textContent = "(more information on search syntax)";
        p.appendChild(a);

        this.search_results_container.appendChild(p);
    }


    _add_display_result(result, container)
    {
        //console.log('store =', this.store);
        //console.log('result =', result);

        const doc = this.store[result.ref];

        const div = document.createElement('div');
        div.classList.add("search-result");

        var srt = document.createElement('div');
        srt.classList.add("search-result-title");
        div.appendChild(srt);
        if (this.href_field) {
            var a = document.createElement('a');
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

            var showhtml = '';
            var lastpos = 0;

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
            var fieldnameclsname = fieldname.replace(/[^a-zA-Z0-9_-]/g, "");
            p.classList.add('search-result-field-display--' + fieldnameclsname);
            p.innerHTML = showhtml;

            div.appendChild(p);
        }

        container.appendChild(div);
    }

};



// -------------------------------------------------------------------

// automatically install in the page, searching for the correct element by ID

function init_search_widget()
{
    console.log("Initialization code for possible search widget.");

    const elem = document.getElementById('EczooSearchWidget');
    if (elem) {

        console.log("Initializing search widget.");

        var fields = elem.dataset.searchWidgetFields;
        if (fields) {
            fields = fieldsval.split(',').map(
                (s) => s.trim()
            );
        }
        var the_context_length = elem.dataset.searchWidgetContextLength;
        if (the_context_length) {
            the_context_length = Number.parseInt(the_context_length);
        }

        window.eczoo_search_widget = new EczooSearchWidget({
            search_widget_container: elem,
            store_fetch_json: elem.dataset.searchWidgetStoreFetchJson,
            fields: fields,
            ref_field: elem.dataset.searchWidgetRefField,
            title_field: elem.dataset.searchWidgetTitleField,
            href_field: elem.dataset.searchWidgetHrefField,
            context_length: the_context_length,
        });

    }
}

if (document.readyState === "complete") {
    init_search_widget();
} else {
    console.log('window = ', window);
    window.addEventListener('load', init_search_widget);
}
