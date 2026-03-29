// Validate create user form on submit
function validateCreateUser(e) {
  e.preventDefault();

  const username = document.getElementById('Username').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !email || !phone || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Basic phone validation for 10 digits (already enforced by pattern, but double check)
  if (!/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  // You can add more validation here if needed

  // Simulated redirect to login page
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("createUserForm").addEventListener("submit", validateCreateUser);
});