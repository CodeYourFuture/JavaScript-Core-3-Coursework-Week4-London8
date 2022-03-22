const removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const words = ["irina", "etza", "daniel"];
  // Act
  const result = removeVowelsFromWords(words);
  // Assert
  const expected = ["rn", "tz", "dnl"];
  expect(result).toEqual(expected);
});