
const topSwiper = new Swiper('.swiper.smenu__top-slider', {
    autoplay: {
      delay: 5000,
    },
    loop: true,
  
  
    navigation: {
      nextEl: '.swiper-button-next.smenu__top-slider__next',
      prevEl: '.swiper-button-prev.smenu__top-slider__prev',
    }
  });