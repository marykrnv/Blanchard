const elements = document.querySelectorAll('.header__select');

elements.forEach(element => 
  choices = new Choices(element, {
    itemSelectText: '',
    position: 'bottom',
    searchEnabled: false,
    shouldSort: false
  })
);

const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
})


