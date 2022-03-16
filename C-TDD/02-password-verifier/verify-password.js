const verify = (password) => {
  return password === null ||
    password.length < 8 ||
    password === password.toLowerCase() ||
    !password.match(/\d+/g)
    ? "Password rejected"
    : "Password accepted";
};
module.exports = verify;
