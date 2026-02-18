(function () {
  // Бургер
  document.addEventListener('click', burgerInit)
  document.addEventListener('keydown', closeBurgerOnEsc)

  function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.header__contact-link')
    const burgerMenu = e.target.closest('.header__nav') // Или ваш селектор меню

    // Если клик по иконке бургера или ссылке - переключаем меню
    if (burgerIcon || burgerNavLink) {
      if (document.documentElement.clientWidth > 1300) return
      if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
      } else {
        document.body.classList.remove('body--opened-menu')
      }
      return
    }

    // Если меню открыто и клик вне меню - закрываем
    if (document.body.classList.contains('body--opened-menu') &&
      !burgerMenu &&
      !burgerIcon) {
      document.body.classList.remove('body--opened-menu')
    }
  }

  function closeBurgerOnEsc(e) {
    if (e.key === 'Escape' && document.body.classList.contains('body--opened-menu')) {
      document.body.classList.remove('body--opened-menu')
    }
  }

  // Табы


  // элементы
  const tabs = document.querySelectorAll('.tab-controls__link');
  const panels = document.querySelectorAll('.tab-panel');

  // helper: показать панели с указанным data-hall
  function activateHall(hallId, clickedTab) {
    // переключаем кнопки
    tabs.forEach(t => {
      const is = t.dataset.hall === String(hallId);
      t.classList.toggle('is-active', is);
      t.setAttribute('aria-selected', is ? 'true' : 'false');
      if (is && clickedTab) clickedTab.focus(); // фокус на активный таб (опционально)
    });

    // переключаем все панели (и в info, и в gallery)
    panels.forEach(p => {
      const is = p.dataset.hall === String(hallId);
      p.classList.toggle('tab-panel--active', is);
      // если используете aria-hidden — обновим:
      p.setAttribute('aria-hidden', is ? 'false' : 'true');
    });

    // если галерея содержит Swiper-инстансы — обновляем/переключаем их
    // пример: если вы храните swiper-объекты в объекте swipersByHall
    if (window.swipersByHall && window.swipersByHall[hallId]) {
      const s = window.swipersByHall[hallId];
      // например, сброс к первому слайду и обновление размеров
      if (s && typeof s.update === 'function') {
        s.update();
        s.slideTo(0, 0);
      }
    }
  }

  // обработчик клика
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const hallId = tab.dataset.hall;
      activateHall(hallId, tab);
    });

    // необязательная поддержка клавиатуры (ArrowLeft/ArrowRight)
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const idx = Array.from(tabs).indexOf(tab);
        const nextIdx = (e.key === 'ArrowRight') ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
        tabs[nextIdx].click();
      }
    });
  });


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
    slideToClickedSlide: true,//опционально — чтобы при клике миниатюры смещались
    watchOverflow: true,
    centeredSlides: false,
    autoHeight: false,
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

  //Пересчет номера слайда в секции бронирования

  // В момент изменения слайда
  const slideNumber = slide.querySelector('.booking__slide');
  const number = slideNumber.getAttribute('data-number');

  // Обновляем псевдоэлемент
  slide.querySelector('.circle').setAttribute('data-number', number);


  //Модалка

  const modal = document.querySelector('.modal');
  const openButtons = document.querySelectorAll('.modal--button');   // кнопки, которые открывают модал (если есть)
  const closeButtons = modal ? modal.querySelectorAll('.modal__button, .modal__cancel') : []; // кнопка "забронировать" + крестик

  if (!modal) throw new Error('Модал не найден: .modal');

  const SHOW_CLASS = 'body--opened-modal';

  function openModal(e) {
    e && e.preventDefault();
    document.body.classList.add(SHOW_CLASS);
  }

  function closeModalImmediate(e) {
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






})()