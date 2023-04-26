/* dom-functions.js */

const toggleHiddenElement = (domElements) => {
    if (domElement.style.display === 'none') {
        domElement.style.display === 'block';
    } else {
        domElement.style.display = 'none';
    }
}
// Above is the function which check to see if the element is hidden or showing in the DOM.

const changeToFunkColor = (domElement) => {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export {toggleHiddenElement, changeToFunkyColor}; // To the left here is the export declaration or whatever...