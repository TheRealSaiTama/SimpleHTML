const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');
const submit = document.getElementById('submit');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();  

    if(usernameValue === '') {
        setError(username,'Username cannot be blank');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email,'Email cannot be blank');
    } else if(!isValidEmail(emailValue)) {
        setError(email,'Email is not valid');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password,'Password cannot be blank');
    } else if(passwordValue.length < 8) {
        setError(password,'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2,'Password cannot be blank');
    } else if(password2Value !== passwordValue) {
        setError(password2,'Passwords do not match');
    } else {
        setSuccess(password2);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message; 

    inputControl.classList.add('error')
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}