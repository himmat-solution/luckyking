// Check if user is already logged in
if (localStorage.getItem("loggedInUser")) {
  window.location.href = "home.html"; // Redirect if already logged in
}

// LOGIN FUNCTION
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(user =>
    (user.email === username || user.phone === username) && user.password === password
  );

  if (matchedUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    window.location.href = "home.html"; // ✅ Change to your dashboard/home page
  } else {
    alert("Invalid login credentials.");
  }
});

// SIGNUP FUNCTION
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const phone = document.getElementById("signup-phone").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existing = users.find(u => u.phone === phone || u.email === email);

  if (existing) {
    alert("Account already exists with this phone or email.");
    return;
  }

  const newUser = { phone, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please log in.");
  window.location.href = "login.html";
});
