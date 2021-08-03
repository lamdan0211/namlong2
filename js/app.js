

(function($) {
  var tienich = $(".tienich-nl .content");
  tienich.owlCarousel({
      center: true,
      items: 2,
      loop: true,
      nav: true,
      autoplay: true,
  });
  'use strict';
  // initialize fullPage
  var width = $(window).width();
  var height = $(window).height();
  var top = 200;
  if(width > 1264)
  {
    $("#section1").css("height", height);
    $("#section4").css("height", height);
    $(window).scroll(function() {
      var x = $(this).scrollTop();
      if($('body').hasClass('home')){       
        var section2 = $("#section2").position().top - top;
        var section3 = $("#section3").position().top - top;
        var section4 = $("#section4").position().top - top;
        var section5 = $("#section5").position().top - top;
        var section6 = $("#section6").position().top - top;
        var section7 = $("#section7").position().top - top;
        var section8 = $("#section8").position().top - top;
        if(x > section2){
          $("#header").addClass("active");
          $("#section2 ._right").addClass("go");
          $("#section2 ._left").addClass("go");
        }
        else
        {
          $("#header").removeClass("active");
        }
        if(x > section3){
          $("#section3 ._right").addClass("go");
          $("#section3 ._left").addClass("go");
        }
        if(x > section4){
          $("#section4 ._right").addClass("go");
          $("#section4 ._left").addClass("go");
        }
        if(x > section5){
          $("#section5 ._right").addClass("go");
          $("#section5 ._left").addClass("go");
        }
        if(x > section6){
          $("#section6 ._right").addClass("go");
          $("#section6 ._left").addClass("go");
        }
        if(x > section7){
          $("#section7 ._right").addClass("go");
          $("#section7 ._left").addClass("go");
        }
        if(x > section8){
          $("#section8 ._right").addClass("go");
          $("#section8 ._left").addClass("go");
        }
      }
      if($('body').hasClass('intro'))
      {
        var section2 = $("#intro1").position().top - top;
        var section3 = $("#intro2").position().top - top;
        var section4 = $("#intro3").position().top - top;
        var section5 = $("#intro4").position().top - top;
        if(x > section2){
          $("#intro1 ._right").addClass("go");
          $("#intro1 ._left").addClass("go");
        }
        if(x > section3){
          $("#intro2 ._right").addClass("go");
          $("#intro2 ._left").addClass("go");
        }
        if(x > section4){
          $("#intro3 ._right").addClass("go");
          $("#intro3 ._left").addClass("go");
        }
        if(x > section5){
          $("#intro4 ._right").addClass("go");
          $("#intro4 ._left").addClass("go");
        }
      }
      if($('body').hasClass('tienich'))
      {
        var section2 = $("#section6").position().top - top;
        if(x > section2){
          $("#section6 ._right").addClass("go");
          $("#section6 ._left").addClass("go");
        }
      }
      if($('body').hasClass('contact'))
      {
        var section2 = $("#contact1").position().top - top;
        if(x > section2){
          $("#contact1 ._right").addClass("go");
          $("#contact1 ._left").addClass("go");
        }
      }
      if($('body').hasClass('position'))
      {
        var section2 = $("#position1").position().top - top;
        var section3 = $("#position2").position().top - top;
    
        if(x > section2){
          $("#position1 ._right").addClass("go");
          $("#position1 ._left").addClass("go");
        }
        if(x > section3){
          $("#position2 ._right").addClass("go");
          $("#position2 ._left").addClass("go");
        }
      }
      if($('body').hasClass('quihoach'))
      {
        var section2 = $("#quihoach").position().top - top;
        if(x > section2){
          $("#quihoach ._right").addClass("go");
          $("#quihoach ._left").addClass("go");
        }
      }
      if($('body').hasClass('sanpham'))
      {
        var section2 = $("#section5").position().top - top;
        var section3 = $("#sp1").position().top - top;
        var section4 = $("#sp2").position().top - top;
        var section5 = $("#sp3").position().top - top;
        var section6 = $("#sp4").position().top - top;
        var section7 = $("#sp5").position().top - top;
        var section8 = $("#sp6").position().top - top;
        if(x > section2){
          $("#section5 ._right").addClass("go");
          $("#section5 ._left").addClass("go");
        }
        if(x > section3){
          $("#sp1 ._right").addClass("go");
          $("#sp1 ._left").addClass("go");
        }
        if(x > section4){
          $("#sp2 ._right").addClass("go");
          $("#sp2 ._left").addClass("go");
        }
        if(x > section5){
          $("#sp3 ._right").addClass("go");
          $("#sp3 ._left").addClass("go");
        }
        if(x > section6){
          $("#sp4 ._right").addClass("go");
          $("#sp4 ._left").addClass("go");
        }
        if(x > section7){
          $("#sp5 ._right").addClass("go");
          $("#sp5 ._left").addClass("go");
        }
        if(x > section8){
          $("#sp6 ._right").addClass("go");
          $("#sp6 ._left").addClass("go");
        }
      }
      if($('body').hasClass('tiendo'))
      {
        var section2 = $("#tt").position().top - top;
        if(x > section2){
          $("#tt ._right").addClass("go");
          $("#tt ._left").addClass("go");
        }
      }
    });
  }
  $("#section6 .tab li").on('click',function(){
    $("#section6 .tab li").removeClass("active");
    $(this).addClass("active");
  });
  $('#top').on('click',function() {
    $("html, body").animate({
			scrollTop: 0
		}, "fast");
  });
  if(width < 1264){
    $('.owl-carousel').owlCarousel({
      nav:false,
      dots: true,
      items: 1
  })
  }
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});
})(jQuery);

