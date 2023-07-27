
const input = document.querySelector('#validation-input');



input.addEventListener('blur', handlerChecking);

function handlerChecking(evt) {
    
    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        
    } else {
        input.classList.add("invalid");
    }
}