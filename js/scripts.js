$(function() {

/* Portfolio Section*/

/* Photography */

  $('#photographyDiv').animate({
  width: '0px' // no width
  }, 1000, function() {
      $(this).hide();
  });

  var waypoint = new Waypoint({
    element: document.getElementById('portfolio'),
    handler: function(direction) {
      console.log("fuck");
      // Show and slide back open
      $('#photographyDiv').show().animate({
          width: '100%' // full width in pixels
      }, 1000);
    },
    offset: -10
  })


});
