const verify = (password) => {
     return password === null || 
            password.length < 8 || 
            password === password.toLowerCase() || 
            password.search((/[0-9]/) < 0) ? "Password rejected" : "Password accepted";  
}
module.exports = verify;
