
function startGame() {
  document.getElementById('game').style.display = 'block';
}
function guessColor(color) {
  const colors = ['Red', 'Green', 'Blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const result = color === randomColor ? "✅ Correct!" : "❌ Wrong! It was " + randomColor;
  document.getElementById('result').innerText = result;
}
