
(function () {
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

  // Галерея-слайдер

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

  });

  // В момент изменения слайда
  const slideNumber = slide.querySelector('.booking__slide-number');
  const number = slideNumber.getAttribute('data-number');

  // Обновляем псевдоэлемент
  slide.querySelector('.circle').setAttribute('data-number', number);

})()