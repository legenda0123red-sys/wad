const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

function showMessage(text, color = "red") {
    loginMessage.textContent = text;
    loginMessage.style.color = color;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value.trim().toLowerCase();
    const password = loginForm.querySelector('input[type="password"]').value;

    if (!email || !password) {
        return showMessage("Пожалуйста, заполните все поля.");
    }

    if (!validateEmail(email)) {
        return showMessage("Введите корректный email.");
    }

    if (password.length < 6) {
        return showMessage("Пароль должен содержать минимум 6 символов.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        (user) => user.email === email && user.password === password
    );

    if (!user) {
        return showMessage("Неверный email или пароль.");
    }

    
    localStorage.setItem("currentUser", JSON.stringify({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }));

    showMessage("Вход выполнен успешно!", "green");

    setTimeout(() => {
        window.location.href = "cinematica.html";
    }, 1500);
});
