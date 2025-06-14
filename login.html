document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Handle login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = storedUsers.find(
        (user) => (user.phone === username || user.email === username) && user.password === password
      );

      if (existingUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
        window.location.href = "home.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }

  // Handle signup
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const phoneOrEmail = document.getElementById("phoneOrEmail").value.trim();
      const password = document.getElementById("signupPassword").value.trim();
      const confirmPassword = document.getElementById("confirmPassword").value.trim();

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const isExisting = users.some((user) => user.phone === phoneOrEmail || user.email === phoneOrEmail);
      if (isExisting) {
        alert("User already exists");
        return;
      }

      const newUser = {
        uid: "1000" + (users.length + 1),
        phone: /^\d+$/.test(phoneOrEmail) ? phoneOrEmail : "",
        email: /^\S+@\S+\.\S+$/.test(phoneOrEmail) ? phoneOrEmail : "",
        password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful. Please login.");
      window.location.href = "login.html";
    });
  }
});
