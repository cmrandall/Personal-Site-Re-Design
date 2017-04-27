/*   Header animation    */


document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.intro', {
        strings: ["Charles Randall <br> Front-End Developer"],
        typeSpeed: 0
      });
  });
  $(document).ready(function(){
    $("#modal").hide(0).delay(500).fadeIn(2000)
});

/*    Skillset animation */

var $animation_elements = $('.animated');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
  
        $.each($element, function(){
            $(".left").addClass("bounceInLeft");
            $(".right").addClass("bounceInRight");
        });
    } else {
      $element.removeClass('in-view bounceInLeft bounceInRight');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');