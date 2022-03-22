function verify(password) {
  const reject = () => "Password rejected";
  const pass = () => "Password accepted";
  if (!password) {
    return reject();
  } else if (password.length < 8) {
    return reject();
  } else if (password.search(/[A-Z]/) < 1) {
    return reject();
  } else if (password.search(/[0-9]/) < 1) {
    return reject();
  } else {
    return pass();
  }
}
module.exports = verify;
