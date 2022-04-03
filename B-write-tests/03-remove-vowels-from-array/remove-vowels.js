function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    let lowerCaseCharacter = character.toLowerCase();
    if (
      lowerCaseCharacter !== "a" &&
      lowerCaseCharacter !== "o" &&
      lowerCaseCharacter !== "i" &&
      lowerCaseCharacter !== "e" &&
      lowerCaseCharacter !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  let result = removeVowels('samuel');

  what is the value of result?
*/
