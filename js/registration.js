const form = document.getElementById("registrationForm"); // исправлено
const message = document.getElementById("message");

// Показывает сообщение пользователю
function showMessage(text, color = "red") {
    message.textContent = text;
    message.style.color = color;
}

// Проверка корректности email
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

    // Проверка заполненности всех полей
    if (!firstName || !lastName || !email || !password) {
        return showMessage("Заполните все поля");
    }

    // Проверка длины пароля
    if (password.length < 6) {
        return showMessage("Пароль должен содержать минимум 6 символов");
    }

    // Проверка email
    if (!validateEmail(email)) {
        return showMessage("Введите корректный email");
    }

    // Получение пользователей из localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверка уникальности email
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        return showMessage("Email уже зарегистрирован");
    }

    // Создание нового пользователя
    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password
    };

    // Сохраняем пользователя
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    showMessage("Регистрация прошла успешно. Перенаправление...", "green");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});
