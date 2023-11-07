import "../../utils/fonts/fonts.css";
import "../../styles/main.scss";
import "./main.html";
import $ from "jquery";
// import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/swiper-bundle.css";

// Импортируем необходимые модули для пагинации
import { Pagination, Navigation } from "swiper/modules";

// Подключаем модули пагинации к Swiper
Swiper.use([Pagination, Navigation]);

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
$(document).ready(function() {
  const swiperStages = new Swiper(".swiper-stages-of-construction", {
    modules: [Navigation],
    slidesPerView: 1.2,
    loop: "true",
    direction: "horizontal",
    spaceBetween: 10,
    navigation: {
      nextEl: '.stages-of-construction__btn-next',
      prevEl: '.stages-of-construction__btn-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
        spaceBetween: 180,
      },
    },
  });

  const swiperReviews = new Swiper(".reviews-swiper", {
    modules: [Pagination,Navigation],
    slidesPerView: 1,
    direction: "horizontal",
    spaceBetween: 30,
    loop: "true",
    navigation: {
      nextEl: '.reviews-swiper-navigation__btn-next',
      prevEl: '.reviews-swiper-navigation__btn-prev',
    },
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

  
});


$(document).ready(function(){
  // Вызов модального окна
  $('.reviews__btn').click( function() {
    console.log("fdwef")
      $('.modal-overlay').fadeIn();
  });

  // Закрытие окна на крестик
  $('.modal__close-btn').click( function() {
      $('.modal-overlay').fadeOut();
  });

  // Закрытие окна на поле
  $(document).mouseup( function (e) { 
      var popup = $('.modal');
      if (e.target != popup[0] && popup.has(e.target).length === 0){
          $('.modal-overlay').fadeOut();
      }
  });

  // Закрытие окна на нажатие клавиши "Esc"
  $(document).keydown( function(e) {
    if (e.keyCode == 27) { // 27 это код клавиши "Esc"
      $('.modal-overlay').fadeOut();
    }
  });
});

$(document).ready(function(){
const textarea = document.getElementById('myTextArea');
  const maxRows = 11; // Максимальное количество строк

  textarea.addEventListener('input', (event) => {
    const target = event.target;
    target.style.height = 'auto'; // Сброс предыдущей высоты
    target.style.height = `${target.scrollHeight}px`; // Устанавливаем новую высоту

    if (target.value.split('\n').length >= maxRows) {
      textarea.style.overflowY = 'scroll'; // Добавляем скролл, если достигнуто максимальное количество строк
    } else {
      textarea.style.overflowY = 'auto'; // Удаляем скролл, если строк меньше максимального значения
    }
  });
});