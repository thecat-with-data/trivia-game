// DOM Elements

// Constants
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackElement = document.getElementById("feedback");
const explanationElement = document.getElementById("explanation");
const scoreBoard = document.getElementById("scoreboard");
const questionsLeft = document.getElementById("leftquestions");
const nextButton = document.getElementById("next-btn");
const timeElapsed = document.getElementById("elapsedtime");

// Declarations
let currentQuestion;
let usedQuestions = [];
let score = 0;
let correctQuestions = 0;
let questionCount = 0;
let timer;

function startQuestionTimer() {
 
    // Start elapsed time
    let startTime = Date.now();

    if (timer > 0) {
        clearInterval(timer)
    }

    timer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById("elapsedtime").textContent = `${elapsed}s`;
        }, 
        1000);

    console.log(`Timer Count: ${timer}s`);

}

function stopQuestionTimer() {
    clearInterval(timer);
}

// Function to get a random question that hasn't been used yet

function getRandomQuestion() {
    console.log("Used questions: ", usedQuestions);
    
    // Troubleshooting the Uncaught Exception error for feedbackElement
    console.log("feedbackElement: ", feedbackElement);

    
    if (usedQuestions.length === questionBank.length) {
        feedbackElement.textContent = "You've completed the trivia!";
        questionElement.textContent = "";
        explanationElement.textContent = "";
        answerButtons.forEach(btn => btn.style.display = "none");
        nextButton.style.display = "none";

        return null;
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * questionBank.length);
    } while (usedQuestions.includes(randomIndex));

    console.log("Random index selected: ", randomIndex);

    usedQuestions.push(randomIndex);

    let questionsRemaining = questionBank.length - usedQuestions.length;

    questionsLeft.textContent = `${questionsRemaining}`

    return questionBank[randomIndex];
}


// Display a question
function showQuestion() {

    currentQuestion = getRandomQuestion();
    startQuestionTimer();

    console.log("Current Question: ", currentQuestion);
    console.log("Current Answers: ", currentQuestion.answers);
    
    if (!currentQuestion) return;

    questionElement.textContent = currentQuestion.question;
    feedbackElement.textContent = "";

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });

    // Hide the 'Next Question' button and clear the Explanation
    nextButton.style.display = "none";
    explanationElement.textContent = "";

}

// Handle answer selection
answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        checkAnswer(index);

    });

});

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {

    const correctIndex = currentQuestion.correct;

    stopQuestionTimer();

    answerButtons.forEach((button, i) => {
        button.disabled = true;
        if (i === correctIndex) button.classList.add("correct");
        else if (i === selectedIndex) button.classList.add("wrong");
    });

    if (selectedIndex === correctIndex) {
        feedbackElement.textContent = "Correct!";
        correctQuestions++;

        console.log("The number of correct questions is: ", correctQuestions)

    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${currentQuestion.answers[correctIndex]}.`;
    }

    // Explain the answer, regardless of correctness
    console.log(`Explanation: ${currentQuestion.explanation}`);
    explanationElement.textContent = `Explanation: ${currentQuestion.explanation}`;

    // Update score
    getScore();

}

function getScore() {
    // Display the score
    score = (correctQuestions / usedQuestions.length) * 100;

    console.log("The score is now: ", score);

    scoreBoard.textContent = `${score.toFixed(0)}%`

    nextButton.style.display = "block";
}

// Move to next question
nextButton.addEventListener("click", showQuestion);

// Start the game on load
window.addEventListener("load", showQuestion);