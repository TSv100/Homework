(function () {
  //Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.header__contact-link')


    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1200) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }


  //Аккордеон с Faqs

  const summaries = document.querySelectorAll('summary');

  summaries.forEach((summary) => {
    summary.addEventListener('click', closeOpenedDetails);
  });

  function closeOpenedDetails() {
    summaries.forEach((summary) => {
      let detail = summary.parentNode;
      if (detail != this.parentNode) {
        detail.removeAttribute('open');
      }
    });
  }

  // Галерея-слайдер бронирование

  const swiper = new Swiper('.booking__slider', {

    spaceBetween: 106,
    slidesPerView: 5.5,
    loop: false,
    initialSlide: 2,
    centeredSlides: true,


    pagination: {
      el: '.booking-pagination',
      clickable: true,
      type: 'fraction',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.booking__next',
      prevEl: '.booking__prev',
    },

    breakpoints: {
      290: {
        slidesPerView: 1,
        spaceBetween: -30
    },
    500: {
        slidesPerView: 2.3,
        spaceBetween: 30
    },
    850: {
        slidesPerView: 3.3,
        spaceBetween: 53
    },
    1480: {
        slidesPerView: 5.3
    }
    }


  });

  // В момент изменения слайда
  const slideNumber = slide.querySelector('.booking__slide');
  const number = slideNumber.getAttribute('data-number');

  // Обновляем псевдоэлемент
  slide.querySelector('.circle').setAttribute('data-number', number);

})()