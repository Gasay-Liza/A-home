import "../../utils/fonts/fonts.css";
import "../../styles/main.scss";
import "./services.html";
import $ from "jquery";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

$(document).ready(function () { // При загрузке страницы активному элементу добавляем уголки в свитчере
  $(".switcher__btn.active").prev().addClass("right-corner"); 
  $(".switcher__btn.active").next().addClass("left-corner");
})

$(document).ready(function () {
  $(".switcher__btn").on("click", function (evt) {
    evt.preventDefault();
    $(".services__switcher-btn").removeClass("right-corner"); // Удаление класса "right-corner" со всех элементов
    $(".services__switcher-btn").removeClass("left-corner"); // Удаление класса "left-corner" со всех элементов
    $(this).prev().addClass("right-corner"); 
    $(this).next().addClass("left-corner");

    let $this = $(this);
    let index = $this.index();
    let $switcher = $this.closest(".switcher");
    let $switcher_container = $switcher.find(".switcher__container");
    let $switcher_contents = $switcher_container.find(".switcher__content");
    $this.siblings(".switcher__btn").removeClass("active");
    $this.addClass("active");
    $switcher_contents.removeClass("active");
    $($switcher_contents[index]).addClass("active");
  });

  $(".services__switcher-btn").eq(0).on("click", function () {
    $(".services__block").removeClass("active"); // Удаление класса "active" у элемента ".services__block"
    $(this).closest(".switcher").find(".services__block").css("border-radius", "0 4rem 4rem 4rem"); // При нажатии на первый свитч - убираем у блока верхний уголок
  });

  $(".services__switcher-btn").not(":first").on("click", function () {
    $(".services__block").removeClass("active"); // Удаление класса "active" у элемента ".services__block"
    $(this).closest(".switcher").find(".services__block").css("border-radius", "4rem"); // При нажатии на первый свитч - убираем у блока верхний уголок
  });
  
});

$(document).ready(function () {
  $('.accordion-header').click(function () {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
  });
});

$(document).ready(function () {
const swiperServicesMobile = new Swiper(".services-swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  spaceBetween: 30,
});
})  