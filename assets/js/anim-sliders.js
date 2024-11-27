const sliders = document.querySelectorAll(
  '.section-3 .wrapper-illustration-xl .wrapper-img'
);
const subtitles = document.querySelectorAll(
  '.section-3 .wrapper-illustration-xl .illustration-subtitle'
)
const nextSlideBtn = document.querySelector('#nextSlideBtn');
const prevSlideBtn = document.querySelector('#prevSlideBtn');
let idInterval;
let i = 0;

const updateSlide = (i) => {
  sliders.forEach((el) => el.classList.remove('active'));
  subtitles.forEach((el) => el.classList.remove('active'));
  sliders[i].classList.add('active');
  subtitles[i].classList.add('active');
};
const nextSlide = () => {
  i++;
  i = i >= sliders.length ? 0 : i;
  updateSlide(i);
};

const prevSlide = () => {
  i--;
  i = i < 0 ? sliders.length - 1 : i;
  updateSlide(i);
};

const startAutoSlide = () => {
  idInterval = setInterval(() => {
    nextSlide();
  }, 5200);
};

nextSlideBtn.addEventListener('click', () => {
  clearInterval(idInterval);
  nextSlide();
  startAutoSlide();
});

prevSlideBtn.addEventListener('click', () => {
  clearInterval(idInterval);
  prevSlide();
  startAutoSlide();
});

startAutoSlide();
