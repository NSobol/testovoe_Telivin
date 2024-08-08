/*Находим попап и кнопки открыти/закрытия*/
const popap = document.querySelector('.popap');
const createLocate = document.querySelector('.create-popap');
const buttonClose = popap.querySelector('.close');

function getCreatePopap() {
  popap.classList.add('popap-active');
}

function getClosePopap() {
  popap.classList.remove('popap-active');
}

createLocate.addEventListener('click', (event) => {
  getCreatePopap();
});
buttonClose.addEventListener('click', (event) => {
  event.stopPropagation();
  getClosePopap();
});
