function validateForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Validate Full Name
  if (name == "") {
    alert("Full Name must be filled out");
    return false;
  }

  // Validate Email
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate Password
  if (password == "") {
    alert("Password must be filled out");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    return false;
  }

  // Validate Confirm Password
  if (confirmPassword == "") {
    alert("Please confirm your password");
    return false;
  } else if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  // If everything is valid
  alert("Form submitted successfully!");
  return true; // Allow form submission
}
//Muhammad Moeez
