// DOM Elements

const themeToggle = document.getElementById("themeToggle");
const soundToggle = document.querySelector(".soundToggle");
const instructions = document.getElementById("instructions");
const quizContent = document.getElementById("quizContent");
const questionContainer = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const progressContainer = document.getElementById("progress");
const resultContainer = document.getElementById("result");
const scoreContainer = document.getElementById("score");
const startQuizBtn = document.getElementById("startQuiz");
const restartBtn = document.getElementById("restartButton");
const difficultyButtons = document.querySelectorAll(".difficultyBtn");
const timeLeftElement = document.getElementById("timeLeft");
const hintsLeftElement = document.getElementById("hintsLeft");
const useHintButton = document.getElementById("useHint");
const historyModal = document.getElementById("historyModal");
const viewHistoryBtn = document.getElementById("viewHistory");
const shareScoreBtn = document.getElementById("shareScore");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");

// Initializing states

let selectedDifficulty = null;
let currentQuestion = 0;
let score = 0;
let timeLeft = 0;
let timerInterval = null;
let hintsLeft = 3;
let soundEnabled = true;
let quizStats = {
  startTime: null,
  timePerQuestion: [],
  hintsUsed: 0,
  correctAnswers: 0,
  categoryPerformance: {},
};

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
  quizStats.startTime = new Date();
  hintsLeft = 3;

  updateHintsDisplay();
  loadQuestion();
  startTimer();
});

// Functionality to restart the Quiz
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  resultContainer.style.display = "none";
  instructions.style.display = "block";
});

// Functionality for Next Question Button
nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

// Functionality for Hint Button
useHintButton.addEventListener("click", () => {
  if (hintsLeft <= 0) return;

  const current = quizData[currentQuestion];
  const options = document.querySelectorAll(".option");
  const correctAnswer = current.correct;

  // Eliminate two wrong answers
  let eliminated = 0;
  options.forEach((option, index) => {
    if (eliminated < 2 && index !== correctAnswer && !option.disabled) {
      option.disabled = true;
      option.style.opacity = "0.5";
      eliminated++;
    }
  });

  hintsLeft--;
  quizStats.hintsUsed++;
  updateHintsDisplay();
});

//Fuctionality to view history
viewHistoryBtn.addEventListener("click", () => {
  const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
  const historyHTML = history
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10)
    .map(
      (result) => `
            <div class="history-item">
                <div class="history-date">${new Date(
                  result.date
                ).toLocaleDateString()}</div>
                <div class="history-score">Score: ${result.score}</div>
                <div class="history-difficulty">${result.difficulty}</div>
                <div class="history-percentage">${result.percentage}%</div>
            </div>
        `
    )
    .join("");

  document.getElementById("historyContent").innerHTML =
    historyHTML || "<p>No quiz history available</p>";
  historyModal.style.display = "flex";
});

//Functionality to be able to share
shareScoreBtn.addEventListener("click", async () => {
  try {
    await navigator.share({
      title: "My Quiz Score",
      text: `I scored ${score} points (${quizStats.correctAnswers}/${quizData.length}) on ${selectedDifficulty} difficulty!`,
      url: window.location.href,
    });
  } catch (err) {
    // Fallback for browsers that don't support sharing
    alert("Score copied to clipboard!");
    navigator.clipboard.writeText(
      `I scored ${score} points (${quizStats.correctAnswers}/${quizData.length}) on ${selectedDifficulty} difficulty!`
    );
  }
});

// Functionality to close modal
document.querySelector(".closeModal").addEventListener("click", () => {
  historyModal.style.display = "none";
});

//Functionality to handle clicking outside modal
historyModal.addEventListener("click", (e) => {
  if (e.target === historyModal) {
    historyModal.style.display = "none";
  }
});

// Functionality to handle the sound
soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? "🔊" : "🔇";
});

// ----> Logic handlers

// Logic for loading Question
function loadQuestion() {
  const current = quizData[currentQuestion];
  const progressPercent = (currentQuestion / quizData.length) * 100;

  document.querySelector(".progressFill").style.width = `${progressPercent}%`;
  progressContainer.textContent = `Question ${currentQuestion + 1}/${
    quizData.length
  }`;

  questionContainer.textContent = current.question;
  document.querySelector(".categoryTag").textContent = current.category;

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

// Logic for Timer
function startTimer() {
  timeLeft = difficultySettings[selectedDifficulty].time;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const percent =
    (timeLeft / difficultySettings[selectedDifficulty].time) * 100;
  document.querySelector(
    ".timerFill"
  ).style.background = `conic-gradient(var(--button) ${percent}%, transparent ${percent}%)`;
  timeLeftElement.textContent = timeLeft;
}

// Logic for selecting options
function selectOption(index) {
  clearInterval(timerInterval);
  const options = document.querySelectorAll(".option");
  const current = quizData[currentQuestion];

  options.forEach((option) => {
    option.disabled = true;
    option.classList.remove("selected");
  });

  options[index].classList.add("selected");

  if (index === current.correct) {
    score += calculatePoints();
    options[index].classList.add("correct");
    if (soundEnabled) correctSound.play();
    quizStats.correctAnswers++;
  } else {
    options[index].classList.add("wrong");
    options[current.correct].classList.add("correct");
    if (soundEnabled) wrongSound.play();
  }

  if (!quizStats.categoryPerformance[current.category]) {
    quizStats.categoryPerformance[current.category] = { correct: 0, total: 0 };
  }
  quizStats.categoryPerformance[current.category].total++;
  if (index === current.correct) {
    quizStats.categoryPerformance[current.category].correct++;
  }

  nextBtn.style.display = "block";
}

// Logic in calculating points based on difficulty status
function calculatePoints() {
  const basePoints = difficultySettings[selectedDifficulty].points;
  const timeBonus = Math.floor(timeLeft / 10);
  return basePoints + timeBonus;
}

// Logic for the Hint button
function updateHintsDisplay() {
  hintsLeftElement.textContent = hintsLeft;
  useHintButton.disabled = hintsLeft <= 0;
}

// Logic for showing results
function showResult() {
  quizContent.style.display = "none";
  resultContainer.style.display = "block";

  const percentage =
    (score /
      (quizData.length * difficultySettings[selectedDifficulty].points)) *
    100;
  scoreContainer.textContent = `Final Score: ${score} points (${percentage.toFixed(
    1
  )}%)`;

  const totalTime = Math.round((new Date() - quizStats.startTime) / 1000);
  const avgTimePerQuestion = (totalTime / quizData.length).toFixed(1);

  const statsHTML = `
    <div class="stats-grid">
            <div class="stat-item">
                <h4>Time Taken</h4>
                <p>${formatTime(totalTime)}</p>
            </div>
            <div class="stat-item">
                <h4>Avg Time/Question</h4>
                <p>${avgTimePerQuestion} seconds</p>
            </div>
            <div class="stat-item">
                <h4>Correct Answers</h4>
                <p>${quizStats.correctAnswers}/${quizData.length}</p>
            </div>
            <div class="stat-item">
                <h4>Hints Used</h4>
                <p>${quizStats.hintsUsed}/3</p>
            </div>
            <div class="stat-item">
                <h4>Difficulty</h4>
                <p>${
                  selectedDifficulty.charAt(0).toUpperCase() +
                  selectedDifficulty.slice(1)
                }</p>
            </div>
        </div>
        <div class="category-performance">
            <h4>Category Performance</h4>
            ${generateCategoryStats()}
        </div>
  `;

  document.getElementById("statsContainer").innerHTML = statsHTML;

  if (percentage >= 70) {
    showCelebration();
  }

  saveQuizResult();
}

// Logic to generate category statistics
function generateCategoryStats() {
  return Object.entries(quizStats.categoryPerformance)
    .map(([category, stats]) => {
      const percentage = ((stats.correct / stats.total) * 100).toFixed(1);
      return `
                <div class="category-stat">
                    <span class="category-name">${category}</span>
                    <div class="category-bar">
                        <div class="category-fill" style="width: ${percentage}%"></div>
                    </div>
                    <span class="category-percentage">${percentage}%</span>
                </div>
            `;
    })
    .join("");
}

// Logic to show Celebration animation

function showCelebration() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// Logic for Time formatting

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// Logic to save quiz result

function saveQuizResult() {
  const result = {
    date: new Date().toISOString(),
    score,
    difficulty: selectedDifficulty,
    stats: quizStats,
    percentage: ((quizStats.correctAnswers / quizData.length) * 100).toFixed(1),
  };

  let history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
  history.push(result);
  localStorage.setItem("quizHistory", JSON.stringify(history));
}
