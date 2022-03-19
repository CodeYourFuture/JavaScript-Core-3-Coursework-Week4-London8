const add = (numbers) => {
    let sum = 0;
    let arrayOfNumbers = numbers.split(",").map((number) => parseInt(number));
    
    if(numbers.length === 0){
        return 0;
    }
    if(numbers.length === 1){
        return arrayOfNumbers[0];
    }
    if(numbers.length > 1){
        sum = arrayOfNumbers.reduce((previousValue,currentValue)=> {
           return (previousValue) + (currentValue)
        })
        return sum;
    }

}
module.exports = add;