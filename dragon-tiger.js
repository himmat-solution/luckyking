let selectedBet = null;
let countdown = 10;
const timerEl = document.getElementById("countdown");
const selectedEl = document.getElementById("selected");
const resultEl = document.getElementById("result");

function placeBet(choice) {
  selectedBet = choice;
  selectedEl.innerText = choice.toUpperCase();
}

function startGameLoop() {
  let interval = setInterval(() => {
    countdown--;
    timerEl.innerText = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      showResult();
      setTimeout(() => {
        resetGame();
        startGameLoop();
      }, 3000);
    }
  }, 1000);
}

function showResult() {
  const choices = ["dragon", "tiger", "tie"];
  const actual = choices[Math.floor(Math.random() * 3)];
  resultEl.innerText = actual.toUpperCase();

  if (selectedBet === actual) {
    alert("You Win!");
  } else {
    alert("You Lose!");
  }
}

function resetGame() {
  countdown = 10;
  timerEl.innerText = countdown;
  resultEl.innerText = "--";
  selectedBet = null;
  selectedEl.innerText = "None";
}

startGameLoop();
