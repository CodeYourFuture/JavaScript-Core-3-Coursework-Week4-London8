const greet = require("./index")

/* Remember to begin with the tests */

// Requirement 1
test("greet('Bob') should return: 'Hello, Bob.'", () => {
    // Arrange (input)
    // Act (result from calling)
    // Assert (expected value)
    let name = "Bob",
    result = greet(name),
    expected = "Hello, Bob";

    expect(result).toEqual(expected);
});

// Requirement 2
test("when name === null, return 'Hello, my friend.'", () => {
    let input = null,
    result = greet(input),
    expected = "Hello, my friend.";

    expect(result).toEqual(expected);
});

// Requirement 3
test("if name === 'JERRY' then the method should return the string 'HELLO JERRY!'", () => {
    let input = "JERRY",
    result = greet(input),
    expected = "HELLO JERRY!";

    expect(result).toEqual(expected);
});

// Requirement 4
test("if name = [Jill, Jane], return 'Hello, Jill and Jane.'", () => {
    let input = ["Jill", "Jane"],
    result = greet(input),
    expected = "Hello, Jill and Jane.";

    expect(result).toEqual(expected);
});

// Requirement 5
test("handle an arbitrary amount of names in an array as an input", () => {
    const input = ["Amy", "Brian", "Charlotte"],
    output = greet(input),
    expectedOutput = "Hello, Amy, Brian, and Charlotte.";
    expect(output).toEqual(expectedOutput);
})