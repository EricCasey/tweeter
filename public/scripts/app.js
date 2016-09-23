function createTweetElement(tweet, index) {
  var name = tweet.user.name;
  var imgSrc = tweet.user.avatars.small
  var content = tweet.content.text
  var handle = tweet.user.handle;
  var preDate = tweet.created_at;

  var html = `<article>
          <header>
            <img src="${imgSrc}">
            <h2>
            ${name}
            </h2>
            <p>
            ${handle}
            </p>
          </header>
          <p class=\'tweetText\'>
            ${content}
          </p>
          <footer>
            ${timeSince(preDate)}
          </footer>
        </article>`;
  return $('#tweets-container').append(html);
};

function timeSince(pre) {
  var result = Date.now() - pre;
  result = result / 1000;
  var minutes = result / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var weeks = days / 7;

  if (minutes < 5) {
    return `a few moments ago`
  } else if (minutes < 59) {
    return `${Math.floor(minutes)} minute(s) ago`
  } else if (hours < 24) {
    return `${Math.floor(hours)} hour(s) ago`
  } else if (days < 7) {
    return `${Math.floor(days)} day(s) ago`
  } else if (weeks > 1) {
    return `${Math.floor(weeks)} week(s) ago`
  }
}

function renderTweets(tweets) {
  $('#tweets-container').empty();
  tweets.forEach(createTweetElement);
  $('#form').value = null;
}

$(document).ready(function() {

  function loadTweets() {
    $.ajax({
      'url': '/tweets',
      'method': 'GET',
      'dataType': 'json',
      'success': function(data2) {
        renderTweets(data2);
      }
    });
  };
  loadTweets();

  $('#composeButton').click(function() {
    $('.new-tweet').slideToggle("slow", function() {
      const input = document.getElementById('text');
      input.focus();
      input.select();
    })
    $('#gif').slideToggle("slow", function() {
      return
    })
  })

  $("form").submit(function(event2) {
    event.preventDefault();
    req_body = {};
    $(this).serializeArray().forEach((field) => {
      req_body[field.name] = field.value;
    });


        var inputLength = $(this.text).val().length;
        if (inputLength < 140 && inputLength > 0) {
          $.ajax({
            'url': '/tweets',
            'method': 'POST',
            'dataType': 'json',
            'data': req_body,
            success: loadTweets,
            error: function(err) {
              console.log(err)
            }
          });
        } else {
          alert("too long");
        }




  });


});
