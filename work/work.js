
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('name');

        // Создаем элемент для отображения сообщений
        const messageBox = document.createElement('div');
        messageBox.id = 'message';
        messageBox.style.marginTop = '15px';
        form.appendChild(messageBox);

        // Функция для отображения сообщений
        function showMessage(text, color = 'red') {
            messageBox.textContent = text;
            messageBox.style.color = color;
        }

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const phone = document.getElementById('phone').value.trim();
            const age = document.getElementById('age').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            // Проверка на заполненность
            if (!phone || !age || !email || !password) {
                return showMessage("Заполните все поля");
            }

            // Валидация телефона
            if (!phone.match(/^\+?\d{10,15}$/)) {
                return showMessage('Введите корректный номер телефона.');
            }

            // Валидация возраста
            const ageNum = parseInt(age);
            if (isNaN(ageNum) || ageNum < 18 || ageNum > 50) {
                return showMessage('Возраст должен быть от 18 до 50 лет.');
            }

            // Валидация email
            if (!email.match(/^[^@]+@[^@]+\.[a-z]{2,}$/i)) {
                return showMessage('Введите корректный email.');
            }

            // Валидация пароля
            if (password.length < 6) {
                return showMessage('Пароль должен быть не менее 6 символов.');
            }

            // Если всё валидно
            console.log('Телефон:', phone);
            console.log('Возраст:', age);
            console.log('Email:', email);
            console.log('Пароль:', password);   

            showMessage('Форма успешно отправлена!', 'green');
            alert("Вы приняты!");
            form.reset(); // Сброс формы
            })
        });
    

