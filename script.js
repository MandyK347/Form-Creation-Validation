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
        function displayFeedback () {
            // make feedback visible
        feedbackDiv.style.display = "block"; // Show feedback div
         if (isValid) {
            // Set success message
            feedbackDiv.textContent = "Registration sucessful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            // Join error messages and display them
            feedbackDiv.innerHTML = messages.join("<br>"); // Display error messages
            feedbackDiv.style.color ="#dc3545"; // Red color for errors
        }
    }
    });
});