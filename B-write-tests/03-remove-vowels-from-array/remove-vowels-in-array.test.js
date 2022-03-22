let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const nameArray = ["Irina", "Etza", "Daniel"];
  const expectedResult = ["rn", "tz", "Dnl"];
  // Act
  const output = removeVowelsFromWords(nameArray);
  // Assert
  expect(output).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
