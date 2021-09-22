var timerElement = document.querySelector("#timer");
var startButton = document.querySelector
("#start-button");
var section = document.querySelector("#section");
var footer = document.querySelector("footer");

// Global var to keep track of score
var score = 0;

// Global var for timer seconds
var timer = 90;

// Timer function
function main() {
    display();
    startTimer();
    
}

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

//   Hides main text after start button is clicked and starts displaying questions
function display(){
    section.setAttribute("style", "display:none;");
    footer.setAttribute("style", "display:block;");
  }


  // event listener to start button to call  function on click
startButton.addEventListener("click", main);
