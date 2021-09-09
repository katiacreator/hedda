landingpagecover: Photo by <a href="https://unsplash.com/@vickyng?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Vicky Ng</a> on <a href="https://unsplash.com/s/photos/sourdough?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


let startBtnId;
let stopBtnId;
let resetBtnId;

let seconds;
let minutes;
let hours;
let interval;

let timerEl;
let hourEl;
let minuteEl;

// let totalTimeLeft;

// 


function startTimer(){
  console.log('start timer', startBtnId)
  hourEl = document.getElementById("hour");
  hours = parseInt(hourEl.innerHTML);
  minuteEl = document.getElementById("minute")
  minutes = parseInt(minuteEl.innerHTML);
  seconds = 1
  // totalTimeLeft = hours * 60 + minutes * 60
  //convert hours to minutes
  hoursLeft = Math.floor(minutes / 60)
  console.log('hoursLeft: ', hoursLeft);
  //converts minutes to seconds
  minutesLeft = Math.floor(seconds / 60)
  timerInterval = setInterval(function(){
    seconds--
    minutesLeft--
    hoursLeft--
    hourEl.innerHTML = hoursLeft
    minuteEl.innerHTML = minutesLeft
  }, 1000)
}

//PSEUDOCODE
//* START TIMER */
// start a timer based on the time inputs from the user
// let timerEl = document.getElementById("timer").innerHTML;
// console.log("timerEl : ", timerEl);
// the user will put in hour input and minutes input for standard baking times
// let hours = parseInt(document.getElementById("hour").innerHTML);
// let minutes = parseInt(document.getElementById("min").innerHTML);
// console.log("minutes: ", minutes);
// console.log("hours: ", hours);
// hours and minutes need to be converted to the same unit- seconds?
// let hours = Math.floor((1000 * 60 * 60 * 24) / (1000 * 60 * 60));
// let minutes = Math.floor((1000 * 60 * 60) / (1000 * 60));
// let seconds = Math.floor((1000 * 60) / 1000);
// html needs to show in real time the hour and minute input changing so append innerHTML?
//* PAUSE TIMER */
// the user needs to be able to pause (button will be dynamically rendered) the time and restart from the time they paused it
//once the timer complete they need to be able to stop the timer sound
//* STOP TIMER */
// once the stop button which will need to be dynamically rendered, the timer needs to be automatically reset and a notication that the task has been completed
//* RESET TIMER */
//maybe the user pressed the reset button for these timers
// whatever timer function I get going needs to be able to run for multiple tasks at once, this can be achieved by identifying it is a seperate dynamic element by id created on for loop?