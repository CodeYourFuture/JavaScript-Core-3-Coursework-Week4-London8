function verify(password) {
    if (!password || // If the password is null, the 'verify' function should return 'Password rejected'.

         password.length < 8 || // If the password is less than 8 characters return 'Password rejected'. 
         
         !(/[A-Z]/.test(password)) || // If the password does not have at least 1 uppercase letter, 
                                      // return 'Password rejected'.

         !(/\d/.test(password)))     // If the password does not have at least 1 number, return 'Password rejected'.
                return ("Password rejected")

    else
                return ("Password accepted");

}

module.exports = verify;
