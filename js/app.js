/*Находим попапы и кнопки открытия/закрытия*/
const popapCreateLocation = document.querySelector('#createLocation');
const popapEditLocation = document.querySelector('#editLocation');

const createLocate = document.querySelector('.create-popap');
const editLocate = document.querySelectorAll('.edit-popap');
const delLocate = document.querySelectorAll('.edit-popap');

const btnClose = popapCreateLocation.querySelector('.close');
const btnCreate = popapCreateLocation.querySelector('.create');
const btnClouse = popapEditLocation.querySelector('.close');
const btnSave = popapEditLocation.querySelector('.save');
const btnDel = popapEditLocation.querySelector('.delete');

/*Функции и обработчики*/
function getTogglerCreatePopap() {
  popapCreateLocation.classList.toggle('popap-active');
}

createLocate.addEventListener('click', (event) => {
  getTogglerCreatePopap();
});

btnCreate.addEventListener('click', (event) => {
  getTogglerCreatePopap();
});

btnClose.addEventListener('click', (event) => {
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

for (item of delLocate) {
  item.addEventListener('click', (event) => {
    getTogglerEditPopap();
  });
}
btnClouse.addEventListener('click', (event) => {
  getTogglerEditPopap();
});

btnSave.addEventListener('click', (event) => {
  getTogglerEditPopap();
});
btnDel.addEventListener('click', (event) => {
  getTogglerEditPopap();
});
