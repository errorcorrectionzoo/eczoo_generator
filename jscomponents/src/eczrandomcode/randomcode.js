
import {ecz_all_codes_info_instance} from '../eczallcodesinfo';

import './randomcode.scss';


const truncate_description_at_length = 300;


export class RandomCodeShower
{
    constructor(element_container)
    {
        this.element_container = element_container;

        this.all_codes_info_instance = ecz_all_codes_info_instance();

        this.all_codes_info_instance.whenDataReady(
            () => this.pick_and_show_random_code()
        );
    }

    pick_and_show_random_code()
    {
        const raw_data = this.all_codes_info_instance.raw_data;
        if (!raw_data) {
            console.error("Called RandomCodeShower.pick_and_show_random_code() before "+
                          "data was loaded");
            return;
        }

        console.log("Choosing a random code to show ... ");

        let code_ids = Object.keys( raw_data );

        // make sure the code isn't a simple empty "stub"
        const rx_stub = /^[ \t\n.;_-]*stub[ \t\n.;!_-]*$/i;
        code_ids = code_ids.filter(
            (code_id) => ! raw_data[code_id].description.match(rx_stub)
        );

        const random_code_id = code_ids[ parseInt(code_ids.length * Math.random(), 0) ];
        const random_code = raw_data[random_code_id];

        this._show_code(random_code_id, random_code);
    }

    _show_code(code_id, code)
    {
        let desc = code.description;
        if (desc.length > truncate_description_at_length) {
            desc = desc.substr(0, truncate_description_at_length) + ' …';
        }

        const code_url = window.ecz_baseurl + 'c/' + code_id;

        this.element_container.innerHTML = '';

        const h1 = document.createElement('h1');
        h1.innerHTML = `Your Random Code Pick: ${code.name}`;

        const a_go = document.createElement('a');
        a_go.setAttribute('href', code_url);
        a_go.classList.add('random-code-quick-link');
        a_go.classList.add('random-code-quick-link-go');
        a_go.innerText = 'go →';

        const a_new_random = document.createElement('a');
        a_new_random.classList.add('random-code-quick-link');
        a_new_random.classList.add('random-code-quick-link-refresh');
        a_new_random.textContent = 'refresh';
        a_new_random.href = 'javascript:void(0);'
        a_new_random.addEventListener('click', () => this.pick_and_show_random_code());

        const p_desc = document.createElement('p');
        p_desc.classList.add('random-code-content');
        p_desc.innerHTML = desc;

        this.element_container.appendChild(h1);
        this.element_container.appendChild(a_go);
        this.element_container.appendChild(a_new_random);
        this.element_container.appendChild(p_desc);
        
        if (typeof MathJax != 'undefined') {
            MathJax.typesetPromise([this.element_container]);
        }
    }
};


