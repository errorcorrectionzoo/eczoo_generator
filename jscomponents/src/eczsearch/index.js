import { EczooSearchWidget } from './searchwidget';

export { EczooSearchWidget };

export default {
    EczooSearchWidget: EczooSearchWidget
};

// -------------------------------------------------------------------

// automatically install in the page, searching for the correct element by ID

window.addEventListener('load', () =>
    {
        console.log("Initialization code for possible search widget.");

        const elem = document.getElementById('EczooSearchWidget');
        if (elem) {

            console.log("Initializing search widget.");

            let fields = elem.dataset.searchWidgetFields;
            if (fields) {
                fields = fieldsval.split(',').map(
                    (s) => s.trim()
                );
            }
            let the_context_length = elem.dataset.searchWidgetContextLength;
            if (the_context_length) {
                the_context_length = Number.parseInt(the_context_length);
            }

            // Check if there is a query string in the URL
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            let initial_search_q = null;
            if (params.hasOwnProperty('q')) {
                initial_search_q = params.q;
            }

            window.eczoo_search_widget = new EczooSearchWidget({
                search_widget_container: elem,
                store_fetch_json: elem.dataset.searchWidgetStoreFetchJson,
                fields: fields,
                ref_field: elem.dataset.searchWidgetRefField,
                title_field: elem.dataset.searchWidgetTitleField,
                href_field: elem.dataset.searchWidgetHrefField,
                context_length: the_context_length,
                initial_search_query: initial_search_q
            });
            
        }
    }
);

