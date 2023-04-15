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