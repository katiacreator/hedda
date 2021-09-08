console.log("this is connected");
/*---------------------------- Variables (state) ----------------------------*/
let startBtnId;
let seconds;
let minutes;
let hours;
let totalTimeLeft;
let timerEl;
let hourEl;
let minuteEl;

/*------------------------ Cached Element References ------------------------*/
const startBtns = document.querySelectorAll('.start')
// console.log('startBtns: ', startBtns);

let starts = Array.from(startBtns)
// console.log('starts: ', starts);
// const pauseBtns = document.querySelectorAll('.pause')
// const resetBtns = document.querySelectorAll('.reset')
// const stopBtns = document.querySelectorAll('.stop')
// console.log('pauseBtns: ', pauseBtns);
// console.log('resetBtns: ', resetBtns);
// console.log('stopBtns: ', stopBtns);

/*----------------------------- Event Listeners -----------------------------*/
starts.forEach((startBtn, id) => {
  // console.log(`startBtn${id}`)
  startBtn.addEventListener('click', (e) => {
    handleClick(e)
  })
})

/*-------------------------------- Functions --------------------------------*/
// function startTime()
// function pauseTime()
// function resetTime()
// function stopTime()
// function convertToSeconds()
function handleClick(e){
  console.log(e.target.id)//rendered 28 which matches id 28
}
// //* updated code starts here *//
// let timerEl = document.getElementById('timer').innerHTML;
// let hours = parseInt(document.getElementById('hour').innerHTML);
// let minutes = parseInt(document.getElementById('min').innerHTML);
// console.log('minutes: ', minutes);
// console.log('hours: ', hours);
// console.log('timerEl : ', timerEl );
// let seconds;
// console.log('seconds: ', seconds);

// secondsLeft = () => hours * 60 + minutes * 60
// seconds = secondsLeft()
// console.log(seconds)
// let minsLeft;
// let hourMin;

// minsLeft = Math.fround(seconds / 60)
// console.log('minsLeft: ', minsLeft);

// const countdown = setInterval(function() {
//   // seconds--;
//   secondsLeft = Math.fround(minutes * 60)
//   console.log('secondsLeft: ', secondsLeft);
//   hoursLeft = Math.fround(minutes / 60)
//   console.log('hoursLeft: ', hoursLeft);
//   minsLeft--
//   hourLeft--
//   if (minsLeft <= 0 && hoursLeft <= 0) clearInterval(countdown);
// }, 10000);

// console.log('countdown: ', countdown);
// console.log(timerEl)

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

// let timerIntervalId;
// let timeOutId;

// function startTimer(){
//   timeLeft = 15;
//   timerIntervalId = setInterval(function () {
//     timerEl.textContent = `Time Left:${timeLeft}`;
//     timeLeft -= 1;
//   }, 1000);
// }
