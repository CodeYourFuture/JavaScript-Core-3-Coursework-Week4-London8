let removeVowels = require("./remove-vowels");

const removeVowelsFromWords = (words) => {
  let result = words.map(function (word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = removeVowelsFromWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/