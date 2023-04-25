const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});
// below is the JS for the toggle hidden img
/*const imgElement = document.getElementById('secret-img-btn');
const imgBtn = document.getElementById('secret-img');

const toggleHiddenElementImg = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display === 'block';
  } else {
    domElement.style.display = 'none';
  }
}

imgElement.addEventListener('click', () => {
  toggleHiddenElementImg(imgBtn);
});
*/