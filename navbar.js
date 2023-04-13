
//Move navbar content to right when scrolling
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


//Keep navbar and header in every page using jQuery
$(function(){
  $("#header").load("components/header.html");
  $("#navbar").load("components/navbar.html");
  $("#footer").load("components/footer.html");
});

