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
  // 1) thumbs (миниатюры)
  const thumbsSwiperOne = new Swiper('.thumbs__swiper-one', {
    spaceBetween: 4,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true // опционально — чтобы при клике миниатюры смещались
  });

  // 2) основной слайдер
  const hallsSwiperOne = new Swiper('.halls__swiper-one', {
    spaceBetween: 5,
    autoHeight: false,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.halls-pagination-one',
      type: 'fraction',
      renderFraction: function (curClass, totalClass) {
        return '<span class="' + curClass + ' pagination-white"></span> из <span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      prevEl: '.halls__prev-one',
      nextEl: '.halls__next-one'
    },
    thumbs: {
      swiper: thumbsSwiperOne  // <- важно: экземпляр, а не селектор
    }
  });

  // 3) И только теперь вешаем обработчик клика
  thumbsSwiperOne.on('click', () => {
    const idx = thumbsSwiperOne.clickedIndex;
    if (idx === undefined) return;
    // При loop:true у основного — используем slideToLoop
    hallsSwiperOne.slideToLoop(idx, 300); // index, speed (ms)
  });

  // Галерея-слайдер Залы
  // 1) thumbs (миниатюры)
  const thumbsSwiperTwo = new Swiper('.thumbs__swiper-two', {
    spaceBetween: 4,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true // опционально — чтобы при клике миниатюры смещались
  });

  // 2) основной слайдер
  const hallsSwiperTwo = new Swiper('.halls__swiper-two', {
    spaceBetween: 5,
    autoHeight: false,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.halls-pagination-two',
      type: 'fraction',
      renderFraction: function (curClass, totalClass) {
        return '<span class="' + curClass + ' pagination-white"></span> из <span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      prevEl: '.halls__prev-two',
      nextEl: '.halls__next-two'
    },
    thumbs: {
      swiper: thumbsSwiperTwo  // <- важно: экземпляр, а не селектор
    }
  });

  // 3) И только теперь вешаем обработчик клика
  thumbsSwiperTwo.on('click', () => {
    const idx = thumbsSwiperTwo.clickedIndex;
    if (idx === undefined) return;
    // При loop:true у основного — используем slideToLoop
    hallsSwiperTwo.slideToLoop(idx, 300); // index, speed (ms)
  });

  // Кнопка прокрутки

  const h = document.querySelector(".footer__arrow");
  if (!h) return;

  const SHOW_AFTER = 700;
  window.addEventListener("scroll", () => {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    h.classList.toggle('is-visible', scrolled >= SHOW_AFTER);
  }, { passive: true });




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

  //Модалка

  const modal = document.querySelector('.modal');
  const openButtons = document.querySelectorAll('.modal--button');   // кнопки, которые открывают модал (если есть)
  const closeButtons = modal ? modal.querySelectorAll('.modal__button, .modal__cancel') : []; // кнопка "забронировать" + крестик
  
  if (!modal) throw new Error('Модал не найден: .modal');
  
  const SHOW_CLASS = 'body--opened-modal';
  
  function openModal(e){
    e && e.preventDefault();
    document.body.classList.add(SHOW_CLASS);
  }
  
  function closeModalImmediate(e){
    e && e.preventDefault();
    document.body.classList.remove(SHOW_CLASS);
  }
  
  // открытие (если есть внешняя кнопка(и))
  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  
  // закрытие при клике по оверле или крестику (ваша существующая логика)
  modal.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      closeModalImmediate(e);
    }
  });
  
  // закрытие при клике на кнопку внутри модалки (.modal__button)
  closeButtons.forEach(btn => btn.addEventListener('click', (e) => {
    // если это кнопка отправки формы и нужна отправка — не делать e.preventDefault()
    e.preventDefault();
    // выполнить действие (например, валидация/отправка) перед закрытием при необходимости
    closeModalImmediate();
  }));
  
  // опционально: закрывать ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalImmediate();
  });
  



  // В момент изменения слайда
  const slideNumber = slide.querySelector('.booking__slide');
  const number = slideNumber.getAttribute('data-number');

  // Обновляем псевдоэлемент
  slide.querySelector('.circle').setAttribute('data-number', number);




})()