document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginPage = document.getElementById('auth-page');
  const mainPage = document.getElementById('main-page');
  const logoutBtn = document.getElementById('logout-btn');

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
    loginPage.style.display = 'none';
    mainPage.style.display = 'block';
  } else {
    loginPage.style.display = 'block';
    mainPage.style.display = 'none';
  }

  // Show login page
  document.getElementById('show-login').addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Show signup page
  document.getElementById('show-signup').addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  // Handle Login
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginPhone = document.getElementById('login-phone').value;
    const loginPassword = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(loginPhone));
    if (user && user.password === loginPassword) {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('currentUser', loginPhone);
      loginPage.style.display = 'none';
      mainPage.style.display = 'block';
    } else {
      alert('Invalid credentials');
    }
  });

  // Handle Signup
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupPhone = document.getElementById('signup-phone').value;
    const signupPassword = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const newUser = {
      phone: signupPhone,
      password: signupPassword
    };

    localStorage.setItem(signupPhone, JSON.stringify(newUser));
    alert('Signup successful. Please login.');
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  // Logout Button (optional - add a logout button in your page with id="logout-btn")
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('currentUser');
      loginPage.style.display = 'block';
      mainPage.style.display = 'none';
    });
  }
});
