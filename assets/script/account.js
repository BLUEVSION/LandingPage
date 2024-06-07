window.addEventListener('DOMContentLoaded', function() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        document.getElementById('username').value = storedUser.username;
        document.getElementById('email').value = storedUser.email;
        document.getElementById('password').value = storedUser.password;
    }

    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    editBtn.addEventListener('click', function() {
        usernameInput.disabled = false;
        emailInput.disabled = false;
        passwordInput.disabled = false;
        editBtn.style.display = 'none';
        saveBtn.style.display = 'block';
    });

    saveBtn.addEventListener('click', function() {
        const updatedUser = {
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        localStorage.setItem('user', JSON.stringify(updatedUser));

        usernameInput.disabled = true;
        emailInput.disabled = true;
        passwordInput.disabled = true;
        saveBtn.style.display = 'none';
        editBtn.style.display = 'block';
    });
});