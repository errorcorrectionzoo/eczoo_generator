
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
        let _matches_stub = (c) => (c.replace(/[^a-zA-Z]+/g, "").toLowerCase() == 'stub');
        code_ids = code_ids.filter(
            (code_id) => !_matches_stub(raw_data[code_id].description)
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

        this.element_container.innerHTML =
            `<h1>Your Random Code Pick: ${code.name}</h1>
             <p class="random-code-content">
               <span class="desc">${desc}</span>
               <a href="${code_url}" class="random-code-quick-link">go→</a>
             </p>`;
        
        let a_new_random = document.createElement('a');
        a_new_random.classList.add('random-code-quick-link');
        a_new_random.textContent = 'refresh';
        a_new_random.href = 'javascript:void(0);'
        a_new_random.addEventListener('click', () => this.pick_and_show_random_code());
        this.element_container.querySelector('.random-code-content').appendChild(a_new_random);

        if (typeof MathJax != 'undefined') {
            MathJax.typesetPromise([this.element_container]);
        }
    }
};


