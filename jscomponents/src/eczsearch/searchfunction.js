import lunr from 'lunr';


const context_length = 40; // chars

function _escapeHTML(str)
{
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(str));
    return p.innerHTML;
}

export class EczooSearchFunction
{
    constructor(a)
    {
        this.search_box_obj = a.search_box_obj;
        this.search_results_container = a.search_results_container;

        this.ref_field = a.ref_field;
        this.title_field = a.title_field;
        this.fields = a.fields;

        this.context_length = a.context_length || context_length;

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

        console.log('store =', this.store);

        console.log('index is = ', this.idx);

        this._do_install();
    }

    // private:
    _do_install()
    {
        this.search_box_obj.placeholder = "search";
        
        this.search_results_container.innerHTML =
            "<span style=\"font-style:italic\">(Search results will appear here.)</span>";

        this.search_box_obj.addEventListener('change', (event) => this._do_search(event));
    }

    _do_search(event)
    {
        const value = event.target.value;

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

        this.search_results_container.innerHTML = '';
        results.forEach(
            (r) => this._add_display_result(r, this.search_results_container)
        );
    }

    _display_search_error(search_str, error)
    {
        this.search_results_container.innerHTML = '';

        console.log("Error in search.", error);

        const p = document.createElement('p');
        p.classList.add('search-results-error');
        
        const s1 = document.createElement('span');
        s1.textContent = 'Error in search query: ';
        p.appendChild(s1);
        
        const s2 = document.createElement('span');
        s2.classList.add('search-results-error-message');
        s2.textContent = error.message;
        p.appendChild(s2);
        
        const a = document.createElement('a');
        a.setAttribute("href", "https://lunrjs.com/guides/searching.html");
        a.setAttribute("target", "_blank");
        a.textContent = "(more information on search syntax)";
        p.appendChild(a);

        this.search_results_container.appendChild(p);
    }

    _add_display_result(result, container)
    {
        console.log('store =', this.store);

        console.log('result =', result);
        const doc = this.store[result.ref];

        const div = document.createElement('div');
        div.classList.add("search-result");

        const srt = document.createElement('h2');
        srt.classList.add("search-result-title");
        srt.innerText = doc[this.title_field];

        div.appendChild(srt);

        const hipos = {}; // hipos[field] = [ (list of highlight positions) ]

        Object.keys(result.matchData.metadata).forEach( (word) => {
            const wordmatches = result.matchData.metadata[word];
            Object.keys(wordmatches).forEach( (fieldname) => {
                const fieldmatches = wordmatches[fieldname];
                const poslist = fieldmatches.position;
                console.log('word =', word, 'fieldname =', fieldname, 'poslist =', poslist);

                if ( ! hipos.hasOwnProperty(fieldname) ) {
                    hipos[fieldname] = [];
                }

                hipos[fieldname] = hipos[fieldname].concat(poslist);
            });
        });

        console.log('hipos =', hipos);

        //Object.keys(hipos).forEach( (fieldname) => {

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

            console.log('fieldname =', fieldname, 'poslist =', poslist);

            const docfieldstr = doc[fieldname];

            var showhtml = '';
            var lastpos = 0;

            for (const pospair of poslist) {
                if ( (pospair[0] - lastpos) < 2*context_length ) {
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

            const p = document.createElement('p');
            p.classList.add('search-result-field-display');
            p.classList.add('search-result-field-display--' + fieldname);
            p.innerHTML = showhtml;

            div.appendChild(p);
        }

        container.appendChild(div);
    }

};
