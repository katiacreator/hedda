console.log('this is connected')

//to append html markup
const mainContent = document.querySelector("#content");
//console.log("mainContent: ", mainContent);

/* OTHER VARIABLES */
let hourEl;
let minEl
let timeLeft = ?;
let timerIntervalId;
let timeOutId;

/****************** */ //HTML Template Literal to append to content*********************** */
let markup = `
<button id="startBtn" class="btn">START</button>
</section>`;
mainContent.innerHTML = markup;

const startBtn = document.querySelector("#startBtn");
/* EVENT LISTENERS */
//This starts the entire quiz process with clicking the start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  //console.log("has been clicked");
  showQuestion(questionNum); //function will append first question
}

mainContent.innerHTML = markup;
  timerEl = document.querySelector("#timer");
  questionTimer();
  choiceABtn = document.querySelector(".choiceA");
  choiceABtn.addEventListener("click", (e) => {
    if (timerIntervalId || timeOutId) {
      clearInterval(timerIntervalId);
      clearTimeout(timeOutId);
      evaluateAnswerGiven(e);
    }
  });

  //Timer Function-run this every 15 seconds or after each choice is clicked
function questionTimer() {
  //setInterval for a tick
  timeLeft = 15;
  // if (timerIntervalId) {
  //   clearInterval(timerIntervalId)
  // }
  timerIntervalId = setInterval(function () {
    timerEl.textContent = `Time Left:${timeLeft}`;
    timeLeft -= 1;
  }, 1000);
  //setInterval

  timeOutId = setTimeout(function () {
    //console.log("setTimeout function is bein run")
    clearInterval(timerIntervalId);
    //add play ticking sound
    if (timeLeft === 0) {
      timerEl.textContent = `Time Left:${0}`;
      score;
      console.log("score: ", score);
      setNextQuestion();
    }
  }, 15500);
}


