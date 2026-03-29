// Validate login form on submit
function validateLogin(e) {
  e.preventDefault();
  const username = document.getElementById('Username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Simulated redirect
  window.location.href = "dashboard.html";
}

// Attach submit event when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginForm").addEventListener("submit", validateLogin);
});