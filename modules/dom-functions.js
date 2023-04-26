/* dom-functions.js */

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
        domElement.style.display === 'block';
    } else {
        domElement.style.display = 'none';
    }
}
// Above is the function which check to see if the element is hidden or showing in the DOM.

const changeToFunkyColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export {toggleHiddenElement, changeToFunkyColor}; // To the left here is the export declaration or whatever...

/* 
I will break down how this module works...

- The toggleHiddenElement() function is declared and accepts the domElement as an input and shows or hides the element based on its cirrent display value...

- A new function changetoFunkyColor() is declared and accepts the domElement as an input as well. It sets a random background color value too.

- The two functions are exported with the ES6 export statement...
*/