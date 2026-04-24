// Form Validation

const form = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const successMessage = document.querySelector('#successMessage');


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).{8,}$/;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.textContent = '';

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    let isValid = true;


    // Email validation
    if (emailValue === '') {
        emailError.textContent = 'Email should not be empty';
        isValid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailError.textContent = 'Enter a valid email';
        isValid = false;
    }


    // Password validation
    if (passwordValue === '') {
        passwordError.textContent = 'Password should not be empty';
        isValid = false;
    } else if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = 'Password must be 8+ chars with A-Z, a-z, number, symbol';
        isValid = false;
    }


    // Final check
    if (isValid) {
        successMessage.textContent = 'Login Successful';
        form.reset();
    }
});