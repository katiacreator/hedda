/*---------------------------- Variables (state) ----------------------------*/

// const dough = new Audio("./sounds/sounds_doh.mp3");
// main_app/static/sounds/sounds_doh.mp3

let startBtnId;
let stopBtnId;
let resetBtnId;
let pauseBtnId;

let seconds;
let minutes;
let hours;
let timer;
// let interval = 0

let countdownEl;
let hourEl;
let minuteEl;
let secondEl;

hourEl = document.querySelector("#hour");
hours = parseInt(hourEl.innerHTML);
console.log("hours: ", hours); //gives the numeric hour value to countdown from
minuteEl = document.querySelector("#minute");
minutes = parseInt(minuteEl.innerHTML); //gives the numeric minute value to countdown from
console.log("minutes: ", minutes);
secondEl = document.querySelector("#second");
seconds = parseInt(secondEl.innerHTML); //gives the numeric minute value to countdown from
console.log("seconds: ", seconds);

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const pauseBtn = document.querySelector(".pause");

/*----------------------------- Event Listeners -----------------------------*/

startBtn.addEventListener("click", (e) => {
  handleStart(e);
});

stopBtn.addEventListener("click", (e) => {
  handleStop(e);
  console.log("stop clicked");
});

pauseBtn.addEventListener("click", (e) => {
  handlePause(e);
});

/*-------------------------------- Functions --------------------------------*/

// once clicked pause and reset show
function startTimer() {
  timer = setInterval(function () {
    countdown(); //*clearInterval is called on this function*//
    displayTime();
    console.log(hours, minutes, seconds);
  }, 1000);
}

//only this button shows, once clicked then start and pause show
function pauseTimer() {
  hours = parseInt(hourEl.innerHTML);
  minutes = parseInt(minuteEl.innerHTML);
  seconds = parseInt(secondEl.innerHTML);
  clearInterval(timer);
}

function countdown() {
  if (hours == 0 && minutes == 0 && seconds == 0) {
   
    clearInterval(timer);
  } else if (seconds != 0) {
    seconds--;
  } else if (minutes != 0 && seconds == 0) {
    seconds = 59;
    minutes--;
  } else if (hours != 0 && minutes == 0) {
    minutes = 60;
    hours--;
  }
  return;
}

//condense this into one big if using && ?
function displayTime() {
  if (hours <= 0) {
    hourEl.textContent = 00;
  } else {
    hourEl.textContent = `${hours}`;
  }
  if (minutes <= 0) {
    minuteEl.textContent = 00;
  } else {
    minuteEl.textContent = `${minutes}`;
  }
  if (seconds <= 0) {
    secondEl.textContent = 00;
  } else {
    secondEl.textContent = `${seconds}`;
  }
}

function stopTimer() {
  hours = 00;
  minutes = 00;
  seconds = 00;
  console.log("stopTimer is being called", hours, minutes, seconds);
}

function handleStart(e) {
  startBtnId = parseInt(e.target.id);
  startTimer();
  // dough.volume = 0.07;
  // dough.play();
  //console.log(e.target.id, startBtnId)//rendered 28 which matches task.id 28
}

function handleStop(e) {
  stopBtnId = parseInt(e.target.id);
  stopTimer();
}

function handlePause(e) {
  pauseBtnId = parseInt(e.target.id);
  pauseTimer();
}

//only shows when timer runs out on its own, once clicked button is hidden only reset shows
// function playSound(e) {
//   console.log("play sound", e.target.id);
// }

// function stopSound(e) {
//   console.log("stop sound", stopBtnId);
// }
