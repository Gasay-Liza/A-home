import "../../utils/fonts/fonts.css";
import "../../styles/main.scss";
import "./projects.html";
import $ from "jquery";

$(document).ready(function () {
  let visibleCards = 9; // Количество видимых карточек по умолчанию
  let totalCards = $('.projects__item').length; // Общее количество карточек
  let loadMoreCount = 3; // Количество дополнительных карточек, подгружаемых при нажатии на кнопку


  // Функция для скрытия карточек
  function hideCards() {
    $('.projects__item:gt(' + (visibleCards - 1) + ')').hide();
  }

  // Функция для показа
  function showCards() {
    $('.projects__item:lt(' + (visibleCards) + ')').show();
  }

  // Функция для обновления видимых и подгружаемых карточек на основе ширины экрана
  function updateCardCounts() {
    if (window.innerWidth <= 768) {
      visibleCards = 3; // Отображать 3 карточки
      loadMoreCount = 3; // Подгружать еще 3 карточки
      hideCards(); // Вызываем функцию для скрытия карточек с новыми настройками
    } else {
      visibleCards = 9; // Вернуть к изначальным настройкам
      loadMoreCount = 3; // Вернуть к изначальным настройкам
      showCards();
    }
  }

  // Инициализация
  hideCards();


  // Проверяем, нужно ли отображать кнопку "Еще"
  if (visibleCards >= totalCards) {
    $('.projects__load-more-btn').hide();
  } else {
    $('.projects__load-more-btn').show();
  }

  // Обработчик события для изменения размера окна
  $(window).on('resize', function () {
    updateCardCounts(); // Вызываем функцию при изменении размера окна
    // Проверяем, нужно ли отображать кнопку "Еще"
    if (visibleCards >= totalCards) {
      $('.projects__load-more-btn').hide();
    } else {
      $('.projects__load-more-btn').show();
    }
  });

  // Обработчик события для кнопки "Еще"
  $('.projects__load-more-btn').on('click', function () {
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