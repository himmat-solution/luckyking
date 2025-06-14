document.addEventListener('DOMContentLoaded', () => {
  // Load wallet balance if available in session
  const balance = sessionStorage.getItem('wallet') || '0.00';
  document.getElementById('wallet-balance').textContent = balance;

  // Redirect to login if not logged in
  const user = sessionStorage.getItem('user');
  if (!user) {
    window.location.href = "login.html";
  }
});
