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
