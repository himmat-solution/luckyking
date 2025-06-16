// auth.js - handles login logic

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const identifier = document.getElementById('login-identifier').value.trim();
  const password = document.getElementById('login-password').value;

  // Simple validation — you can replace with real backend call
  if (identifier && password) {
    const user = {
      id: Date.now(),
      identifier: identifier,
    };

    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to homepage
    window.location.href = "index.html";
  } else {
    alert("Please enter both fields.");
  }
});
