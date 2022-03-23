let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let result = ["Barry", "Timothy", "Nkele", "Lerato"]
  let expected = ["Brry", "Tmthy", "Nkl", "Lrt" ]
  
  //Act
  let output = removeVowelsFromWords(result)

  // Assert
  expect(output).toEqual(expected);
});










// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
