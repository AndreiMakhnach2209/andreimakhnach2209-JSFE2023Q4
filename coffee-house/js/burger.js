const burgerMenu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.burger-btn');
const main = document.querySelector('.main');
const footer  = document.querySelector('.footer');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('burger-btn_active');
  burgerMenu.classList.toggle('header__menu_visible');
  if (burgerMenu.classList.contains('header__menu_visible')){
    burgerMenu.addEventListener('transitionend', () => {
      main.classList.toggle('section_fixed');
      footer.classList.toggle('section_fixed');
    }, {once:true});
  }else{
    main.classList.toggle('section_fixed');
    footer.classList.toggle('section_fixed');
  }
})

const navLinks = document.querySelectorAll('.nav-list__link');
navLinks.forEach((item) =>
  item.addEventListener('click',() => {
    burgerBtn.classList.remove('burger-btn_active');
    burgerMenu.classList.remove('header__menu_visible');
    main.classList.remove('section_fixed');
    // footer.classList.remove('section_fixed');
  }))

window.addEventListener('resize', (event) => {
  if (event.target.screen.width > 768) {
    burgerBtn.classList.remove('burger-btn_active');
    burgerMenu.classList.remove('header__menu_visible');
    main.classList.remove('section_fixed');
  }
})