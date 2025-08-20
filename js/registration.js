const form = document.getElementById("formApp");
const message = document.getElementById("message");

// Вынесенные функции
function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Обработка события отправки формы
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        return showMessage("Заполнить все поля", "red");
    }

    if (password.length < 6) {
        return showMessage("Пароль слишком маленький", "red");
    }

    if (!validateEmail(email)) {
        return showMessage("Введите корректный имейл", "red");
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.email === email)) {
        return showMessage("Email уже зарегистрирован", "red");
    }

    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    form.reset();

    showMessage("Регистрация прошла успешно. Перенаправление...", "green");

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
});
