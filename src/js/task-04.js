const elements = {
    counterValue: document.querySelector('#counter'),
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value')
}
let counterValue = 0;


elements.buttonDecrement.addEventListener('click', handlerClick);
function handlerClick(evt) {
    counterValue--;
    value.textContent = counterValue;
    
    
}


elements.buttonIncrement.addEventListener('click', handlerClick2);
function handlerClick2(evt) {
    counterValue++;
    value.textContent = counterValue;

}

