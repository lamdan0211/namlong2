(function($) {
  'use strict';
  // initialize fullPage
  var width = $(window).width();
  var height = $(window).height();
  var top = 200;
  if(width > 1264)
  {
    $("#intro1").css("height", height);
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
    });
    $("._left").removeClass('animate__animated animate__fadeInLeft delay-250');
    $("._right").removeClass('animate__animated animate__fadeInRight delay-250');
  }
})(jQuery);
