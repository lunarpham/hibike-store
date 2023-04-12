/*window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
        if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        } else {
        navbar.classList.remove("sticky");
            }
        }*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("nav-content").style.padding = "0px 60px";
    document.getElementById("logo-white").style.visibility = "visible";
  } else {
    document.getElementById("nav-content").style.padding = "0px 0px";
    document.getElementById("logo-white").style.visibility = "hidden";
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
