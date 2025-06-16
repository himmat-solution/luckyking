document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const identifier = document.getElementById("login-identifier").value;
    const password = document.getElementById("login-password").value;

    // Simple validation (You can replace this with real authentication logic)
    if (identifier && password) {
      // Save login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", identifier);

      // Redirect to homepage
      window.location.href = "index.html";
    } else {
      alert("Please enter both email/phone and password.");
    }
  });
});
