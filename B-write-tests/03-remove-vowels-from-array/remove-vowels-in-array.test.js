let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let inputArray = ["Irina", "Etza", "Daniel"];
  // Act
  let totals = ["rn", "tz", "Dnl"];
  // Assert
  let output = removeVowelsFromWords(inputArray);
  expect(output).toEqual(totals);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
