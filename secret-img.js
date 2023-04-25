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