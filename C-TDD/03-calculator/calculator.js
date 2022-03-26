
function add(numbers) {
    let nums = '0123456789';
    let numbersArr = []
    for (let char of numbers) {
        if (nums.includes(char)) {
        numbersArr.push(Number(char))
        }
    }
    return numbersArr.reduce((num1, num2) => num1 + num2).toString()
}


module.exports = add
// console.log(add('"10", "15", "5"'))