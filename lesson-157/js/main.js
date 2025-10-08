(function () {
  //Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.header__contact-link')


    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 1300) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  }

  // Табы

  const tabControls = document.querySelector('.tab-controls')

  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()


    if (tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
      activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
      activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')

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

  // Галерея-слайдер Залы

  new Swiper(".halls__swiper", {
    spaceBetween: 5,
    autoHeight: true,
    centeredSlides: !0,
    loop: !0,
    pagination: {
      el: ".halls-pagination",
      type: "fraction",
      renderFraction: function (e, t) {
        return '<span class=" ' + e + '  pagination-white"></span> из <span class=" ' + t + ' "></span>'
      }
    },
    navigation: {
      prevEl: ".halls__prev-one",
      nextEl: ".halls__next-one"
    },
    thumbs: {
      el: ".thumbs__wrapper",
      slidesPerView: 5
    },
    breakpoints: {

    },
    on: {}
  });

  // Галерея-слайдер бронирование

  new Swiper(".booking__slider", {
    spaceBetween: 88,
    autoHeight: !0,
    speed: 800,
    initialSlide: 3,
    centeredSlides: !0,
    slidesOffsetBefore: -80,
    loop: !0,
    pagination: {
      el: ".booking-pagination",
      type: "fraction",
      renderFraction: function (e, t) {
        return '<span class=" ' + e + '  pagination-white"></span> из <span class=" ' + t + ' "></span>'
      }
    },
    navigation: {
      prevEl: ".booking__prev",
      nextEl: ".booking__next"
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
    },
    on: {}
  });


  // В момент изменения слайда
  const slideNumber = slide.querySelector('.booking__slide');
  const number = slideNumber.getAttribute('data-number');

  // Обновляем псевдоэлемент
  slide.querySelector('.circle').setAttribute('data-number', number);

})()