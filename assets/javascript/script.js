var timerElement = document.querySelector("#timer");
var startButton = document.querySelector
("#start-button");
var section = document.querySelector("#section");
var footer = document.querySelector("footer");
var questionSection = document.querySelector("#questionSection");
var questionEl = document.querySelector("#questionText");
var answerEl = document.querySelector("#answer");
var promptEl = document.querySelector("#prompt");
var form = document.querySelector("#form");
var submit = document.querySelector("#submitButton");
var scoreValue = [];
// var scoreName = document.querySelector("#username");
var username = "";
var highScores = [];





// Global var for timer seconds
var timer = 90;

// setting a variable with questions and answers
var currentQuestion = 0

// setting an array with Quiz questions\answers
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

// Timer function
function startTimer() {
    var timerCount = setInterval(function () {
        timer--;
      timerElement.textContent = timer;
      if (timer === 0 || timer <= 0) {
        //   making sure that points dont go to negative numbers
        timer = 0;
        clearInterval(timerCount);
        results();
      }
    }, 1000);
  }

  //   Uses the array of questions and displays each question with answers (answers are buttons)
function showQuestion(){
    questionEl.textContent = questions[currentQuestion].question;
    for(i = 0; i < questions[currentQuestion].answer.length; i++){
        var li = document.createElement("li");
        li.innerHTML = "<button>" + questions[currentQuestion].answer[i] +"</button>";
        li.dataIndex = i;
        answerEl.append(li);   
}
}


function answersButtons(e){
    if(e.target.matches("button")){
        e.preventDefault(); 
        //checking if the user has answered all the questions
        if (currentQuestion === questions.length-1){
            results();
        }
        else {
        var index = parseInt(e.target.parentElement.dataIndex);
        checkAnswer(index);
        removeChildren(answerEl);
        currentQuestion++;
        showQuestion();   
    }     
    }
}

// function checks if users answer is correct 
function checkAnswer(index){
    if(index === questions[currentQuestion].correctAnswer){
        promptEl.style.opacity = 1;
        promptEl.textContent = "You are correct!";
    }
    else{
        promptEl.style.opacity = 1;
        promptEl.textContent = "You are wrong!";
        timer = timer - 30;
        
    }
window.setTimeout("promptEl.style.opacity = 0;", 1000);
}

// removes answer buttons before showing the new list
function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//shows users score on the page
function results(){
    if (timer >= 2){
    questionSection.textContent = "You passed! Your Score: " + timer + " points.";
    
    }
    if ( timer == 1) {
    questionSection.textContent = "You passed! Your Score: " + timer + " point.";
    var scoreValue = {
        name: username,
        score: timer,
      };
    // localStorage.setItem("scoreValue", JSON.stringify(scoreValue));
    } 
    if (timer == 0 ){
    questionSection.textContent = "You failed! Your Score: " + timer + " points.";
    }
    username = prompt("Enter your username!");
    alert("Thank you, your score is saved!");
    var scoreValue = {
        name: username,
        score: timer,
      };
    localStorage.setItem("scoreValue", JSON.stringify(scoreValue));
    timerElement.setAttribute("style", "display:none;");
    form.setAttribute("style", "display:block;");

    
}

// submit.addEventListener("click", function (event){
//     event.preventDefault;
//     saveScore();
// });
    

// submit.addEventListener("click", saveScore);
  

// function saveScore() { 
//     var scoreValue = {
//       name: username.value,
//       score: score,
//     };
//     localStorage.setItem("scoreValue", JSON.stringify(scoreValue));
//   }

// Main function that triggers displaying questions\hiding greeting text and starts timer
function main() {
    // username = prompt("Enter your username!");
    // alert("Thank you and good luck!");
    display();
    startTimer();
    showQuestion();
    
}


//   Hides main text after start button is clicked and starts displaying questions and footer
function display(){
    section.setAttribute("style", "display:none;");
    footer.setAttribute("style", "display:block;");
  }


// event listener to call the function for answer check
answerEl.addEventListener("click",answersButtons);
// event listener to start button to call  function on click
startButton.addEventListener("click", main);
