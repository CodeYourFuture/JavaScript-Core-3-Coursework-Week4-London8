let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let words = ["Irina", "Etza", "Daniel"];
  let expected = ["rn", "tz", "Dnl"];
  // Act
  let result = removeVowelsFromWords(words);
  // Assert
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
