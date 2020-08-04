$(document).ready(function (){
// add current date to header
var myCurrentDay = moment().format('MMMM Do YYYY');

let $dateHeading = $('#currentDay');
  $dateHeading.text(myCurrentDay);

//   save data written in text area with save button and store locally
$('.saveBtn').on('click', function(){

    var userInput = $(this).siblings('.description').val();

    var time = $(this).parent().attr('id');

    localStorage.setItem(time, userInput)
});
// compare time of day to row on calendar
function timeUpdater () {
    var currentHour = moment().hours();
    console.log (currentHour);
   
    $('.time-block').each(function(){
        var userHour = parseInt($(this).attr('id').split('-')[1]);
        console.log (userHour);

    // change colors of rows IF they are before the current time of day
        if (userHour < currentHour) {
           $(this).addClass('past');
        }

    // change color of row ELSE IF  is the current hour of the day
        else if (userHour > currentHour) {
             $(this).addClass('future');
        }

     // ELse keep colors same.
        else {
            $(this).addClass('present');
        }
    });

}
timeUpdater();

// setup interval for time updatter to update every hour
setInterval(timeUpdater, 60*60*1000);

// load saved data from local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
 


});