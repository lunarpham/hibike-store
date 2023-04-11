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
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0px 50px";
    document.getElementById("logo").style.fill = "white";
  } else {
    document.getElementById("navbar").style.padding = "0px 0px";
  }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
