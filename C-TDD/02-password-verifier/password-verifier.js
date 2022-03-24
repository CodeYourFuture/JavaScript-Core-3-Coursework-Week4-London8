function verify(password) {
  
    if (password.length <0 || password.length < 8 || password.search([/A-Z/]) < 1 || password.search([/0-9/]) < 1){
      return "Password rejected";  
    }else if (
      password.length < 0 &&
      password.length < 8 &&
      password.search([/A-Z/]) < 1 &&
      password.search([/0-9/]) < 1
    )
      return "Password accepted";
  
}


module.exports = verify;