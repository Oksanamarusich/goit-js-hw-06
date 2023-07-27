function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const elements = {
  bodyColor: document.querySelector('body'),
  buttonChangeColor: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color')
}

elements.buttonChangeColor.addEventListener('click', handlerClick);

function handlerClick(evt) {
  
  elements.bodyColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  elements.colorSpan.textContent = elements.bodyColor.style.backgroundColor;
  
}