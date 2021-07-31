(function($) {
  'use strict';
  // initialize fullPage
  $('#fullpage').fullpage({
    navigation: false,
    onLeave: function(index, nextIndex, direction) {
      // first animation
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
    }
  });
})(jQuery);
