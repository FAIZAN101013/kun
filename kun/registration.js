// Function to validate the registration form
function validateRegistrationForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if (username === "" || email === "" || password === "" || password2 === "") {
        alert("All fields are required.");
        return false;
    }

    // Example validation: Check if username and password match a specific pattern
    const usernamePattern = /^[a-zA-Z0-9]{3,}$/; // At least 3 alphanumeric characters
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email pattern
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,}$/; // At least 6 characters

    if (!usernamePattern.test(username)) {
        alert("Username must be at least 3 alphanumeric characters.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 6 characters.");
        return false;
    }

    if (password !== password2) {
        alert("Passwords do not match.");
        return false;
    }

    // If validation passes, you can proceed with form submission or further processing
    alert("Registration successful!");
    return true;
}

// Attach the validateRegistrationForm function to the form's submit event
document.querySelector('.left input[type="submit"]').addEventListener('click', function(event) {
    if (!validateRegistrationForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
