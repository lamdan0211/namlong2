(function($) {
  'use strict';
  // initialize fullPage
  var width = $(window).width();
  var height = $(window).height();
  if(width > 1264)
  {
    $("#intro1").css("height", height);
    $("#section1").css("height", height);
    $("#section4").css("height", height);
    $(window).scroll(function() {
      var x = $(this).scrollTop();
      if($('body').hasClass('home')){       
        var section2 = $("#section2").position().top - 150;
        var section3 = $("#section3").position().top - 150;
        var section4 = $("#section4").position().top - 150;
        var section5 = $("#section5").position().top - 150;
        var section6 = $("#section6").position().top - 150;
        var section7 = $("#section7").position().top - 150;
        var section8 = $("#section8").position().top - 150;
        if(x > section2){
          $("#header").addClass("active");
          $("#section2 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section2 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#header").removeClass("active");
          $("#section2 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section2 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section3){
          $("#section3 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section3 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#section3 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section3 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section4){
          $("#section4 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section4 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#section4 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section4 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section5){
          $("#section5 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section5 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#section5 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section5 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section6){
          $("#section6 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section6 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else 
        {
          $("#section6 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section6 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section7){
          $("#section7 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section7 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#section7 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section7 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
        if(x > section8){
          $("#section8 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#section8 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#section8 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#section8 ._left").removeClass("animate__fadeInLeft delay-250 ");
        }
      }
      if($('body').hasClass('intro'))
      {
        var section2 = $("#intro1").position().top - 150;
        if(x > section2){
          $("#intro1 ._right").addClass("animate__fadeInRight delay-250 ");
          $("#intro1 ._left").addClass("animate__fadeInLeft delay-250 ");
        }
        else
        {
          $("#intro1 ._right").removeClass("animate__fadeInRight delay-250 ");
          $("#intro1 ._left").removeClass("animate__fadeInLeft delay-250 ");
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
})(jQuery);
