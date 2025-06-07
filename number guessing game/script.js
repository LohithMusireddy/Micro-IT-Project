let secretNumber;
let guessCount = 0;

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  document.getElementById("guessCount").innerText = guessCount;
  document.getElementById("message").innerText = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  guessCount++;
  document.getElementById("guessCount").innerText = guessCount;

  if (guess < 1 || guess > 100) {
    document.getElementById("message").innerText = "⛔ Please enter a number between 1 and 100.";
  } else if (guess === secretNumber) {
    document.getElementById("message").innerText = `🎉 Correct! The number was ${secretNumber}.`;
  } else if (guess < secretNumber) {
    document.getElementById("message").innerText = "📉 Too low! Try again.";
  } else {
    document.getElementById("message").innerText = "📈 Too high! Try again.";
  }
}

function resetGame() {
  generateNumber();
}

generateNumber();
