let verify = require('./password-validator')

test("returns Password rejected if password length is less than eight characters long", function() {
    expect(verify("london1")).toEqual('Password rejected')
});


test("returns Password Rejected if no argument is passed", function() {
    expect(verify('')).toEqual('Password rejected')
});

test("return Password Rejected if not at least one of the letters in argument passed is uppercase", function() {
    expect(verify('elephant55')).toEqual('Password rejected')
});

test("returns Password Rejected if none of the character in argument is a number", function() {
    expect(verify('kimakitoRu')).toEqual('Password rejected')
})
test("valid password 1", function() {
    expect(verify('KimakitoRu5')).toEqual('verify')
})
test("returns Password Rejected if none of the character in argument is a number", function() {
    expect(verify('TTjsj4kjklj')).toEqual('verify')
})
