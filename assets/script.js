// Variables that may be needed
var startButton = document.getElementById("startBtn");
var highScore = document.getElementById("hsBtn");
var timerE1 = document.getElementById("timer");
var secondsLeft = 60;
var questionspace = document.querySelector(".question-space");

// var initials = querySelector(".initials");
var points = "";

var questions = [
    {
        Question: "What does CSS Stand for?",
        Answers: ["Cascading Style Sheet", "Commas, Squares, Syllables"],
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answers: ["Cascading Style Sheet", "Commas, Squares, Syllables"],
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answers: ["Cascading Style Sheet", "Commas, Squares, Syllables"],
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answers: ["Cascading Style Sheet", "Commas, Squares, Syllables"],
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answers: ["Cascading Style Sheet", "Commas, Squares, Syllables"],
        Correct:"Cascading Style Sheet"
    },
    
];
console.log(questions);


// function for the game
function playGame() {
setTime();
showQuestions();

}

// function for the timer and time subtracted and game over
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerE1.textContent = secondsLeft + " seconds left till game over.";

        if (secondsLeft === 0) {
            // stops quiz
            clearInterval(timerInterval);
            // call function to end game
            sendMessage();
        }
    }, 1000);
    console.log("setTime")
}

// function for game over
function sendMessage() {
    timerE1.textContent = "Game Over";
};

// function for questions
function showQuestions() {
    console.log("showQuestions")
    // compare to correct answer
    questionspace.innerHTML = "";

    var propmt = document.createElement("h3");
    propmt.textContent = questions.Questions;

    var firstAnswer = document.createElement("button");


}

// function for saving initials and score
// if finish questions then variable that holds score and then set highscore as keyvalue pair 
// highScore = {
//     initials: initials.value,
//     points: 1
// };

localStorage.setItem("highScore", JSON.stringify("highScore"));
// click hs button
// clear page and only show highscores
// grab from local storage

// function for startButton
startButton.addEventListener("click", playGame);