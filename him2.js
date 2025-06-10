
function startGame() {
    document.getElementById("game").style.display = "block";
}

function predict(choice) {
    const colors = ["Red", "Green", "Blue"];
    const resultColor = colors[Math.floor(Math.random() * colors.length)];
    const result = (choice === resultColor) ? "You won! 🎉" : "You lost. Try again!";
    document.getElementById("result").innerText = "Result: " + resultColor + " — " + result;
}
