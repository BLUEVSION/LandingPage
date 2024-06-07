document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    // Save the user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect to login page
    window.location.href = 'login.html';
});