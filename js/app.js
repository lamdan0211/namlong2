(function($) {
  'use strict';
  // initialize fullPage
  $('#fullpage').fullpage({
    navigation: false,
    onLeave: function(index, nextIndex, direction) {
      // first animation
      if( index == 1 ) { 
        $('#section2 .img').addClass('animate__fadeInLeft animate__delay-1s');
        $('#section2 .ctleft').addClass('animate__fadeInRight animate__delay-2s');
      }
      if( index == 2 ) { 
        $('#section3 .img').addClass('animate__fadeInRight animate__delay-1s');
        $('#section3 .ctright').addClass('animate__fadeInLeft animate__delay-2s');
      }
    }
  });
})(jQuery);
