function timeSince (pre) {
  var result = Date.now() - pre;
  result = result / 1000;
  var minutes = result / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var weeks = days / 7;
  if (minutes < 30) {
    console.log(`a few moments ago`);
  } else if (minutes < 59) {
    console.log(`${Math.floor(minutes)} minute(s) ago`);
  } else if (hours < 24) {
    console.log(`${Math.floor(hours)} hour(s) ago`);
  } else if (days < 7) {
    console.log(`${Math.floor(days)} day(s) ago`);
  } else if (weeks > 1) {
    return `${Math.floor(weeks)} week(s) ago`);
  }
}
