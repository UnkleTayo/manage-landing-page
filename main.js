const doc = document;
const hamburgerMenu = doc.querySelector('.hamburger');
const mainNavMenu = doc.querySelector('.main-nav');
const sectionOne = doc.querySelector('sec-1');
const date = doc.querySelector('.date');
const elem = document.querySelector('.main-carousel');

hamburgerMenu.addEventListener('click', () => {
  mainNavMenu.classList.toggle('main-nav--active');
  hamburgerMenu.classList.toggle('hamburger--active');
  sectionOne.style.ObjectPosition('relative');
});

const today = new Date();
const year = today.getFullYear();

date.innerHTML = year;

// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity('.main-carousel', {
//   // options
// });
