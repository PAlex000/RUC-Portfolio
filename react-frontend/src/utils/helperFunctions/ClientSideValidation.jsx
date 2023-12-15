export const validateLogin = (username, password) => {
  const errors = {};

  // Regex for email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Email validation
  if (!username) {
    errors.username = "Email is required.";
  } else if (!emailRegex.test(username)) {
    errors.username = "Please enter a valid email address.";
  }

  // Validate password
  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};

export const validateSignup = (
  firstname,
  lastname,
  phonenumber,
  email,
  password
) => {
  const errors = {};

  // Regex for email and phone number validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const phoneRegex = /^[0-9]{8}$/;
  // First name validation
  if (!firstname) {
    errors.firstname = "First name is required.";
  }

  // Last name validation
  if (!lastname) {
    errors.lastname = "Last name is required.";
  }

  // Phone number validation
  if (!phonenumber) {
    errors.phonenumber = "Phone number is required.";
  } else if (!phoneRegex.test(phonenumber)) {
    errors.phonenumber = "Invalid phone number format.";
  }

  // Email validation
  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Password validation
  if (!password || password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  return errors;
};
