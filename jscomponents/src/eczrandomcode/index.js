import {RandomCodeShower} from './randomcode';

window.addEventListener('load', () => {
    let random_code_element = document.getElementById('random-code-box');
    if (random_code_element) {
        random_code_element._ecz_random_code_shower =
            new RandomCodeShower(random_code_element);
        console.log("RandomCodeShower attached to element = ", random_code_element);
    }
});
