$(document).ready(function () {
  // All Scripts Here

  //   AOS initialization
  AOS.init();

  //   drag and drop feature
  $("#draggable").draggable();

  //   Image Slider Initialization
  $(".owl-carousel").owlCarousel({
    margin: 15,
    items: 1,

    nav: true,
    dots: true,

    // mouseDrag: false
  });

  //   Fix div when it reaches to top

  $(window).scroll(function () {
    var heightOfTopbar = $(".topbar").height();

    console.log(heightOfTopbar);

    if ($(this).scrollTop() > heightOfTopbar) {
      $("header").addClass("fixHeader");
    } else {
      $("header").removeClass("fixHeader");
    }
  });

  //   show form based on click the button in header

  //   $("header .btn_custom ").click(function () {
  //     // alert("Header button clicked");
  //     //   add ".dekha" class to popupwrapper
  //     $(".popupwrapper").addClass("dekha");
  //   });
});

//using plain javascript

var headerButton = document.querySelector("header .btn_custom");
var ourPopupWrapper = document.querySelector(".popupwrapper");
var closeMyPopup = document.querySelector(".closePopup");
headerButton.addEventListener("click", function () {
  ourPopupWrapper.classList.add("dekha");
});
closeMyPopup.addEventListener("click", function () {
  ourPopupWrapper.classList.remove("dekha");
});
