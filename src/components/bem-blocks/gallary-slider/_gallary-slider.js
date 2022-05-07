const mediaQueryMobile = window.matchMedia('(min-width:1px) and (max-width: 766px)');
const mediaQueryTablet = window.matchMedia('(min-width:766px) and (max-width: 1280px)');
const mediaQueryDesktop = window.matchMedia('(min-width:1280px) and (max-width: 2540px)');

function handleTabletChangeMobile(e) {
  if (e.matches) {
    const gallarySwiper = new Swiper('.swiper.swiper__gallary-slider', {
      loop: true,
      slidesPerView: 1,
  
    
      navigation: {
        nextEl: '.swiper-button-next.swiper__gallary-slider__next',
        prevEl: '.swiper-button-prev.swiper__gallary-slider__prev',
      }
    });
  }
};


function handleTabletChangeTablet(e) {
  if (e.matches) {
    const gallarySwiper = new Swiper('.swiper.swiper__gallary-slider', {
      loop: true,
      slidesPerView: 2,
  
    
      navigation: {
        nextEl: '.swiper-button-next.swiper__gallary-slider__next',
        prevEl: '.swiper-button-prev.swiper__gallary-slider__prev',
      }
    });
  }
};

function handleTabletChangeDesktop(e) {
  if (e.matches) {
    const gallarySwiper = new Swiper('.swiper.swiper__gallary-slider', {
      loop: true,
      slidesPerView: 4,
  
    
      navigation: {
        nextEl: '.swiper-button-next.swiper__gallary-slider__next',
        prevEl: '.swiper-button-prev.swiper__gallary-slider__prev',
      }
    });
  }
};

mediaQueryTablet.addListener(handleTabletChangeTablet)
handleTabletChangeTablet(mediaQueryTablet)
mediaQueryDesktop.addListener(handleTabletChangeDesktop)
handleTabletChangeDesktop(mediaQueryDesktop)
mediaQueryMobile.addListener(handleTabletChangeMobile)
handleTabletChangeMobile(mediaQueryMobile)

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
