(function($) {
  'use strict';
  // initialize fullPage
  $('#fullpage').fullpage({
    anchors: ['section1','section2','section3','section4','section5','section6','section7','section8','section9'],
    menu: '#top',
    navigation: false,
    onLeave: function(index, nextIndex, direction) {

      if( index == 1 ) { 
        $('#section2 .img').addClass('animate__fadeInLeft animate__delay-1s');
        $('#section2 .ctleft').addClass('animate__fadeInRight animate__delay-1s');
      }
      if( index == 2 ) { 
        $('#section3 .img').addClass('animate__fadeInRight animate__delay-1s');
        $('#section3 .ctright').addClass('animate__fadeInLeft animate__delay-1s');
      }
      if( index == 3 ) { 
        $('#section4 .text h2').addClass('animate__flipInX animate__delay-1s');
        $('#section4 .text h3').addClass('animate__flipInX animate__delay-2s');
      }
      if( index == 4 ) { 
        $('#section5 .t1').addClass('animate__flipInX animate__delay-1s');
        $('#section5 .t2').addClass('animate__flipInX animate__delay-2s');
        $('#section5 .t3').addClass('animate__flipInX animate__delay-3s');
        $('#section5 .t4').addClass('animate__flipInX animate__delay-4s');
      }
      if( index == 5 ) { 
        $('#section6 .ctright').addClass('animate__fadeInLeft animate__delay-1s');
        $('#section6 .img').addClass('animate__fadeInRight animate__delay-1s');
        $('#section6 .tab').addClass('animate__lightSpeedInRight animate__delay-2s');
      }
      if( index == 6 ) { 
        $('#section7 .t1').addClass('animate__bounceIn animate__delay-1s');
        $('#section7 .t2').addClass('animate__bounceIn animate__delay-1s');
        $('#section7 .t3').addClass('animate__bounceIn animate__delay-2s');
        $('#section7 .t4').addClass('animate__bounceIn animate__delay-2s');
        $('#section7 .t5').addClass('animate__bounceIn animate__delay-3s');
        $('#section7 .t6').addClass('animate__bounceIn animate__delay-3s');
        $('#section7 .ctleft').addClass('animate__fadeInRight animate__delay-4s');
      }
      if( index == 7 ) { 
        $('#section8 .t1').addClass('animate__bounceIn animate__delay-1s');
        $('#section8 .t2').addClass('animate__bounceIn animate__delay-2s');
        $('#section8 .t3').addClass('animate__bounceIn animate__delay-3s');
      }
      if(nextIndex == 2 ){
        $('#header').addClass('active');
        $('#top').addClass('active');
      }
      if(nextIndex == 1)
      {
        $('#header').removeClass('active');
        $('#top').removeClass('active');
      }
    }
  });
  $("#section6 .tab li").click(function(e){
    $("#section6 .tab li").removeClass("active");
    $(this).addClass("active");
  });

})(jQuery);
