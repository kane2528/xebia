document.addEventListener('DOMContentLoaded', function() {
    initialEmail();
    initialPhone();
    initialLoginValidation();
});

function initialEmail() {
    const emailSection = document.getElementById('emailSection');
    const emailVerificationSection = document.getElementById('emailVerificationSection');
    const emailRegistrationForm = document.getElementById('emailRegistrationForm');
    const sendCode1Button = document.getElementById('sendCode1');
    const skipEmailButton = document.getElementById('skipEmail');

    sendCode1Button.addEventListener('click', function(event) {
        event.preventDefault();
        emailSection.style.display = 'none';
        emailVerificationSection.style.display = 'block';
    });

    skipEmailButton.addEventListener('click', function() {
        emailSection.style.display = 'none';
        document.getElementById('phoneSection').style.display = 'block';
    });
}

function initialPhone() {
    const phoneSection = document.getElementById('phoneSection');
    const phoneVerificationSection = document.getElementById('phoneVerificationSection');
    const phoneRegistrationForm = document.getElementById('phoneRegistrationForm');
    const sendCode2Button = document.getElementById('sendCode2');
    const skipPhoneButton = document.getElementById('skipPhone');

    sendCode2Button.addEventListener('click', function(event) {
        event.preventDefault();
        phoneSection.style.display = 'none';
        phoneVerificationSection.style.display = 'block';
    });

    skipPhoneButton.addEventListener('click', function() {
        phoneSection.style.display = 'none';
        document.getElementById('loginDetailsSection').style.display = 'block';
    });
}

function initialLoginValidation() {
    const continueToLoginButton = document.getElementById('continueToLogin');
    const skipLoginButton = document.getElementById('skipLogin');
    const loginDetailsSection = document.getElementById('loginDetailsSection');
    const loginDetailsForm = document.getElementById('loginDetailsForm');

    continueToLoginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordMatchMessage = document.getElementById('password-match-message');

        let valid = true;
        passwordMatchMessage.textContent = '';

        // Validate username
        if (!username.match(/^[a-zA-Z0-9]{8,20}$/)) {
            valid = false;
            passwordMatchMessage.textContent = 'Username must be 8-20 characters long and contain only letters and numbers.';
        }

        // Validate password
        if (!password.match(/^(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/)) {
            valid = false;
            passwordMatchMessage.textContent = 'Password must be at least 8 characters long, with at least one number and one uppercase letter.';
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            valid = false;
            passwordMatchMessage.textContent = 'Passwords do not match.';
        }

        if (valid) {
            loginDetailsSection.style.display = 'none';
            window.location.href = 'form.html';
        }
    });

    skipLoginButton.addEventListener('click', function() {
        window.location.href = 'form.html';
    });
}
