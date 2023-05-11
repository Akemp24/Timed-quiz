// Variables that may be needed
var startButton = document.getElementById("startBtn");
var highScore = document.getElementById("hsBtn");
var timerE1 = document.getElementById("timer");
var secondsLeft = 60;
var rightAnswer = questions[questionIndex].Correct;
var score = 0;
// var initials = querySelector(".initials");
var initials;
var points = "";

var questions = [
    {
        Question: "What does CSS Stand for?",
        Answer1: "Cascading Style Sheet",
        Answer2:  "Commas, Squares, Syllables",
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answer1: "Cascading Style Sheet",
        Answer2:  "Commas, Squares, Syllables",
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answer1: "Cascading Style Sheet",
        Answer2:  "Commas, Squares, Syllables",
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answer1: "Cascading Style Sheet",
        Answer2:  "Commas, Squares, Syllables",
        Correct:"Cascading Style Sheet"
    },

    {
        Question: "What does CSS Stand for?",
        Answer1: "Cascading Style Sheet",
        Answer2:  "Commas, Squares, Syllables",
        Correct:"Cascading Style Sheet"
    },
    
];
var questionspace = document.querySelector(".question-space");
var questionIndex = 0;


// function for the game
function playGame() {
    event.preventDefault();
    clearScreen();
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

// function for penalty
function timePenalty() {
    secondsLeft += amount;
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
}


// function for game over
function sendMessage() {
    clearScreen();
    timerE1.textContent = "Game Over";
    clearInterval(put something here ?????);
    var endGame = document.createElement("h3");
    questionSpace.appendChild(endGame);

    var blank = document.querySelector("#show-score");
    blank.innerHTML = "";

    endGame.innerHTML = "The game is over. Your score is " + score + ". Please enter your initials to save your score!";

    var initialForm = document.createElement("input");
    blank.appendChild(initialForm);

    var submitBtn = document.createElement ("button");
    submitBtn.textContent = "Submit";
    blank.appendChild(initialForm);
};

// function for questions
function showQuestions() {
    console.log("showQuestions")

    questionspace.innerHTML = "";

    var questionPropmt = document.createElement("h3");
    questionPropmt.textContent = questions[questionIndex].Questions;

    var firstAnswer = document.createElement("button");
    firstAnswer.textContent = questions.Answer1;
    firstAnswer.addEventListener("click", selectAnswer);

    var secondAnswer = document.createElement("button");
    secondAnswer.textContent = questions.Answer2;
    secondAnswer.addEventListener("click", selectAnswer);

    questionspace.appendChild(questionPropmt);
    questionspace.appendChild(firstAnswer);
    questionspace.appendChild(secondAnswer)
}

// function for selected answers and right/wrong
function selectAnswer() {
    event.preventDefault();

    var chosenAnswer = event.target.textContent;

    rightAnswer = questions[questionIndex].Correct;
    var rightWrong = document.querySelector(".rightWrong");

    if (chosenAnswer !== rightAnswer) {
        timePenalty(-5);
        rightWrong.textContent = "Wrong Answer";
        questionIndex++;
        if (questionIndex >= questions.length) {
            sendMessage();
        } else {showQuestions(questions[questionIndex])};
    }
    else if (chosenAnswer === rightAnswer) {
        questionIndex++;
        rightWrong.textContent = "Right Answer";
        score++;
        if (questionIndex >= questions.length) {
            sendMessage();
        } else {showQuestions(questions[questionIndex])};
    };
}

// function to clear the screen
function clearScreen() {
    questionspace.innerHTML = "";
    document.querySelector("#game-screen").style.display = "none";
}
// function for high scores
// if finish questions then variable that holds score and then set highscore as keyvalue pair 
function highscores() {
    var dataScore = localStorage.getItem("object");
    var retrData = Json.parse(dataScore);
    var name = retrData.name;
    var score = getData.score;
    questionSpace.innerHTML = "";
    questionSpace.innerHTML = name + "" + score;
};
clickViewScores.addEventListener("click", () => {
    highscores();
});

// Initials Input



// function for startButton
startButton.addEventListener("click", playGame);