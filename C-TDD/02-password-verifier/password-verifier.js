function verify(password) {
  if (
    password === null ||
    password.length < 8 ||
    password === password.toLowerCase() ||
    password.search(/[0-9]/) < 1
  ) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;
