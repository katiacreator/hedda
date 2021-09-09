console.log("this is connected");

/*---------------------------- Variables (state) ----------------------------*/
let startBtnId;
let stopBtnId;
let resetBtnId;

let seconds;
let minutes;
let hours;
let timer;

let timerEl;
let hourEl;
let minuteEl;
let secondEl;

hourEl = document.querySelector("#hour");
console.log("hourEl: ", hourEl);
hours = parseInt(hourEl.innerHTML);
console.log("hours: ", hours); //gives the numeric hour value to countdown from
minuteEl = document.querySelector("#minute");
minutes = parseInt(minuteEl.innerHTML); //gives the numeric minute value to countdown from
console.log("minutes: ", minutes);
secondEl = document.querySelector("#second");
seconds = parseInt(secondEl.innerHTML); //gives the numeric minute value to countdown from
console.log('seconds: ', seconds);


/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const pauseBtn = document.querySelector(".pause");


/*----------------------------- Event Listeners -----------------------------*/

startBtn.addEventListener("click", (e) => {
  handleStart(e);
});

stopBtn.addEventListener("click", (e) => {
  stopSound(e);
  console.log('stop sound clicked')
});

resetBtn.addEventListener("click", (e) => {
  handleReset(e);
});
pauseBtn.addEventListener("click", (e) => {
  handlePause(e);
});


/*-------------------------------- Functions --------------------------------*/
// once clicked pause and reset show
function startTimer() {
  console.log("start timer", startBtnId);
  timer = setInterval(function () {
    countdown()
    displayTime()
    console.log(hours, minutes, seconds);
  }, 1000);
}

//only this button shows, once clicked then start and pause show
function pauseTimer(){
  console.log('pause timer clicked', pauseBtnId)
  hours = parseInt(hourEl.innerHTML);
  console.log('hours: ', hours);
  minutes = parseInt(minuteEl.innerHTML); //gives the numeric minute value to countdown from
  seconds = parseInt(secondEl.innerHTML); 
  clearInterval(timer)
}

//only shows when timer runs out on its own, once clicked button is hidden only reset shows
function stopSound() {
  console.log("stop sound", stopBtnId);
  
}



function countdown(){
  if(hours == 0 && minutes == 0 && seconds == 0){
      hours = 00;
      minutes = 00;
      seconds = 00;
  } else if(seconds != 0){
      seconds--;
  } else if(minutes != 0 && seconds == 0){
      seconds = 59;
      minutes--;
  } else if(hours != 0 && minutes == 0){
      minutes = 60;
      hours--;
  }
  return;
}

function displayTime(){
  if (hours <= 0) {
    hourEl.textContent = 00
  } else {
    hourEl.textContent = `${hours}`
  }
  if (minutes <= 0) {
    minuteEl.textContent = 00
  } else {
    minuteEl.textContent = `${minutes}`
  }
  if (seconds <= 0) {
    secondEl.textContent = 00
  } else {
    secondEl.textContent = `${seconds}`
  }
}
// function convertToSeconds()
function handleStart(e) {
  startBtnId = parseInt(e.target.id);
  startTimer();
  //console.log(e.target.id, startBtnId)//rendered 28 which matches task.id 28
}

function handleStop(e) {
  stopBtnId = parseInt(e.target.id);
  stopSound();
}
function handlePause(e){
  pauseBtnId = parseInt(e.target.id)
  pauseTimer()
}

