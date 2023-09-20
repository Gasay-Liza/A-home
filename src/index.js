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

const swiper = new Swiper('.swiper', {
slidesPerView: 2,
  direction: 'horizontal',
loop: true,
speed: 1000, 
transform: {
  // используйте аппаратное ускорение для улучшения производительности
  hardwareAcceleration: true,
},
});