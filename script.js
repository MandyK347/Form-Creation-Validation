document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form'); // Reference to the form
    const feedbackDiv = document.getElementById('form-feedback'); // Reference to feedback div

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        let messages = [];

        // Username Validation (must be at least 3 characters long)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation (must contain "@" and ".")
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address");
        }

        // Password Validation (must be at least 8 characters long)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long");
        }

         // Display feedback
         if (isValid) {
         feedbackDiv.style.display = "block"; // Show feedback div
             feedbackDiv.textContent = "Registration successful!";
             feedbackDiv.style.color = "#28a745"; // Success color
        } else {
            const errorMessage = messages.join("<br>");
            feedbackDiv.style.display = "block"
            feedbackDiv.innerHTML = errorMessages;
            feedbackDiv.style.color = "#dc3545"; // Error color
        }
    });
});