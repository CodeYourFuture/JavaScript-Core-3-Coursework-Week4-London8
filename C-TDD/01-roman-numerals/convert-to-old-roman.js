function convertToOldRoman(n) {
  let romanNumArray = [];
  let romanNumChar = [`I`, `V`, `X`, `L`, `C`, `D`, `M`];
  let romanNum = ``;
  romanNumArray[6] = Math.floor(n / 1000);
  romanNumArray[5] = Math.floor((n % 1000) / 500);
  romanNumArray[4] = Math.floor((n % 100) / 100);
  romanNumArray[3] = Math.floor((n % 100) / 50);
  romanNumArray[2] = Math.floor((n % 50) / 10);
  romanNumArray[1] = Math.floor((n % 10) / 5);
  romanNumArray[0] = n % 5;

  for (let i = 6; i >= 0; i--) {
    for (let j = romanNumArray[i]; j > 0; j--) {
      romanNum += romanNumChar[i];
    }
  }
  console.log(romanNum)
  console.log(romanNumArray)
  return romanNum;
  
}

console.log(convertToOldRoman(57));
console.log(convertToOldRoman(9));
// module.exports = convertToOldRoman;
