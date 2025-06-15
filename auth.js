// auth.js

function saveLoginStatus(userId) {
  localStorage.setItem("userId", userId); // Save user ID as session
  window.location.href = "index.html";   // Go to home page
}

function checkLoginStatus() {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    window.location.href = "login.html";
  }
}

// Call this on pages that require login (like index.html)
checkLoginStatus();
