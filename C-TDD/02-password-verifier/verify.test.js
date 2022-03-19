let verify = require("./password-verifier");

test("Password must contain at least 8 characters ",function(){
    const input = "Cyf8";
    const output = verify(input)

    const expected = "Password rejected"

    expect(output).toEqual(expected)
})

test("Password can not be null", function () {
    const input = null;
    const output = verify(input)

    const expected = "Password rejected"

    expect(output).toEqual(expected)
})

test("Password must contain at least 1 upper letter return", function () {
    const input = "coding08";
    const output = verify(input)

    const expected = "Password rejected"

    expect(output).toEqual(expected)
})

test("Password must contain at least 1 number", function () {
    const input = "CdeYourFuture";
    const output = verify(input)

    const expected = "Password rejected"

    expect(output).toEqual(expected)
})
test("Password it's not null,contains at least 8 characters,contains at least 1 upper letter,contains at least 1 number", function () {
    const input = "CdeYourFuture08";
    const output = verify(input)

    const expected = "Password rejected"

    expect(output).toEqual(expected)
})


