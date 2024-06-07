      
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

// JS PARA CONTA!!!!!!!!

document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");
    const profilePic = document.getElementById("profile-pic");
    const profilePicInput = document.getElementById("profile-pic-input");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Carregar informações da conta do localStorage
    function loadAccountData() {
        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
        const storedProfilePic = localStorage.getItem("profilePic");

        if (storedUsername) usernameInput.value = storedUsername;
        if (storedEmail) emailInput.value = storedEmail;
        if (storedPassword) passwordInput.value = storedPassword;
        if (storedProfilePic) profilePic.src = storedProfilePic;
    }

    loadAccountData();

    // Ativar edição
    editBtn.addEventListener("click", function () {
        usernameInput.removeAttribute("disabled");
        emailInput.removeAttribute("disabled");
        passwordInput.removeAttribute("disabled");
        saveBtn.style.display = "block";
        editBtn.style.display = "none";
    });

    // Salvar alterações
    saveBtn.addEventListener("click", function () {
        const newUsername = usernameInput.value;
        const newEmail = emailInput.value;
        const newPassword = passwordInput.value;

        localStorage.setItem("username", newUsername);
        localStorage.setItem("email", newEmail);
        localStorage.setItem("password", newPassword);

        usernameInput.setAttribute("disabled", true);
        emailInput.setAttribute("disabled", true);
        passwordInput.setAttribute("disabled", true);
        saveBtn.style.display = "none";
        editBtn.style.display = "block";

        alert("Informações atualizadas com sucesso!");
    });

    // Trocar foto de perfil
    profilePicInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
                localStorage.setItem("profilePic", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});

