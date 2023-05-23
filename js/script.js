// Lang switch

const langBtn = document.querySelector('.lang-picker__btn');
const langBtnList = document.querySelectorAll('.lang-picker__lang');

let open = false;
let lang;

langBtn.addEventListener('click', event => {
  let target = event.currentTarget;

  lang = target.querySelector('.lang-picker__text-lang').textContent;
  
  target.querySelector('.lang-picker__arrow').classList.toggle('open');
  target.classList.toggle('active');
  target.nextElementSibling.classList.toggle('visually-hidden');
  
  if(!open) {
    langBtnList.forEach(btn => {
      btn.tabIndex = 0;
    })

    open = true;
  } else {
    langBtnList.forEach(btn => {
      btn.tabIndex = -1;
    })
    
    open = false;
  }
});


langBtnList.forEach(btn => {
  btn.addEventListener('click', event => {
    document.querySelector('.lang-picker__text-lang').innerHTML = event.currentTarget.textContent;
    event.currentTarget.textContent = lang;
    event.currentTarget.style.color = "#000";
    lang = document.querySelector('.lang-picker__text-lang').textContent;
  })
})

const heroSwiper = new Swiper('.hero-swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.hero-swiper__arrow-next',
    prevEl: '.hero-swiper__arrow-prev',
  },
});

const newsSwiper = new Swiper(".news-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.news-swiper__btn--next',
    prevEl: '.news-swiper__btn--prev',
  },
});


const footerUp = document.querySelector('.footer__up');

footerUp.addEventListener('click', event => {
  window.scrollTo(pageYOffset, 0);
});