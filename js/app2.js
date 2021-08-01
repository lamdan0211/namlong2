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
})(jQuery);
