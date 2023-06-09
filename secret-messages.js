/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
/*
// below is the JS for the toggle hidden img
const imgElement = document.getElementById('secret-img-btn');
const imgBtn = document.getElementById('secret-img');

const toggleHiddenElementImg = (domElementImg) => {
    if (domElementImg.style.display === 'none') {
      domElementImg.style.display === 'none';
  } else {
    domElementImg.style.display = 'none';
  }
}

imgElement.addEventListener('click', () => {
  toggleHiddenElementImg(imgBtn);
});
*/