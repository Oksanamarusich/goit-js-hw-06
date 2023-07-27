function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const elements = {
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input'),
  containerBoxes: document.querySelector('.boxes'),
  
}




const amount = elements.input.value;
function createBoxes(amount) {
  amount = `<div></div>`;
  
}

elements.containerBoxes.insertAdjacentHTML('afterbegin', amount);



elements.btnCreate.addEventListener('click', handlerCreate);
function handlerCreate(evt) {
  
}

elements.btnDestroy.addEventListener('click', handlerDestroy);
function handlerDesrtroy(evt) {
  
}
