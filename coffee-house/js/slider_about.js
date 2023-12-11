const slideCards = document.querySelectorAll('.slider__item'),
      slider = document.querySelector('.slider__content'),
      prevBtn = document.querySelector('.slider__btn_left'),
      nextBtn =document.querySelector('.slider__btn_rigth'),
      numberOfSlides = slideCards.length,
      slideControls = document.querySelectorAll('.slider__control'),
      slides = document.querySelectorAll('.slide');

let   slideIndex = 0;

function pagingSlide () {
  let left = (slider.scrollWidth / numberOfSlides) * slideIndex;
  slider.style.left = '-' + left + 'px';
}

function prevSlide () {
  clearInterval(fillingControl);
  progressValue = 0;
  slideControls[slideIndex].style.backgroundImage = 
    `linear-gradient(to right, var(--border-dark) 0, var(--border-ligth) 0 100%)`;
  slideIndex = (slideIndex === 0) ? numberOfSlides - 1 : slideIndex - 1;
  pagingSlide();
  pagingInterval();
}

function nextSlide () {
  clearInterval(fillingControl);
  progressValue = 0;
  slideControls[slideIndex].style.backgroundImage = 
    `linear-gradient(to right, var(--border-dark) 0, var(--border-ligth) 0 100%)`;
  slideIndex = (slideIndex === numberOfSlides - 1) ? 0 : slideIndex + 1;
  pagingSlide();
  pagingInterval();
}

pagingSlide();
window.addEventListener('resize', () => {
  slider.style.transition = 'none';
  pagingSlide();
  slider.style.transition = '0.5s all';
});
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

let fillingControl,
    progressValue = 0;

function pagingInterval (value = 0) {
  fillingControl = setInterval(() => {
    value++;
    slideControls[slideIndex].style.backgroundImage = 
      `linear-gradient(to right, var(--border-dark) ${value}%, ` +
      `var(--border-ligth) ${value}% 100% )`;
    if (value === 100) {
      nextSlide();
    }
    progressValue = value;
  }, 50);
  
}

pagingInterval();

let downX, upX;

slides.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    clearInterval(fillingControl);
    downX = 0;
    upX = 0;
  });
  item.addEventListener('mouseout', () => {
    pagingInterval(progressValue);
  });

  item.addEventListener('mousedown', (event) => {
    downX = event.clientX;
    clearInterval(fillingControl);
  });
  item.addEventListener('mouseup', (event) => {
    upX = event.clientX;
    if (downX > upX) nextSlide();
    if (downX < upX) prevSlide();
    clearInterval(fillingControl);
  });

  item.addEventListener('touchstart', (event) => {
    downX = event.touches[0].clientX;
    clearInterval(fillingControl);
  });
  item.addEventListener('touchend', (event) => {
    upX = event.changedTouches[0].clientX;
    if (downX > upX) nextSlide();
    if (downX < upX) prevSlide();
    clearInterval(fillingControl);
    pagingInterval(progressValue);
  });
})

