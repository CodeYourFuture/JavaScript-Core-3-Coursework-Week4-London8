function convertToOldRoman(n) {
  let romanNumbers = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let remain;
  let romanNum;
  if (romanNumbers[n]) {
    romanNum = romanNumbers[n];
  } else {
    let thousand = Math.floor(n / 1000);
    romanNum = romanNumbers[1000].repeat(thousand);
    remain = n - thousand * 1000;

    let fiveHundred = Math.floor(remain / 500);
    romanNum += romanNumbers[500].repeat(fiveHundred);
    remain = remain - fiveHundred * 500;

    let hundred = Math.floor(remain / 100);
    romanNum += romanNumbers[100].repeat(hundred);
    remain = remain - hundred * 100;

    let fifty = Math.floor(remain / 50);
    romanNum += romanNumbers[50].repeat(fifty);
    remain = remain - fifty * 50;

    let ten = Math.floor(remain / 10);
    romanNum += romanNumbers[10].repeat(ten);
    remain = remain - ten * 10;

    let five = Math.floor(remain / 5);
    romanNum += romanNumbers[5].repeat(five);
    remain = remain - five * 5;

    let one = Math.floor(remain / 1);
    romanNum += romanNumbers[1].repeat(one);
    remain = remain - one * 1;
  }
  return romanNum;
}

module.exports = convertToOldRoman;
