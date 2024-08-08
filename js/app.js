/*Находим попапы и кнопки открытия/закрытия*/
const popapCreateLocation = document.querySelector('#createLocation');
const popapEditLocation = document.querySelector('#editLocation');

const createLocate = document.querySelector('.create-popap');
const editLocate = document.querySelector('.edit-popap');

const buttonClose = popapCreateLocation.querySelector('.close');
const buttonClouse = popapEditLocation.querySelector('.close');

function getTogglerCreatePopap() {
  popapCreateLocation.classList.toggle('popap-active');
}

function getTogglerEditPopap() {
  popapEditLocation.classList.toggle('popap-active');
}

createLocate.addEventListener('click', (event) => {
  getTogglerCreatePopap();
});

buttonClose.addEventListener('click', (event) => {
  event.stopPropagation();
  getTogglerCreatePopap();
});

editLocate.addEventListener('click', (event) => {
  getTogglerEditPopap();
});

buttonClouse.addEventListener('click', (event) => {
  event.stopPropagation();
  getTogglerEditPopap();
});
