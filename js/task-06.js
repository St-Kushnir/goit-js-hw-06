const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event)=> {

    event.currentTarget.value.length < event.currentTarget.dataset.length ? 
    inputEl.classList.add('invalid') : 
    inputEl.classList.remove('invalid'), inputEl.classList.add('valid');
});