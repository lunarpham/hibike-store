//Automatic Slideshow at homepage
let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-image");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

//Featuring products slideshow
let slideIndex2 = 1;
animeSlides(slideIndex2);

function plusSlides2(n) {
  animeSlides(slideIndex2 += n);
}

function currentSlide2(n) {
  animeSlides(slideIndex2 = n);
}

function animeSlides(n) {
  let i;
  let charSlides = document.getElementsByClassName("anime-products");
  let charDots = document.getElementsByClassName("char-dot");
  if (n > charSlides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = charSlides.length}
  for (i = 0; i < charSlides.length; i++) {
    charSlides[i].style.display = "none";  
  }
  for (i = 0; i < charDots.length; i++) {
    charDots[i].className = charDots[i].className.replace(" active", "");
  }
  charSlides[slideIndex2-1].style.display = "flex";  
  charDots[slideIndex2-1].className += " active";
}

