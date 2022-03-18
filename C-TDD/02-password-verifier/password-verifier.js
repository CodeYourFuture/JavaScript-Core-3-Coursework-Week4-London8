let hasUpperCase = (string) => /[A-Z]/.test(string);

let hasNumbers = (string) => /[0-9]/.test(string);

let passwordVerifier = (password) => {
  if (password && password.length >= 8 && hasUpperCase(password) && hasNumbers(password))
    return "Password Accepted";
  return "Password Rejected";
};

module.exports = passwordVerifier;
