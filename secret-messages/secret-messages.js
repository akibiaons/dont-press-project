/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';

const buttonElement = document.getElementById('secret-button');
const pElement =  document.getElementById('secret-p');
// Above are two delared variables assigned to html elements...

buttonElement.addEventListener('click', () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});

/*
Changes broken down:

    - secret-messages.js has two functions toggleHiddenElement and changeToFunkyColor() which are imported from the ../modules/dom-functions.js

    - This allows the imported toggleHiddenElement() function to execute with pElement as an argument when the button is clicked...

    - changeToFunkyColor() is another imported function which changes with the click called with buttonElement.
*/