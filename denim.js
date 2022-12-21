/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
const slides = document.querySelectorAll('.hero__slider-img');
const leftArrow = document.querySelector('.hero__left-left-arrow');
const rightArrow = document.querySelector('.hero__left-right-arrow');

function changeFromPreview(element) {
  const currentBig = document.querySelector('.big');
  const nextBig = element.target;

  nextBig.classList.add('big');
  currentBig.classList.remove('big');
}

function adjustArrow() {
  const currentBig = document.querySelector('.big');
  if (+currentBig.dataset.path === slides.length) {
    rightArrow.style.disable = true;
    rightArrow.style.visibility = 'hidden';
  } else if (+currentBig.dataset.path === 1) {
    leftArrow.style.disable = true;
    leftArrow.style.visibility = 'hidden';
  } else {
    rightArrow.style.disable = false;
    rightArrow.style.visibility = 'visible';
    leftArrow.style.disable = false;
    leftArrow.style.visibility = 'visible';
  }
}

function nextSlide(event) {
  const currentBig = document.querySelector('.big');
  let n = +currentBig.dataset.path;
  if ((event.target === rightArrow) && (++n > slides.length)) {
    return;
  } else if ((event.target === leftArrow) && (--n < 1)) {
    // eslint-disable-next-line no-unused-vars
    return;
  }
  const nextBig = document.querySelector(`.hero__slider-img[data-path="${n}"]`);

  nextBig.classList.add('big');
  currentBig.classList.remove('big');
}

slides.forEach((slide) => {
  slide.addEventListener('click', (event) => {
    if (!event.target.classList.contains('big')) {
      changeFromPreview(event);
    }
  });
});

rightArrow.addEventListener('click', (event) => {
  nextSlide(event);
  adjustArrow();
});

leftArrow.addEventListener('click', (event) => {
  nextSlide(event);
  adjustArrow();
});

adjustArrow();
