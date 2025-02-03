// DOM Elements

const themeToggle = document.getElementById("themeToggle");
const instructions = document.getElementById("instructions");
const quizContent = document.getElementById("quizContent");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressContainer = document.getElementById("progress");
const resultContainer = document.getElementById("resultQuiz");
const scoreContainer = document.getElementById("score");
const startQuizBtn = document.getElementById("startQuiz");
const restartBtn = document.getElementById("restartButton");
const difficultyButtons = document.querySelectorAll(".difficultyBtn");

// Initializing states

let selectedDifficulty = null;
let currentQuestion = 0;

// Functionality for Theme (Light and Dark theme) Toggle

themeToggle.addEventListener("click", () => {
  document.documentElement.setAttribute(
    "data-theme",
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark"
  );
});

// Functionality for difficulty status

// ---->  Setting the difficulty level
const difficultySettings = {
  easy: { time: 20, points: 1 },
  medium: { time: 40, points: 2 },
  hard: { time: 60, points: 3 },
};

// ----> Initializing difficulty selection

difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedDifficulty = button.dataset.difficulty;
    difficultyButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    startQuizBtn.disabled = false;
    startQuizBtn.textContent = "Start Quiz";
  });
});

// Functionality for start Quiz Button

startQuizBtn.addEventListener("click", () => {
  if (!selectedDifficulty) return;

  instructions.style.display = "none";
  quizContent.style.display = "block";
  loadQuestion();
});

// Logic for loading Question

function loadQuestion() {
  const current = quizData[currentQuestion];
  progressContainer.textContent = `Question ${currentQuestion + 1}/${
    quizData.length
  }`;

  questionContainer.textContent = current.question;
  optionsContainer.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });

  nextBtn.style.display = "none";
}
