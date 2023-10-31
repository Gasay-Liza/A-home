import "../../utils/fonts/fonts.css";
import "../../styles/main.scss";
import "./services.html";
import $ from "jquery";

$(document).ready(function () {
    $(".switcher__btn").on("click", function (evt) {
      evt.preventDefault();
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
});

$(document).ready(function() {
  $('.accordion-header').click(function() {
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle();
  });
});