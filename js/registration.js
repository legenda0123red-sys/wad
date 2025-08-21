const form = document.getElementById("registrationForm");
const message = document.getElementById("message");


function showMessage(text, color = "red") {
    message.textContent = text;
    message.style.color = color;
}


function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

   
    if (!firstName || !lastName || !email || !password) {
        return showMessage("Заполните все поля");
    }


    if (password.length < 6) {
        return showMessage("Пароль должен содержать минимум 6 символов");
    }


    if (!validateEmail(email)) {
        return showMessage("Введите корректный email");
    }

  
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        return showMessage("Email уже зарегистрирован");
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
        window.location.href = "login.html";
    }, 1500);
});
