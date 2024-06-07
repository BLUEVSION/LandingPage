      
const hasSeenAlert = sessionStorage.getItem('hasSeenAlert');

if (!hasSeenAlert) {
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.style.display = 'block';
}

function goToScreen2() {
    sessionStorage.setItem('hasSeenAlert', true);
    // Substitua 'register.html' pelo caminho para a tela 2
    window.location.href = 'assets/pages/register.html';
}

function stayOnScreen() {
    sessionStorage.setItem('hasSeenAlert', true);
    const alertContainer = document.getElementById('alertContainer');
    alertContainer.style.display = 'none';
}


function handleInitialPrompt() {
    const wantsToRegister = confirm("Você deseja se cadastrar?");
    sessionStorage.setItem("alertShown", "true");

    if (wantsToRegister) {
        window.location.href = "register.html";
    } else {
        document.getElementById("login-btn").style.display = "block";
    }
}

function handleRegister() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");

    if (username === storedUsername || email === storedEmail) {
        alert("Nome de usuário ou email já cadastrados. Tente novamente.");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    }
}

function handleLogin() {
    const username = document.getElementById("login-username").value;
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && email === storedEmail && password === storedPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "welcome.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

