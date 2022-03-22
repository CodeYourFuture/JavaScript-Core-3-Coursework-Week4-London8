function add(string) {
    if (!string) // for an empty string it will return
           return 0;

// handle an unknown amount of numbers passed as an argument
    let arrayofNumbers = string.split(",");
    let filteredValues = [];


    for (let element of arrayofNumbers) {
           let numericValue = Number(element);

// I added the following test since I had to go through every value anyway
           if (!Number.isFinite(numericValue)) // handles `NaN`
           {   
               // There may be more than one invalid value - filter them all
               filteredValues = arrayofNumbers.filter(element => !isFinite(+element));
               let throwMessage = `List of numbers expected. What follows is not allowed: ${filteredValues.join(", ")}`;      
               throw throwMessage;
           };

// Numbers bigger than 1000 should be ignored
           if (numericValue <= 1000) //  arrayofNumbers = arrayofNumbers.filter(element => element <= 1000)
           {
                filteredValues.push(numericValue);
           };

/* Calling `add` with a negative number will throw an error `"negatives not allowed: "` - 
and the negative that was passed.

For example `add("1,4,-1")` should throw an error with the message `"negatives not allowed: -1"`.

If there are multiple negatives, show all of them in the error message.
*/

          if (numericValue < 0) {
                filteredValues = arrayofNumbers.filter(element => +element < 0);
                let throwMessage = `negatives not allowed: ${filteredValues.join(", ")}`;      
                throw throwMessage;
          }
    }

    return filteredValues.reduce((prevValue,currentValue) => prevValue + currentValue,0);
}

module.exports = add;
