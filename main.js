
// add current date to header
var currentTime = moment().format('h:mm:ss a');
var myCurrentDay = moment().format('MMMM Do YYYY');

let $dateHeading = $('#currentDay');
  $dateHeading.text(myCurrentDay);

//   save data written in text area with save button

// change colors of rows if they are before the current time of day

// change color of row if it is the current hour of the day

// else keep colors same.