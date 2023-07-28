const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    
    const { email, password } = evt.currentTarget.elements;
    

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
  
  const formValue = {
    email: email.value,
    password: password.value
  };
  console.log(formValue);
    

  evt.currentTarget.reset();
}
