function checkPassword(str) {
  let verification = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  let flag = verification.test(str);

  if (flag === true) {
    return "Password accepted";
  } else {
    return "Password rejected";
  }
}

module.exports = checkPassword;
