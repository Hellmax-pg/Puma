const gallarySwiper = new Swiper('.swiper.swiper__gallary-slider', {
    loop: true,
    slidesPerView: 4,

  
    navigation: {
      nextEl: '.swiper-button-next.swiper__gallary-slider__next',
      prevEl: '.swiper-button-prev.swiper__gallary-slider__prev',
    }
  });

const linkList = document.querySelectorAll('.gallary__categories-link')

linkList.forEach(links => {
  links.addEventListener('click', function() {
    if (this.classList.contains('all')) {
      this.classList.add('active');
      document.querySelector('.male').classList.remove('active');
      document.querySelector('.female').classList.remove('active');
      document.querySelector('.kids').classList.remove('active');
      document.querySelectorAll('.kid').forEach(items => {
        items.style.display = "flex";
      });
      document.querySelectorAll('.man').forEach(items => {
        items.style.display = "flex";
      });
      document.querySelectorAll('.woman').forEach(items => {
        items.style.display = "flex";
      });
    } else if (this.classList.contains('male')) {
      this.classList.add('active');
      document.querySelector('.all').classList.remove('active');
      document.querySelector('.female').classList.remove('active');
      document.querySelector('.kids').classList.remove('active');
      document.querySelectorAll('.kid').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;
      });
      document.querySelectorAll('.man').forEach(items => {
        items.style.display = "flex";
      });
      document.querySelectorAll('.woman').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;
      });
    } else if (this.classList.contains('female')) {
      this.classList.add('active');
      document.querySelector('.all').classList.remove('active');
      document.querySelector('.male').classList.remove('active');
      document.querySelector('.kids').classList.remove('active');
      document.querySelectorAll('.kid').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;

      });
      document.querySelectorAll('.man').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;

      });
      document.querySelectorAll('.woman').forEach(items => {
        items.style.display = "flex";
      });
    } else if (this.classList.contains('kids')) {
      this.classList.add('active');
      document.querySelector('.all').classList.remove('active');
      document.querySelector('.female').classList.remove('active');
      document.querySelector('.male').classList.remove('active');
      document.querySelectorAll('.kid').forEach(items => {
        items.style.display = "flex";
      });
      document.querySelectorAll('.man').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;

      });
      document.querySelectorAll('.woman').forEach(items => {
        items.style.display = "none";
        items.style.width = 0;

      });
    }
  });
});


// .addEventListener('click', function() {
//   document.querySelector('.all').classList.add('active');
//   document.querySelector('.male').classList.remove('active');
//   document.querySelector('.female').classList.remove('active');
//   document.querySelector('.kids').classList.remove('active');
// })
