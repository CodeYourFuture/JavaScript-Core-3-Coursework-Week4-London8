let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  let input = ["Irina", "Etza", "Daniel"];
  expect(removeVowelsFromWords(input)).toEqual(["rn", "tz", "Dnl"]);
  // Arrange
  // Act
  // Assert
});
test("removes uppercase vowels in an array", function () {
  let input = ["Irina", "Etza", "Daniel"];
  expect(removeVowelsFromWords(input)).toEqual(["rn", "tz", "Dnl"]);
});
// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
