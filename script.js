const menuBars = document.getElementById('menu-bars');
const smSreenMenu = document.getElementById('small-screen-menu');

const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');


//SLIDING NAV BAR

function toggleNav() {
//onclick menu bars toggle change
    menuBars.classList.toggle('change');
//onclick menu slide in/slide out
    smSreenMenu.classList.toggle('menu-active');

    if (smSreenMenu.classList.contains('menu-active')) {
        //menu slide in
        smSreenMenu.classList.add('menu-slide-right');
        smSreenMenu.classList.remove('menu-slide-left');
        document.body.style.position = 'fixed';

    } else {
        //menu slide out
        smSreenMenu.classList.add('menu-slide-left');
        smSreenMenu.classList.remove('menu-slide-right');
        document.body.style.position = '';
    }
}

//onclick toggle menu and menu bars animation
menuBars.addEventListener('click', toggleNav);


//CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("image-box");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += "active";
}

previousBtn.addEventListener('click', plusSlides(-1));
nextBtn.addEventListener('click', plusSlides(1));
