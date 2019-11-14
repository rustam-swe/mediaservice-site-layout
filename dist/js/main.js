$(document).ready(function () {
  // Слайдер в начале страницы
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

  // Меню бургер

  const menuBtn = document.querySelector(".menu-btn"); // Кнопка меню
  const headerNav = document.querySelector(".nav"); // Блок с меню
  const headerMenu = document.querySelector(".nav__menu"); // Меню
  const lightBox = document.querySelector(".light-box"); // Лайтбокс (темный фон)

  let showMenu = false; // флаг

  menuBtn.addEventListener("click", toggleMenu);
  lightBox.addEventListener("click", closeMenu);

  function toggleMenu() {
    if (!showMenu) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    menuBtn.classList.add("close");
    headerNav.classList.add("show");
    headerMenu.classList.add("show");
    lightBox.classList.add("show");
    // menuItems.forEach(item => item.classList.add('show'));
    window.addEventListener("scroll", noScroll);
    showMenu = true;
  }

  function closeMenu() {
    menuBtn.classList.remove("close");
    headerNav.classList.remove("show");
    headerMenu.classList.remove("show");
    lightBox.classList.remove("show");
    // menuItems.forEach(item => item.classList.remove('show'));
    window.removeEventListener("scroll", noScroll);
    showMenu = false;
  }

  // Остановить скролл когда открыт меню
  function noScroll() {
    window.scroll(0, 0);
  }
})