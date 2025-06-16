// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const identifier = document.getElementById("login-identifier").value.trim();
      const password = document.getElementById("login-password").value.trim();

      // Basic dummy validation (you can replace this with real logic later)
      if (identifier !== "" && password !== "") {
        // Save user session to localStorage
        localStorage.setItem("user", identifier);

        // Redirect to homepage
        window.location.href = "index.html";
      } else {
        alert("Please enter both Email/Phone and Password");
      }
    });
  }
});
