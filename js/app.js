(function($) {
  'use strict';
  // initialize fullPage
  var width = $(window).width();
  if(width > 1279)
  {
    $('#fullpage').fullpage({
      menu: '#top',
      navigation: false,
      onLeave: function(index, nextIndex, direction) {
  
        if( index == 1 ) { 
          $('#section2 .img').addClass('animate__fadeInLeft delay-250 ');
          $('#section2 .ctleft').addClass('animate__fadeInRight delay-250');
        }
        if( index == 2 ) { 
          $('#section3 .img').addClass(' animate__fadeInRight delay-250');
          $('#section3 .ctright').addClass(' animate__fadeInLeft delay-250');
        }
        if( index == 3 ) { 
          $('#section4 .text h2').addClass('animate__fadeInRight delay-250');
          $('#section4 .text h3').addClass('animate__fadeInLeft delay-250');
        }
        if( index == 4 ) { 
          $('#section5 .t1').addClass('animate__fadeInRight delay-250');
          $('#section5 .t2').addClass('animate__fadeInLeft delay-250');
          $('#section5 .t3').addClass('animate__fadeInRight delay-250');
          $('#section5 .t4').addClass('animate__fadeInLeft delay-250');
        }
        if( index == 5 ) { 
          $('#section6 .ctright').addClass('animate__fadeInRight delay-250');
          $('#section6 .img').addClass('animate__fadeInLeft delay-250');
          $('#section6 .tab').addClass('animate__fadeInRight delay-250');
        }
        if( index == 6 ) { 
          $('#section7 .t1').addClass('animate__fadeInRight delay-250');
          $('#section7 .t2').addClass('animate__fadeInLeft delay-250');
          $('#section7 .t3').addClass('animate__fadeInRight delay-250');
          $('#section7 .t4').addClass('animate__fadeInLeft delay-250');
          $('#section7 .t5').addClass('animate__fadeInRight delay-250');
          $('#section7 .t6').addClass('animate__fadeInLeft delay-250');
          $('#section7 .ctleft').addClass('animate__fadeInRight delay-250');
        }
        if( index == 7 ) { 
          $('#section8 .t1').addClass('animate__fadeInRight delay-250');
          $('#section8 .t2').addClass('animate__fadeInLeft delay-250');
          $('#section8 .t3').addClass('animate__fadeInRight delay-250');
        }
        if(nextIndex == 2 || nextIndex == 3||nextIndex == 4||nextIndex == 5||nextIndex == 6||nextIndex == 7||nextIndex == 8||nextIndex == 9){
          $('#header').addClass('active');
        }
        if(nextIndex == 1)
        {
          $('#header').removeClass('active');
        }
      }
    });
  }
  $("#section6 .tab li").on('click',function(){
    $("#section6 .tab li").removeClass("active");
    $(this).addClass("active");
  });
  $('#top').on('click',function() {
    $("#fullpage").fullpage.moveTo(1);
  });
  if(width < 1279){
    $('.owl-carousel').owlCarousel({
      nav:false,
      dots: true,
      items: 1
  })
  }
})(jQuery);
