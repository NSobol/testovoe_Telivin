/*Находим попапы и кнопки открытия/закрытия*/
const popapCreateLocation = document.querySelector('#createLocation');
const popapEditLocation = document.querySelector('#editLocation');

const createLocate = document.querySelector('.create-popap');
const editLocate = document.querySelectorAll('.edit-popap');

const buttonClose = popapCreateLocation.querySelector('.close');
const buttonClouse = popapEditLocation.querySelector('.close');

function getTogglerCreatePopap() {
  popapCreateLocation.classList.toggle('popap-active');
}

createLocate.addEventListener('click', (event) => {
  getTogglerCreatePopap();
});

buttonClose.addEventListener('click', (event) => {
  event.stopPropagation();
  getTogglerCreatePopap();
});

function getTogglerEditPopap() {
  popapEditLocation.classList.toggle('popap-active');
}

for (item of editLocate) {
  item.addEventListener('click', (event) => {
    getTogglerEditPopap();
  });
}

buttonClouse.addEventListener('click', (event) => {
  event.stopPropagation();
  getTogglerEditPopap();
});
