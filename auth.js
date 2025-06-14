document.addEventListener("DOMContentLoaded", function () {
  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) =>
          (user.email === username || user.phone === username) &&
          user.password === password
      );

      if (foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        window.location.href = "home.html";
      } else {
        alert("Invalid credentials");
      }
    });
  }

  // SIGNUP
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const phone = document.getElementById("signupPhone").value.trim();
      const password = document.getElementById("signupPassword").value;
      const confirm = document.getElementById("signupConfirm").value;

      if (password !== confirm) {
        alert("Passwords do not match");
        return;
      }

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const alreadyExists = users.find(
        (u) => u.phone === phone || u.email === phone
      );

      if (alreadyExists) {
        alert("User already exists");
        return;
      }

      const newUser = {
        uid: Date.now().toString().slice(-6),
        phone: phone.includes("@") ? null : phone,
        email: phone.includes("@") ? phone : null,
        password: password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created. Please login.");
      window.location.href = "login.html";
    });
  }
});
