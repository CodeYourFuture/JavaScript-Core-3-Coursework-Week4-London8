let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const word = ["Irina", "Etza", "Daniel"]
  const output = removeVowelsFromWords(word)
  // Act
  const expected = ["rn", "tz", "Dnl"]
  // Assert
  expect(output).toEqual(expected)

});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
