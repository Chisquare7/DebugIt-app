// DOM Elements

const themeToggle = document.getElementById("themeToggle");
const instructions = document.getElementById("instructions");
const quizContent = document.getElementById("quizContent");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("optionQuiz");
const nextBtn = document.getElementById("nextBtn");
const progressContainer = document.getElementById("progress");
const resultContainer = document.getElementById("resultQuiz");
const scoreContainer = document.getElementById("score");
const startQuizBtn = document.getElementById("startQuiz");
const restartBtn = document.getElementById("restartButton");

// Functionality for Theme (Light and Dark theme) Toggle

themeToggle.addEventListener("click", () => {
  document.documentElement.setAttribute(
    "data-theme",
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark"
  );
});
