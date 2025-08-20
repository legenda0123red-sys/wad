const themeToggle = document.getElementById('themeToggle');
 const savedMovieJSON = localStorage.getItem('card');

    if (savedMovieJSON) {
      const movie = localStorage.getItem('cardTitle');
      const imgCard = localStorage.getItem('cardImg');

      const container = document.getElementById('movie-details');

      container.innerHTML = `
      
        <img src="${imgCard}" alt="${movie.title}" />
         <h1>${movie}</h1>
        <h2>Оценка фильма 10/10</h2>
      `;
    } else {
    
      document.getElementById('movie-details').textContent = 'Данные о фильме не найдены.';
    }

    document.body.className = localStorage.getItem('theme') || 'light';


    themeToggle?.addEventListener('click', () => {
    const current = document.body.className;
    const newTheme = current === 'light' ? 'aqua' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    console.log(`Тема переключена на: ${newTheme}`);
});
 const buttons = document.querySelectorAll('.date-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

     
      console.log("Вы выбрали:", btn.textContent);
    });
  });