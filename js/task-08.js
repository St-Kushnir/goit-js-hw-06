const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onTargetSubmitForm);

function onTargetSubmitForm(event){
event.preventDefault();

if (event.currentTarget.elements.email.value === '' || 
    event.currentTarget.elements.password.value === '') {
    alert('Всі рядки повинні бути заповнені!')

} else{
    const formData = {
        email: event.currentTarget.elements.email.value,
        password: event.currentTarget.elements.password.value
    };
    console.log(formData);

    event.currentTarget.reset();
}

};


