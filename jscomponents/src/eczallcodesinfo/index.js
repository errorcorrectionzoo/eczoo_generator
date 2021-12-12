
//
// We only want a single instance of this class, so this class is actually
// private to this module.  To create an instance / access the existing
// instance, please use the ecz_all_codes_info_instance() function below.
//
class _AllCodesInfo {

    constructor()
    {
        this.raw_data = null;

        let baseurl = window.ecz_baseurl;
        let jsonurl = baseurl + 'dat/all_codes_info_dump.json'

        this._data_ready_promise = fetch(jsonurl).then(
            (response) => response.json()
        ).then(
            (data) => this._got_data(data)
        );
    }

    _got_data(data)
    {
        console.log("Got full code data!");
        this.raw_data = data;
        return true;
    }

    whenDataReady( fn )
    {
        if (this._data_ready_promise === true) {
            // data already obtained
            return Promise.resolve( fn() );
        }
        console.log("Registering function for when all code data will be ready.");
        return this._data_ready_promise.then( fn );
    }
}



window._ecz_all_codes_info = null;

export function ecz_all_codes_info_instance()
{
    if (window._ecz_all_codes_info) {
        return window._ecz_all_codes_info;
    }
    window._ecz_all_codes_info = new _AllCodesInfo();
    return window._ecz_all_codes_info;
}
