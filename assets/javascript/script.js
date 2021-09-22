var timerElement = document.querySelector("#timer");
var startButton = document.querySelector
("#start-button");
var section = document.querySelector("#section");
var footer = document.querySelector("footer");

// setting a variable with questions and answers
var questions = [
    firstQuestion = {
        question : "What is JavaScript?",
        answer : [ "A currency;", "A browser;", "A football team;","A scripting language." ],
        correctAnswer : 3
    },

    secondQuestion = {
        question : "What are three ways to declare a variable in JavaScript?",
        answer : [ "var, let , const;", " if, else, for;", "var, iab, le;","var(), var {}, var <>." ],
        correctAnswer : 0
    },

    thirdQuestion = {
        question : "A JavaScript string is normally written inside what symbols?",
        answer : [ "Quotes;", "Brackets;", "Parenthesis;","Dots." ],
        correctAnswer : 0
    },

    fourthQuestion = {
        question : "Can you store multiple values in JavaScript arrays?",
        answer : [ "Yes;", "No."],
        correctAnswer : 0
    },

    fifthQuestion = {
        question : "What is not a condition statement in JavaScript?",
        answer : [ "If;", "Who;", "Else;","Else if;"],
        correctAnswer : 1
    },
]

// Global var to keep track of score
var score = 0;

// Global var for timer seconds
var timer = 90;

// Main function that triggers displaying questions\hiding greeting text and starts timer
function main() {
    display();
    startTimer();
    
}

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

//   Hides main text after start button is clicked and starts displaying questions and footer
function display(){
    section.setAttribute("style", "display:none;");
    footer.setAttribute("style", "display:block;");
  }


  // event listener to start button to call  function on click
startButton.addEventListener("click", main);
