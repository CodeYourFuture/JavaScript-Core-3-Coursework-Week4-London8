function verify (password) {
    if (password.length < 8){
        return "password rejected"
    }else if (!password){
        return "password rejected"
    }else if (password.search(/[A-Z]/) < 1){
        return "password rejected"
    }else if (password.search(/[0-9]/) < 1){
        return "password rejected"
    }else {
         return "password accepted"
    }
//   return password === null ||
//       password.length < 8 ||
//       !password.match(/[A-Z]/g) ||
//       !password.match(/[0-9]/g) ?
//       "Password rejected" :
//       "Password accepted";
//   }
}
module.exports = verify;