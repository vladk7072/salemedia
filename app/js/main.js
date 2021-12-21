$(function(){
  const topSwiper = new Swiper(".top-slider__slider", {
    navigation: {
      nextEl: '.top-slider__arrow-next',
      prevEl: '.top-slider__arrow-prev',
    },
    pagination: {
      el: '.top-slider__pagination',
    },
  });
});