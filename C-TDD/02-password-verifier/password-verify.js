const hasUpperCase = (string) => /[A-Z]/.test(string);

const hasNumbers = (string) => /[0-9]/.test(string);

const passwordVerifier = (pwd) => {
  if (pwd && pwd.length >= 8 && hasUpperCase(pwd) && hasNumbers(pwd)) return 'Password Accepted';
  return 'Password Rejected';
};

module.exports = passwordVerifier;
