const slideCards = document.querySelectorAll('.slider__item'),
      slider = document.querySelector('.slider__content'),
      prevBtn = document.querySelector('.slider__btn_left'),
      nextBtn =document.querySelector('.slider__btn_rigth'),
      numberOfSlides = slideCards.length;
let slideIndex = 0;

function pagingSlide (index) {
  let left = (slider.scrollWidth / numberOfSlides) * index;
  slider.style.left = '-' + left + 'px';
}

function prevSlide () {
  slideIndex = (slideIndex === 0) ? numberOfSlides - 1 : slideIndex - 1;
  pagingSlide(slideIndex);
}

function nextSlide () {
  slideIndex = (slideIndex === numberOfSlides - 1) ? 0 : slideIndex + 1;
  pagingSlide(slideIndex);
}

pagingSlide(slideIndex);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);