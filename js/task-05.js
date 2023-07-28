const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');


input.addEventListener('input', handlerSearch);
function handlerSearch(evt) {
    if (evt.currentTarget.value.trim() !== '') {
        span.textContent = `${evt.currentTarget.value}`
        
    } else {
        evt.currentTarget.value = 'Anonymous';
        
    }
    
}
