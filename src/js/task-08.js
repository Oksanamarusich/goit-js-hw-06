const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    
    const { email, password } = evt.currentTarget.elements;
    console.log(email.value);
    console.log(password.value);

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Email: ${email.value}, Password: ${password.value}`);

  evt.currentTarget.reset();
}
