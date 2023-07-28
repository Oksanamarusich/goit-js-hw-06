function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Я СПИСАЛА ЦЕ ЗАВДАННЯ, ТОМУ ВОНО ЗАКОМЕНТОВАНЕ, ВВАЖАЙТЕ, ЩО ЙОГО НЕМА

// const elements = {
//   btnCreate: document.querySelector('button[data-create]'),
//   btnDestroy: document.querySelector('button[data-destroy]'),
//   input: document.querySelector('input'),
//   containerBoxes: document.querySelector('#boxes'),
  
// }
// elements.btnCreate.addEventListener('click', handlerCreate);

// function handlerCreate(evt) {
//   const amount = elements.input.value;
//   createBoxes(amount);
// }

// elements.btnDestroy.addEventListener('click', handlerDesrtroy);
//  function handlerDesrtroy(evt) {
//    destroyBoxes();
//  }



//  function createBoxes(amount) {
//    let size = 30;
//    let boxes = '';
//    for (let i = 0; i < amount; i++){
//      const color = getRandomHexColor();
//      boxes += `<div style="width:${size}px;height:${size}px;background-color:${color}"></div>`;
//      size += 10;
//    }
//    elements.containerBoxes.innerHTML = boxes;
//  }

// function destroyBoxes() {
//   elements.containerBoxes.innerHTML = '';
//  }
 
 
  


 









