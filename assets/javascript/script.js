var timerElement = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");

// Global var to keep track of score
var score = 0;

// Global var for timer seconds
var timer = 90;

// Timer function
function startTimer() {
    var timerCount = setInterval(function () {
        timer--;
      timerElement.textContent = timer;
  
      if (timer === 0) {
        clearInterval(timerCount);
        // display score
      }
      
    //   if (all the questions answered) {
    //     clearInterval(timerCount);
    //     // display score
    //   }
    }, 1000);
  }

  //  event listener to start button to call  function on click
startButton.addEventListener("click", startTimer);
