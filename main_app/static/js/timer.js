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
const stopBtns = document.querySelectorAll('.stop')
const pauseBtns = document.querySelectorAll('.pause')
const resetBtns = document.querySelectorAll('.reset')


let starts = Array.from(startBtns)
let stops = Array.from(stopBtns)
let pauses = Array.from(pauseBtns)
let resets = Array.from(resetBtns)

/*----------------------------- Event Listeners -----------------------------*/
starts.forEach((startBtn) => {
  startBtn.addEventListener('click', (e) => {
    handleStart(e)
  })
})

stops.forEach((stopBtn) => {
  stopBtn.addEventListener('click', (e) => {
    handleStop(e)
  })
})

// pauses.forEach((pauseBtn) => {
//   pauseBtn.addEventListener('click', (e) => {
//     handlePause(e)
//   })
// })

// resets.forEach((resetBtn) => {
//   resetBtn.addEventListener('click', (e) => {
//     handleReset(e)
//   })
// })

/*-------------------------------- Functions --------------------------------*/
// once clicked pause and reset show
function startTimer(){
  console.log('start timer', startBtnId)
}

// //how do i unpause without resetting time?!!!!
// function pauseTimer(){
//   console.log('pause timer', pauseBtnId)
// }

//only shows when timer runs out on its own, once clicked button is hidden only reset shows
function stopTimer(){
  console.log('stop timer', stopBtnId)
}

// //only this button shows, once clicked then start and pause show
// function resetTimer(){
//   console.log('reset timer', resetBtnId)
// }

// function convertToSeconds()
function handleStart(e){
  startBtnId = parseInt(e.target.id)
  startTimer()
  //console.log(e.target.id, startBtnId)//rendered 28 which matches task.id 28
}

function handleStop(e){
  stopBtnId = parseInt(e.target.id)
  stopTimer()
}

// function handlePause(e){
//   pauseBtnId = parseInt(e.target.id)
//   pauseTimer()
// }
// function handleReset(e){
//   resetBtnId = parseInt(e.target.id)
//   resetTimer()
// }

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
