function verify(pass) {
    if ((pass === null) || (pass.length < 8) || (!ifAnyofTheLetterIsUpperCase()) || (!ifAnyofTheLetterIsNumber())) {
        return 'Password rejected'
    } else {
        return 'verify'
    }
    function ifAnyofTheLetterIsUpperCase() {
        let passArr = pass.split('');
        let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        
        return passArr.some(letter => caps.includes(letter))
                
    }
    function ifAnyofTheLetterIsNumber() {
        let passArr = pass.split('');
        let numbers = '0123456789'
        
        return passArr.some(letter => numbers.includes(letter))
                
    }
}

module.exports = verify;