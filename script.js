document.addEventListener('DOMContentLoaded', function() {
    // Form Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Retrieve User Inputs and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both "@" and "." characters.');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            // Success case
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.className = "success";
            
            // Optional: Reset form after successful registration
            form.reset();
        } else {
            // Error case
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.className = "";
        }
    });
});
