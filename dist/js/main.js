// Слайдер в начале страницы

$(document).ready(function () {
  // Слайдер на главной
  $('.main-slider').slick({
    dots: false
  });
  $('.portfolio-slider').slick({
    dots: false
  });

  $('.our-clients__list').slick({
    mobileFirst: true,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 480,
      settings: "unslick"
    }]
  });
})