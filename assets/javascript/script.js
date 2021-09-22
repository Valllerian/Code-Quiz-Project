var timerElement = document.querySelector("#timer");
var startButton = document.querySelector
("#start-button");
var section = document.querySelector("#section");
var footer = document.querySelector("footer");
var questionSection = document.querySelector("#questionSection");
var questionEl = document.querySelector("#questionText");
var answerEl = document.querySelector("#answer");
var promptEl = document.querySelector("#prompt");

// Global var to keep track of score
var score = 0;

// Global var for timer seconds
var timer = 90;

// setting a variable with questions and answers
var currentQuestion = 0


const questions = [
    firstQuestion = {
        question : "1)What is JavaScript?",
        answer : [ "A currency;", "A browser;", "A football team;","A scripting language." ],
        correctAnswer : 3
    },

    secondQuestion = {
        question : "2)What are three ways to declare a variable in JavaScript?",
        answer : [ "var, let , const;", " if, else, for;", "var, iab, le;","var(), var {}, var <>." ],
        correctAnswer : 0
    },

    thirdQuestion = {
        question : "3)A JavaScript string is normally written inside what symbols?",
        answer : [ "Quotes;", "Brackets;", "Parenthesis;","Dots." ],
        correctAnswer : 0
    },

    fourthQuestion = {
        question : "4)Can you store multiple values in JavaScript arrays?",
        answer : [ "Yes;", "No."],
        correctAnswer : 0
    },

    fifthQuestion = {
        question : "5)What is not a condition statement in JavaScript?",
        answer : [ "If;", "Who;", "Else;","Else if;"],
        correctAnswer : 1
    },
]

function answersButtons(e){
    if(e.target.matches("button")){
        e.preventDefault(); 
        //everytime a button is clicked check if they reached the end of questions
        if (currentQuestion === questions.length-1){
            results();
        }
        //console.log(e.target.parentElement.dataIndex);
        var index = parseInt(e.target.parentElement.dataIndex)
        // console.log(index);
        checkAnswer(index);
        removeChildren(answerEl);
        currentQuestion++;
        showQuestion();        
    }
}

function results(){
    questionSection.textContent = "Your Score: " + timer;
    timerElement.setAttribute("style", "display:none;");

}

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


function checkAnswer(index){
    if(index === questions[currentQuestion].correctAnswer){
        promptEl.style.opacity = 1;
        promptEl.textContent = "Corret!";
        score++; 
    }
    else{
        promptEl.style.opacity = 1;
        promptEl.textContent = "Wrong!";
        timer = timer - 30;
        //console.log(totalSeconds);
    }
window.setTimeout("promptEl.style.opacity = 0;", 1000);
}



// Main function that triggers displaying questions\hiding greeting text and starts timer
function main() {
    display();
    startTimer();
    showQuestion();
    
}

// Timer function
function startTimer() {
    var timerCount = setInterval(function () {
        timer--;
      timerElement.textContent = timer;
  
      if (timer === 0 || timer <= 0) {
        clearInterval(timerCount);
        results();
      }
    }, 1000);
  }

//   Uses the array of questions and displays each question with answers (answers are buttons)
function showQuestion(){
    questionEl.textContent = questions[currentQuestion].question;
    for(i = 0; i < questions[currentQuestion].answer.length; i++){
        var li = document.createElement("li")
        li.innerHTML = "<button>" + questions[currentQuestion].answer[i] +"</button>";
        li.dataIndex = i;
        answerEl.append(li);
        
}
}



//   Hides main text after start button is clicked and starts displaying questions and footer
function display(){
    section.setAttribute("style", "display:none;");
    footer.setAttribute("style", "display:block;");
  }

answerEl.addEventListener("click",answersButtons);
  // event listener to start button to call  function on click
startButton.addEventListener("click", main);
