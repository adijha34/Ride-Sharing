// script.js

// Function to handle login
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for the specified username and password
    if (username === 'Utsab2004' && password === 'UG@1234') {
        // Redirect to the client dashboard
        window.location.href = 'client.html'; // Create a new client.html for the dashboard
    } else {
        document.getElementById('login-error').innerText = 'Invalid username or password';
    }
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function () {
    // Redirect back to the landing page
    window.location.href = 'index.html';
});

// Request ride functionality
document.getElementById('request-ride')?.addEventListener('click', function () {
    document.getElementById('ride-status').innerText = 'Ride requested successfully!';
});

// View rides functionality
document.getElementById('view-rides')?.addEventListener('click', function () {
    document.getElementById('ride-list').innerText = 'You have no rides booked.';
});
// Function to handle registration
document.getElementById('register-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        document.getElementById('register-error').innerText = 'Passwords do not match';
        return;
    }

    // Check for existing username (this is a placeholder; implement actual check)
    if (localStorage.getItem(username)) {
        document.getElementById('register-error').innerText = 'Username already exists';
        return;
    }

    // Store user data (this is a simple example; consider using a backend)
    localStorage.setItem(username, JSON.stringify({ email, password }));

    // Redirect to login page after successful registration
    window.location.href = 'login.html';
});