const verifyPassword = (password) => {
  if (
    password !== null &&
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /\d/.test(password)
  ) {
    return "Password accepted";
  } else {
    return "Password rejected";
  }
};

module.exports = verifyPassword;
