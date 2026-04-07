let userScore = 0;
let compScore = 0;
let streak = 0;

// Sound effects
const winSound = new Audio("https://www.soundjay.com/buttons/sounds/button-4.mp3");
const loseSound = new Audio("https://www.soundjay.com/buttons/sounds/button-10.mp3");
const drawSound = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");

function play(user) {
  const choices = ["rock", "paper", "scissors"];

  // 🤖 Simple AI (sometimes predicts user)
  let computer;
  if (Math.random() < 0.3) {
    if (user === "rock") computer = "paper";
    else if (user === "paper") computer = "scissors";
    else computer = "rock";
  } else {
    computer = choices[Math.floor(Math.random() * 3)];
  }

  let result = "";

  if (user === computer) {
    result = "😐 Draw";
    streak = 0;
    drawSound.play();
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    result = "🎉 You Win!";
    userScore++;
    streak++;
    winSound.play();
  } else {
    result = "😢 You Lose!";
    compScore++;
    streak = 0;
    loseSound.play();
  }

  document.getElementById("result").innerText =
    `You: ${user} | Computer: ${computer} → ${result}`;

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("compScore").innerText = compScore;
  document.getElementById("streak").innerText = streak;
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  streak = 0;

  document.getElementById("userScore").innerText = 0;
  document.getElementById("compScore").innerText = 0;
  document.getElementById("streak").innerText = 0;
  document.getElementById("result").innerText = "Game Reset!";
}