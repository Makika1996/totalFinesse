$(function() {
  $(document).ready(function(){
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
  });


});
