import "./utils/fonts/fonts.css";
import './styles/main.scss';
import './index.html'
import $ from 'jquery';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

$(function () {
  // Включение и выключение бургер-меню
  $(".header__burger-btn, .burger-menu__close-btn, .burger-menu__link, .overlay").on("click", function () {
    $(".burger-menu").toggleClass("burger-menu_active");
    $(".overlay").toggleClass("overlay_active");
  });

});

const swiper1 = new Swiper('.swiper-stages', {
  slidesPerView: 1.2,
  direction: 'horizontal',
  spaceBetween: 180,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
  }
});

const swiper2 = new Swiper('.swiper', {
  slidesPerView: 1,
  direction: 'horizontal',
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
});