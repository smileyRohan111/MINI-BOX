const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (validateForm()) {
    window.location.href = 'login.html';
  }
});

function cancelForm() {
  window.location.href = '/Landing Page/cc.html';
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!name || !dob || !email || !phone || !password || !confirmPassword) {
    alert("Please fill in all the fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}
