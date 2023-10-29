import "./utils/fonts/fonts.css";
import "./styles/main.scss";
import "./index.html";
import $ from "jquery";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

// Импортируем необходимые модули для пагинации
import { Pagination } from "swiper/modules";

// Подключаем модули пагинации к Swiper
Swiper.use([Pagination]);

$(function () {
  // Включение и выключение бургер-меню
  $(
    ".header__burger-btn, .burger-menu__close-btn, .burger-menu__link, .overlay"
  ).on("click", function () {
    $(".burger-menu").toggleClass("burger-menu_active");
    $(".overlay").toggleClass("overlay_active");
  });
});

// Обработчик события нажатия клавиши на объекте document
$(document).on("keydown", function (event) {
  if (event.keyCode === 27) {
    // Проверка, что нажата клавиша "Esc" (код 27)
    $(".burger-menu").removeClass("burger-menu_active");
    $(".overlay").removeClass("overlay_active");
  }
});

const swiperStages = new Swiper(".swiper-stages", {
  slidesPerView: 1.2,
  direction: "horizontal",
  spaceBetween: 180,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
  },
});

const swiperReviews = new Swiper(".reviews-swiper", {
  modules: [Pagination],
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 30,
  pagination: {
    el: ".reviews-swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
});
