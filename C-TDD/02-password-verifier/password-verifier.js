function verify(password) {
  password = password.split("");
  let rejected = "Password rejected";
  let accepted = "Password accepted";

  if (
    password.length < 8 &&
    password !== null &&
    password_has_numbers(password) &&
    password_has_upperCase(password)
  ) {
    return accepted;
  } else {
    return rejected;
  }
}

function password_has_numbers(string) {
  let regex = /\d/g;
  return regex.test(string);
}

function password_has_upperCase(str) {
  for (let letter of str) {
    if (letter === letter.toUpperCase()) {
      return true;
    }
  }
  return false;
}

module.exports = verify;
