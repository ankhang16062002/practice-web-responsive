var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 400,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true
  });

//event click
const btn = document.querySelector('.open-close')
const navbar = document.querySelector('.navbar')


btn.addEventListener('click', () => {
    navbar.classList.toggle('active')
    btn.classList.toggle('active')
})