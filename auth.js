document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const identifier = document.getElementById('login-identifier').value;
      const password = document.getElementById('login-password').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const matchedUser = users.find(user => (user.email === identifier || user.phone === identifier) && user.password === password);

      if (matchedUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
        window.location.href = "index.html"; // Redirect to home page
      } else {
        alert("Invalid credentials.");
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const identifier = document.getElementById('signup-identifier').value;
      const password = document.getElementById('signup-password').value;
      const confirm = document.getElementById('signup-confirm').value;
      const referral = document.getElementById('signup-referral').value;

      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = {
        email: identifier.includes('@') ? identifier : '',
        phone: identifier.match(/^\d{10}$/) ? identifier : '',
        password: password,
        referral: referral,
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    });

    // Auto fill referral code from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
      document.getElementById('signup-referral').value = ref;
    }
  }
});
