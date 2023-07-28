const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', handlerSearch);
function handlerSearch(evt) {
    
    span.textContent = `${evt.currentTarget.value}`
}
