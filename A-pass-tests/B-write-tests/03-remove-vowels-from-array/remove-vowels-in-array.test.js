let removeVowelsFromWords = require("./remove-vowels-in-array");

const input = ["Irina", "Etza", "Daniel"]
const output = ["rn", "tz", "Dnl"]

test("remove vowels from all words in array", function () {
  expect(removeVowelsFromWords(input)).toEqual(output)
});



