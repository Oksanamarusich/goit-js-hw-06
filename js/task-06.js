
const input = document.querySelector('#validation-input');

console.log(input);

input.addEventListener('blur', handlerChecking);

function handlerChecking(evt) {
    
    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}