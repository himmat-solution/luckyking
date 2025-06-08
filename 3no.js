
function startGame() {
    document.getElementById('gameArea').style.display = 'block';
}

function predict(color) {
    const colors = ['Red', 'Green', 'Blue'];
    const result = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('result').innerText = 
        (result === color) ? "🎉 You Won! Color was " + result : "❌ Try Again! Color was " + result;
}
