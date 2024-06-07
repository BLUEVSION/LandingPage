document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        if (storedUser.username === loginUsername && storedUser.email === loginEmail && storedUser.password === loginPassword) {
            // Successful login, redirect to the account page
            window.location.href = 'conta.html';
        } else {
            alert('Nome de usuário, email ou senha incorretos.');
        }
    } else {
        alert('Nenhum usuário registrado encontrado.');
    }
});