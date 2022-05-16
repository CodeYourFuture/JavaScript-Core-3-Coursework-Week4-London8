function verify(password) {
 
  let str = "";

  let length = password.length > 8;
  let upperCase = password.match(/[A-Z]/);
  let nil = password !== null;
  let numberLetter = password.match(/[0-9]/);

  length && upperCase && numberLetter && nil ? str = "Password accepted" :
  str = "Password rejected";
  
  return str;
}

console.log(verify("Code3your"));

module.exports = verify;