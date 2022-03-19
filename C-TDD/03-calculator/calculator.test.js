let add = require("./calculator")

test("No numbers entered",function(){
    const input = "";
    const output = add(input)

    const expected = 0;

    expect(output).toEqual(expected)
})
test("String contains one number ", function () {
    const input = "1";
    const output = add(input)

    const expected = 1;

    expect(output).toEqual(expected)
})
test("String contains more than one number ", function () {
    const input = "1, 2";
    const output = add(input)

    const expected = 3;

    expect(output).toEqual(expected)
})