// ========================================
// Part 1: Event Handling
// ========================================
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Button was clicked!";
});


// ========================================
// Part 2: Interactive Features
// ========================================

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;

document.getElementById("increaseBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
});


// ========================================
// Part 3: Form Validation
// ========================================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  let valid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    formMessage.textContent = "Form submitted successfully ✅";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "";
  }
});