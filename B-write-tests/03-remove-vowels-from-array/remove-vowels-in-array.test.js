let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const output = ["rn", "tz", "Dnl"];
  // Act
  const result = removeVowelsFromWords(input)
  // Assert
  expect(result).toEqual(output)
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
