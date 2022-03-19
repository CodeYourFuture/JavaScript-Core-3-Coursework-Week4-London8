function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character !== "a" &&
      character !== "e" &&
      character !== "i" &&
      character !== "o" &&
      character !== "u" &&
      character !== "y" &&
      character !== "A" &&
      character !== "E" &&
      character !== "I" &&
      character !== "O" &&
      character !== "U" &&
      character !== "Y"
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
