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
      $("html, body").animate({
        scrollTop: $("#contact-us").offset().top + "px"
      }, 1000)
    });

    $(".btn-training").on("click", function() {
      $("html, body").animate({
        scrollTop: $("#training").offset().top + "px"
      }, 1000)
    });

    $(".btn-digital").on("click", function() {
      $("html, body").animate({
        scrollTop: $("#digital").offset().top + "px"
      }, 1000)
    });

    $(".btn-liveEvents").on("click", function() {
      $("html, body").animate({
        scrollTop: $("#liveEvents").offset().top + "px"
      }, 1000)
    });
    $(".btn-clients").on("click", function() {
      $("html, body").animate({
        scrollTop: $("#clients").offset().top + "px"
      }, 1000)
    });

    $(".btn-top").on("click", function() {
      $("html, body").animate({
        scrollTop: $("#finesse").offset().top + "px"
      }, 1000)
    });

    $(".page-slider").onepage_scroll({
      sectionContainer: "section",
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
