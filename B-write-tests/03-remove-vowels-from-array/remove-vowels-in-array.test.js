let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["Irina", "Etza", "Daniel"];
  // Act
  const expected = ["rn", "tz", "Dnl"];
  // Assert
  const result = removeVowelsFromWords(words);
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
