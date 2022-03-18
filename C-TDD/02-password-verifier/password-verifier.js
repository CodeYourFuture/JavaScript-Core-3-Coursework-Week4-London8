function verify(password) {
  return password &&
    password.length > 8 &&
    containsUppercaseLetter(password) &&
    containsNumber(password)
    ? "Password accepted"
    : "Password rejected";
}

function containsUppercaseLetter(string) {
  return /[A-Z]/.test(string);
}

function containsNumber(string) {
  return /[0-9]/.test(string);
}

module.exports = verify;
