// var $entrytext = $('#entrytext');
// var $counter = $('#counter');
//
// console.log("LOADING CHAR COUNTER");
//
// function $(query) {
//   return document.querySelector(query);
// }
//
// function $$(query) {
//   return document.querySelectorAll(query);
// }
//
// $entrytext.addEventListener('input', function(ev) {
//     $counter.innerText = 140 - this.value.length;
//
// });
//

'use-strict';

$(document).ready(function() {
  var maxLength = 140;
  $('#entrytext').on('input', function() {
    var length = $(this).val().length;
    console.log(length)
    var length = maxLength - length;
    $('#counter').text(length);
    if (length < 0) {
      $('#counter').addClass("limiter");
    } else if (length > 0) {
      $('#counter').removeClass("limiter");
    }
  });
});
