import "./utils/fonts/fonts.css";
import './scss/index.scss';
import './index.html'
import $ from 'jquery';

$(function () {
    // Включение и выключение бургер-меню
    $(".header__burger-btn, .burger-menu__close-btn, .burger-menu__link, .overlay").on("click", function () {
      $(".burger-menu").toggleClass("burger-menu_active");
      $(".overlay").toggleClass("overlay_active");
    });

});