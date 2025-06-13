// auth.js
function signup() {
  const emailPhone = document.getElementById("signupPhoneEmail").value;
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirmPassword").value;

  if (!emailPhone || !password || !confirm) {
    alert("Please fill all fields.");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ emailPhone, password }));
  alert("Account created successfully!");
  window.location.href = "login.html";
}

function login() {
  const emailPhone = document.getElementById("loginPhoneEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.emailPhone === emailPhone && user.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "home.html"; // replace with your dashboard/home page
  } else {
    alert("Invalid credentials.");
  }
}
