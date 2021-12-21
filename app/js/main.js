$(function () {
  const topSwiper = new Swiper(".top-slider__slider", {
    speed: 500,
    navigation: {
      nextEl: ".top-slider__arrow-next",
      prevEl: ".top-slider__arrow-prev",
    },
    pagination: {
      el: ".top-slider__pagination",
    },
  });

  const closeBanner = document.querySelector(".fixed-banner"),
  closeBtn = document.querySelector(".fixed-banner__close-img"),
  footer = document.querySelector(".footer");

  closeBtn.addEventListener("click", () => {
    closeBanner.style.display = "none",
    footer.style.paddingBottom = "30px"
  });

  const sendBtns = document.querySelector(".sendPopup__social-btns");

  $(".sendPopup__social-btn").click(function () {
    $(".sendPopup__social-btn").removeClass("sendPopup__social-btn--active");
    $(this).addClass("sendPopup__social-btn--active");
  });
  
});
