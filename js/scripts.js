// transition effect on navbar //
$(window).scroll(function() {

  var nav = $('.navbar');
  var navPosition = nav.offset();

  if (navPosition.top > 10) {
    $('.navbar').addClass('navScroll');
  } else if (navPosition.top < 10) {
    $('.navbar').removeClass('navScroll');
  }
});
