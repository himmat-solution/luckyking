document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailPhone = document.getElementById('emailPhone').value;
      const password = document.getElementById('password').value;

      // Dummy login logic
      if (emailPhone && password) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
      } else {
        alert('Invalid login');
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailPhone = document.getElementById('emailPhone').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const referralCode = document.getElementById('referralCode').value;

      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Save dummy user data
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('referralCode', referralCode);
      window.location.href = 'index.html';
    });
  }

  // Redirect to login if not logged in
  if (window.location.pathname.includes('index.html') && localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
  }
});
