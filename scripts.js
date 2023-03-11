const form = document.querySelector('.signup-form');
const formInput = document.querySelector('.signup-form__input');
const formErrorLabel = document.querySelector('.signup-form__error-label');


// Uses a standard regex to validate email addresses, returning true if valid
const emailValid = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

// On error it adds the invalid class to the input field and displaus the error message
const onError = (message) => {
    formErrorLabel.textContent = message;
    formInput.classList.add('invalid');
}

// On Valid input it removes the invalud class and error label text
const onValid = () => {
    formErrorLabel.textContent = '';
    formInput.classList.remove('invalid');
    // Here, in a larger projct, you would normally submit the form here.
}

// Listen for submit events, validates the submitted email and triggers on error/valid functions
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = formInput.value.trim();

    if (value === '') {
        onError('The email field cannot be blank.')
    }
    else if (!emailValid(value)) {
        onError('Please provide a valid email')
    }
    else {
        onValid();
    }
})