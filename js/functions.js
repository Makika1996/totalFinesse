$(function() {
  $(document).ready(function() {
    $(".client-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: true,
      arrows: true
    });

    $(".mac-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false
    });

    $(".iphone-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false
    });

    $(".btn-contact").on("click", function() {
      $(".page-slider").moveTo(6);
    });

    $(".btn-training").on("click", function() {
      $(".page-slider").moveDown(1);
    });

    $(".btn-digital").on("click", function() {
      $(".page-slider").moveTo(3);
    });

    $(".btn-liveEvents").on("click", function() {
      $(".page-slider").moveTo(4);
    });
    $(".btn-down").on("click", function() {
      $(".page-slider").moveDown(1);
    });

    $(".btn-top").on("click", function() {
      $(".page-slider").moveTo(1);
    });

    $(".page-slider").onepage_scroll({
      sectionContainer: ".page-section",
      easing: "ease",
      animationTime: 1000,
      pagination: true,
      updateURL: false,
      beforeMove: function(index) {},
      afterMove: function(index) {},
      loop: false,
      keyboard: true,
      responsiveFallback: false,
      direction: "vertical"
    });

  });


});
