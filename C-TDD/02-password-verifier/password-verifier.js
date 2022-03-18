function verify(password) {
  if (
    password === null ||
    password.length < 8 ||
    password === password.toLowerCase() ||
    !password.match(/\d+/g)
  ) {
    return "Password rejected";
  } else {
    return "Password excepted";
  }
}

module.exports = verify;
