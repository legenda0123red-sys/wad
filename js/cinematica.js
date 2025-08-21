var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const cardClicks = document.querySelectorAll('.card_title');

cardClicks.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('.img_film').src;
    const title = card.querySelector('.title_film h3').textContent;

  
    localStorage.setItem('cardImg', img);
    localStorage.setItem('cardTitle', title);

    window.location.href = "about.html";
  });
});

