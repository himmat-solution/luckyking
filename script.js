// Simple session check logic
document.addEventListener("DOMContentLoaded", function () {
  const user = localStorage.getItem("user");

  if (!user) {
    window.location.href = "login.html";
  }
});
