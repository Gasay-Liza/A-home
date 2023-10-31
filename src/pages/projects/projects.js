import "../../utils/fonts/fonts.css";
import "../../styles/main.scss";
import "./projects.html";
import $ from "jquery";

$(document).ready(function() {
    let visibleCards = 9; // Количество видимых карточек по умолчанию
    let totalCards = $('.projects__item').length; // Общее количество карточек
    let loadMoreCount = 3; // Количество дополнительных карточек, подгружаемых при нажатии на кнопку
  
    // Скрываем все карточки, кроме первых visibleCards
    $('.projects__item:gt(' + (visibleCards - 1) + ')').hide();
  
    // Проверяем, нужно ли отображать кнопку "Еще"
    if (visibleCards >= totalCards) {
      $('.projects__load-more-btn').hide();
    }
  
    // Обработчик события для кнопки "Еще"
    $('.projects__load-more-btn').on('click', function() {
      // Показываем следующие loadMoreCount карточек
      $('.projects__item:hidden:lt(' + loadMoreCount + ')').fadeIn();
  
      // Обновляем значение visibleCards
      visibleCards += loadMoreCount;
  
      // Проверяем, нужно ли скрывать кнопку "Еще"
      if (visibleCards >= totalCards) {
        $('.projects__load-more-btn').hide();
      }
    });
  });