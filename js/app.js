

(function($) {
  var tienich = $(".tienich-nl .content");
  tienich.owlCarousel({
      center: true,
      items: 2,
      loop: true,
      nav: true,
      autoplay: true,
      responsive: {
			0: {
				items: 1
			},
			1000: {
				items: 3
			},
			1400: {
				items: 4
			}
		}
  });
  'use strict';
  // initialize fullPage
  var width = $(window).width();
  var height = $(window).height();
  var top = 160;
  if(width > 1264)
  {
    $( "#section5 .row.bg .item " ).hover(function() {
      var imageUrl  = $(this).find(".text").attr("data-bg");
      $('#section5 .row.bg').attr('style', 'background-image: url("' + imageUrl +'")');
    });
    $( "#intro4 .item " ).hover(function() {
      $( "#intro4 .item " ).removeClass("active");
      $( "#intro4 .item " ).attr('style', '');
      var imageUrl  = $(this).find(".inner").attr("data-bg");
      $(this).attr('style', 'background: url("' + imageUrl +'")');
      $(this).addClass("active");
    });
    // Page Home
    if($("body").hasClass("home")){
      $("#section1").css("height", height);
      $("#section4").css("height", height); 
    }
    else{
      $("#header").addClass("active animate__animated animate__fadeInDown delay-250 go");
    }
    var scrollPos = $(window).scrollTop();
    if(scrollPos == 0){
      // Page Contact
      if($('body').hasClass('contact'))
      {
        $("#contact1 ._right").addClass("go");
        $("#contact1 ._left").addClass("go");
      }
      // Page Intro
      if($('body').hasClass('intro'))
      {
        $("#intro1 ._right").addClass("go");
        $("#intro1 ._left").addClass("go");
      }
      // Page Qui hoach
      if($('body').hasClass('quihoach'))
      {
        $("#quihoach ._right").addClass("go");
        $("#quihoach ._left").addClass("go");
      }
      // Page San pham
      if($('body').hasClass('sanpham'))
      {
        $("#section5 ._right").addClass("go");
        $("#section5 ._left").addClass("go");
      }
      // Page thu  vien 
      if($('body').hasClass('thuvien'))
      {
        $(".s0 ._right").addClass("go");
        $(".s0 ._left").addClass("go");
      }
      // Page tien do
      if($('body').hasClass('tiendo'))
      {
        $("#tt ._right").addClass("go");
        $("#tt ._left").addClass("go");
      }
      // Page tien ich 
      if($('body').hasClass('tienich'))
      {
        $("#section6 ._right").addClass("go");
        $("#section6 ._left").addClass("go");
      }
      // Page vi tri
      if($('body').hasClass('position'))
      {
        $("#position1 ._right").addClass("go");
        $("#position1 ._left").addClass("go");
      }
      // Page tin tuc
      if($('body').hasClass('tintuc'))
      {
        $("#tt ._right").addClass("go");
          $("#tt ._left").addClass("go");
      }
    }
    // window scroll
    $(window).scroll(function() {
      var x = $(this).scrollTop(); 
      // Page Home
      if($('body').hasClass('home')){       
        var section2 = $("#section2").position().top - top;
        var section3 = $("#section3").position().top - top;
        var section4 = $("#section4").position().top - top;
        var section5 = $("#section5").position().top - top;
        var section6 = $("#section6").position().top - top;
        var section7 = $("#section7").position().top - top;
        var section8 = $("#section8").position().top - top;
        if(x  > section2)
        {
          $("#header").addClass("active animate__animated animate__fadeInDown delay-250 go");
        }
        else
        {
          $("#header").removeClass("active");
        }
        if(x< section3  && x > section2){
          $("#section2 ._right").addClass("go");
          $("#section2 ._left").addClass("go");
        }
        if(x< section4  && x > section3){
          $("#section3 ._right").addClass("go");
          $("#section3 ._left").addClass("go");
        }
        if(x< section5  && x > section4){
          $("#section4 ._right").addClass("go");
          $("#section4 ._left").addClass("go");
        }
        if(x < section6 && x > section5){
          $("#section5 ._right").addClass("go");
          $("#section5 ._left").addClass("go");
        }
        if(x < section7 && x > section6){
          $("#section6 ._right").addClass("go");
          $("#section6 ._left").addClass("go");
        }
        if(x < section8 && x > section7){
          $("#section7 ._right").addClass("go");
          $("#section7 ._left").addClass("go");
        }
        if(x > section8){
          $("#section8 ._right").addClass("go");
          $("#section8 ._left").addClass("go");
        }
      }
      // Page Intro
      if($('body').hasClass('intro'))
      {
        var section1 = $("#intro1").position().top - top;
        var section2 = $("#intro2").position().top - top;
        var section3 = $("#intro3").position().top - top;
        var section4 = $("#intro4").position().top - top;
        if(x < section2  && x  > section1 ){
          $("#intro1 ._right").addClass("go");
          $("#intro1 ._left").addClass("go");
        }
        if(x < section3  && x  > section2 ){
          $("#intro2 ._right").addClass("go");
          $("#intro2 ._left").addClass("go");
        }
        if(x < section4  && x  > section3 ){
          $("#intro3 ._right").addClass("go");
          $("#intro3 ._left").addClass("go");
        }
        if(x > section4){
          $("#intro4 ._right").addClass("go");
          $("#intro4 ._left").addClass("go");
        }
      }
      // Page Contact
      if($('body').hasClass('contact'))
      {
        var section1 = $("#contact1").position().top - top;
        if(x > section1){
          $("#contact1 ._right").addClass("go");
          $("#contact1 ._left").addClass("go");
        }
      }
      // Page Qui hoach
      if($('body').hasClass('quihoach'))
      {
        var section1 = $("#quihoach").position().top - top;
        if(x > section1){
          $("#quihoach ._right").addClass("go");
          $("#quihoach ._left").addClass("go");
        }
      }
      // Page  san  pham  
      if($('body').hasClass('sanpham'))
      {
        var section2 = $("#section5").position().top - top;
        var section3 = $("#sp1").position().top - top;
        var section4 = $("#sp2").position().top - top;
        var section5 = $("#sp3").position().top - top;
        var section6 = $("#sp4").position().top - top;
        var section7 = $("#sp5").position().top - top;
        var section8 = $("#sp6").position().top - top;
        if(x < section3  && x  > section2 ){
          $("#section5 ._right").addClass("go");
          $("#section5 ._left").addClass("go");
        }
        if(x < section4  && x  > section3 ){
          $("#sp1 ._right").addClass("go");
          $("#sp1 ._left").addClass("go");
        }
        if(x < section5  && x  > section4  ){
          $("#sp2 ._right").addClass("go");
          $("#sp2 ._left").addClass("go");
        }
        if(x < section6   && x  > section5  ){
          $("#sp3 ._right").addClass("go");
          $("#sp3 ._left").addClass("go");
        }
        if(x < section7   && x  > section6 ){
          $("#sp4 ._right").addClass("go");
          $("#sp4 ._left").addClass("go");
        }
        if(x < section8    && x  > section7 ){
          $("#sp5 ._right").addClass("go");
          $("#sp5 ._left").addClass("go");
        }
        if(x > section8){
          $("#sp6 ._right").addClass("go");
          $("#sp6 ._left").addClass("go");
        }
      }
      // Page thu  vien 
      if($('body').hasClass('thuvien'))
      {
        var section2 = $(".s0").position().top - top;
        var section3 = $(".s1").position().top - top;
        var section4 = $(".s2").position().top - top;
        if(x < section3    && x  > section2 ){
          $(".s0 ._right").addClass("go");
          $(".s0 ._left").addClass("go");
        }
        if(x < section4    && x  > section3 ){
          $(".s1 ._right").addClass("go");
          $(".s1 ._left").addClass("go");
        }
        if(x > section4){
          $(".s2 ._right").addClass("go");
          $(".s2 ._left").addClass("go");
        }
      }
      // Page tien do
      if($('body').hasClass('tiendo'))
      {
        var section2 = $("#tt").position().top - top;
        if(x > section2){
          $("#tt ._right").addClass("go");
          $("#tt ._left").addClass("go");
        }
      }
      // Page tien ich 
      if($('body').hasClass('tienich'))
      {
        var section2 = $("#section6").position().top - top;
        if(x > section2){
          $("#section6 ._right").addClass("go");
          $("#section6 ._left").addClass("go");
        }
      }
      // Page vi tri
      if($('body').hasClass('position'))
      {
        var section2 = $("#position1").position().top - top;
        var section3 = $("#position2").position().top - top;
        if(x < section3    && x  > section2 ){
          $("#position1 ._right").addClass("go");
          $("#position1 ._left").addClass("go");
        }
        if(x > section3){
          $("#position2 ._right").addClass("go");
          $("#position2 ._left").addClass("go");
        }
      }
      // Page tin tuc
      if($('body').hasClass('tintuc'))
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
    });
    $("._right").removeClass('animate__animated animate__fadeInRight delay-250');
    $("._left").removeClass('animate__animated animate__fadeInLeft delay-250');

    $(window).scroll(function() {
      var x = $(this).scrollTop(); 
      var footer  = $("body").height() - ($("#footer").height() + $("#footer .form").height() + 100) ;
      console.log(footer);
      console.log(x);
      if(x  > footer)
      {
        $('#top img').attr('src','img/top2.png');
      }
      else
      {
        $('#top img').attr('src','img/top.png');
      }
    });
  }
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        },
        image: {
          titleSrc: function(item) {
             return item.el.find('img').attr('title');
          }
        }
    });
});
})(jQuery);

