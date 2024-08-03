// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}

// Function to validate the login form
function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Both fields are required.");
        return false;
    }

    // Example validation: Check if username and password match a specific pattern
    const usernamePattern = /^[a-zA-Z0-9]{3,}$/; // At least 3 alphanumeric characters
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,}$/; // At least 6 characters

    if (!usernamePattern.test(username)) {
        alert("Username must be at least 3 alphanumeric characters.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    // If validation passes, you can proceed with form submission or further processing
    alert("Login successful!");
    return true;
}

// Attach the validateLoginForm function to the form's submit event
document.querySelector('.login-form').addEventListener('submit', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
