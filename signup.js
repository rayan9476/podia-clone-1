function toggleEyeIcon(input) {
  const eyeIcon = document.getElementById("togglePassword");
  if (input.value.trim() !== "") {
    eyeIcon.classList.remove("hidden");
  } else {
    eyeIcon.classList.add("hidden");
  }
}

function togglePasswordVisibility() {
  const input = document.getElementById("password");
  const icon = document.getElementById("togglePassword");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// show/hide icon when typing
window.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("password");
  const icon = document.getElementById("togglePassword");

  // on page load
  if (input.value.trim() === "") {
    icon.classList.add("active");
  } else {
    icon.classList.remove("active");
  }

  // When typing show/hide icon based on input
  input.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      icon.classList.remove("active");
    } else {
      icon.classList.add("active");
    }
  });
});

function validateForm(event) {
  event.preventDefault(); // Form ko submit hone se rokta hai

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  //  example check
  const validUsername = "text";
  const validEmail = "text@gmail.com";
  const validPassword = "1234567";

  let isValid = true;

  if (username !== validUsername) {
    alert("❌ Invalid username. Please enter correct username.");
    isValid = false;
  }

  if (email !== validEmail) {
    alert("❌ Invalid email. Please enter correct email.");
    isValid = false;
  }

  if (password !== validPassword) {
    if (password.length < 7) {
      alert("❌ Password must be at least 7 characters.");
    } else {
      alert("❌ Invalid password. Please enter correct password.");
    }
    isValid = false;
  }

  // final check to redirect
  if (isValid) {
    alert("✅ Login successful!");

    // reset fields
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";

    // reset password type if visible
    passwordInput.type = "password";

    // reset eye icon
    const eyeIcon = document.getElementById("togglePassword");
    if (eyeIcon) {
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
      eyeIcon.classList.add("hidden"); // hide again after reset
    }

    // redirect
    window.location.href = "index.html";
  }
}
