// Dummy login check – replace with real API or storage later
const USERS = [
  { phone: "9999999999", password: "123456", uid: "100001" }
];

function login() {
  const phone = document.getElementById("phone").value;
  const pass = document.getElementById("password").value;
  const user = USERS.find(u => u.phone === phone && u.password === pass);

  if (user) {
    localStorage.setItem("luckyking_user", JSON.stringify(user));
    window.location.href = "home.html";
  } else {
    document.getElementById("error").innerText = "Invalid credentials";
  }
}

function checkLogin() {
  const user = localStorage.getItem("luckyking_user");
  if (!user) {
    window.location.href = "login.html";
  }
}
