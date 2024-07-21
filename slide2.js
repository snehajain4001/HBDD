// Clone the slides and append them to the slider
const slidesContainer = document.querySelector('.slides');
const slides = slidesContainer.querySelectorAll('img');

slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  slidesContainer.appendChild(clone);
});
