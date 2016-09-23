'use-strict';

$(document).ready(function() {

  var maxLength = 140;
  $('#text').on('input', function() {
    var length = $(this).val().length;
    length = maxLength - length;
    $('#counter').text(length);
    if (length < 0) {
      $('#counter').addClass("limiter");
      $('#counter').replaceWith('<span class="counter limiter" id="counter">TOO LONG</span>');
    } else if (length <= 5) {
      $('#counter').addClass("almost");
    } else if (length > 0) {
      $('#counter').removeClass("limiter");
      $('#counter').removeClass("almost");
    }
  });

//   $("form").submit(function(event) {
//     event.preventDefault();
//     var inputLength = $(this.text).val().length;
//     if (inputLength > 140) {
//
//     } else if (inputLength === 0 || inputLength === "" || inputLength === null) {
//     }
// });

});
