// DOM Elements
const modalOverlay = document.getElementById('modal-overlay');

// Constants
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedbackElement = document.getElementById("feedback");
const explanationElement = document.getElementById("explanation");
const scoreBoard = document.getElementById("scoreboard");
const questionsLeft = document.getElementById("leftquestions");
const nextButton = document.getElementById("next-btn");
const timeElapsed = document.getElementById("elapsedtime");
const questionTimer = document.getElementById("question-timer");

// Declarations
let currentQuestion;
let usedQuestions = [];
let score = 0;
let correctQuestions = 0;
let questionCount = 0;
let timer;
let totalTimer;
let questionTimeLimit = 30; // 30 seconds per question
let gameStartTime;

// theme support
const themeToggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? '🌞' : '🌙';
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else {
        // default to dark if user prefers dark
        const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(prefers);
    }
}

function showModal() {
    modalOverlay.classList.add('active');
}

function hideModal() {
    modalOverlay.classList.remove('active');
}

themeToggleBtn && themeToggleBtn.addEventListener('click', toggleTheme);

function startTotalTimer() {
    if (totalTimer) {
        clearInterval(totalTimer);
    }
    
    gameStartTime = Date.now();
    timeElapsed.textContent = `0:00`; // Initialize to 0:00
    
    totalTimer = setInterval(() => {
        const totalElapsed = Math.floor((Date.now() - gameStartTime) / 1000);
        const minutes = Math.floor(totalElapsed / 60);
        const seconds = totalElapsed % 60;
        timeElapsed.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTotalTimer() {
    clearInterval(totalTimer);
}

function startQuestionTimer() {
    // Clear any existing question timer
    if (timer) {
        clearInterval(timer);
    }

    let timeRemaining = questionTimeLimit;

    // Update the question timer display and reset color
    questionTimer.textContent = `${timeRemaining}s`;
    questionTimer.style.color = 'var(--text-light)';

    timer = setInterval(() => {
        timeRemaining--;

        // Update question timer display
        questionTimer.textContent = `${timeRemaining}s`;

        // Change color when time is running low
        if (timeRemaining <= 10) {
            questionTimer.style.color = timeRemaining <= 5 ? 'var(--error)' : 'var(--primary)';
        } else {
            questionTimer.style.color = 'var(--text-light)';
        }

        // Check if time is up
        if (timeRemaining <= 0) {
            stopQuestionTimer();
            // Auto-submit with no answer selected (wrong)
            checkAnswer(-1); // -1 indicates timeout
        }
    }, 1000);
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
        stopQuestionTimer();
        stopTotalTimer();
        feedbackElement.textContent = "You've completed the trivia!";
        questionElement.textContent = "";
        explanationElement.textContent = "";
        answerButtons.forEach(btn => btn.style.display = "none");
        nextButton.style.display = "none";
        showModal();

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
    
    // Start total timer only once at the beginning of the game
    if (usedQuestions.length === 1) {
        startTotalTimer();
    }
    
    startQuestionTimer();

    console.log("Current Question: ", currentQuestion);
    console.log("Current Answers: ", currentQuestion.answers);
    
    if (!currentQuestion) return;

    questionElement.textContent = currentQuestion.question;
    hideModal();

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });

    // Clear the Explanation
    explanationElement.textContent = "";
    feedbackElement.textContent = "";

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
        else if (i === selectedIndex && selectedIndex !== -1) button.classList.add("wrong");
    });

    if (selectedIndex === correctIndex) {
        feedbackElement.textContent = "Correct!";
        correctQuestions++;
    } else if (selectedIndex === -1) {
        feedbackElement.textContent = `Time's up! The correct answer was ${currentQuestion.answers[correctIndex]}.`;
        // Mark all incorrect buttons as wrong for timeout
        answerButtons.forEach((button, i) => {
            if (i !== correctIndex) button.classList.add("wrong");
        });
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${currentQuestion.answers[correctIndex]}.`;
    }

    // Explain the answer, regardless of correctness
    console.log(`Explanation: ${currentQuestion.explanation}`);
    explanationElement.textContent = `Explanation: ${currentQuestion.explanation}`;

    // Update score
    getScore();
    
    // Show the modal
    showModal();

}

function getScore() {
    // Display the score
    score = (correctQuestions / usedQuestions.length) * 100;

    console.log("The score is now: ", score);

    scoreBoard.textContent = `${score.toFixed(0)}%`
}

// Move to next question
nextButton.addEventListener("click", showQuestion);

// Start the game on load
window.addEventListener("load", () => {
    initTheme();
    showQuestion();
});