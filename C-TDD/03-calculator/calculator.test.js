let add = require("./calculator");

// 
// PASS THE FOLLOWING

test("For an empty string it will return 0", function () {
  // Arrange
  const string = "";
  const result = add(string);
  // Act
  const expectOutput = 0;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Sum of one number is itself", function () {
  // Arrange
  const string = "5";
  const result = add(string);
  // Act
  const expectOutput = 5;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 2: Sum of one number is itself", function () {
  // Arrange
  const string = "1000";
  const result = add(string);
  // Act
  const expectOutput = 1000;
  // Assert
  expect(result).toEqual(expectOutput);
});


test("Test 1: calculates the sum of the numbers passed as a comma separated string: Ans: 9", function () {
  // Arrange
  const string = "3,6";
  const result = add(string);
  // Act
  const expectOutput = 9;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 2: calculates the sum of the numbers passed as a comma separated string: Ans: 2", function () {
  // Arrange
  const string = "2,0";
  const result = add(string);
  // Act
  const expectOutput = 2;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 3: calculates the sum of the numbers passed as a comma separated string: Ans: 8.1", function () {
  // Arrange
  const string = "2.4,5.7";
  const result = add(string);
  // Act
  const expectOutput = 8.1;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 4: calculates the sum of the numbers passed as a comma separated string: Ans: 1999", function () {
  // Arrange
  const string = "900,99,1000";
  const result = add(string);
  // Act
  const expectOutput = 1999;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 5: calculates the sum of the numbers passed as a comma separated string: Ans: 1999", function () {
  // Arrange
  const string = "900,99,1000";
  const result = add(string);
  // Act
  const expectOutput = 1999;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 6: calculates the sum of the numbers passed as a comma separated string: Ans: 55", function () {
  // Arrange
  const string = "0,1,2,3,4,5,6,7,8,9,10";
  const result = add(string);
  // Act
  const expectOutput = 55;
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Test 5: calculates the sum of the numbers passed as a comma separated string: Ans: 55", function () {
  // Arrange
  const string = "0,1,2,3,4,5,6,7,8,9,10";
  const result = add(string.split(",").reverse().join());
  // Act
  const expectOutput = 55;
  // Assert
  expect(result).toEqual(expectOutput);
}); 


test("Ignore Numbers bigger than 1000; so adding 2 + 1001 = 2", function () {
  // Arrange
  const string = "2,1001";
  const result = add(string);
  // Act
  const expectOutput = 2
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Ignore Numbers bigger than 1000; Ans: 1999", function () {
  // Arrange
  const string = "2,1001,97,500,500,399,501,1501,2501,0";
  const result = add(string);
  // Act
  const expectOutput = 1999
  // Assert
  expect(result).toEqual(expectOutput);
});

test("Ignore Negative Numbers: throw an error `negatives not allowed: -1`", function () {
  // Arrange
  let D;
  const string = "1,4,-1";
  // Act
  // Assert
  expect(() => {
   add(string);
 }).toThrow(D) && console.log(D);

});


// Received value:   "negatives not allowed: -2"
test("`negatives not allowed: -2`", function () {
  // Arrange
  const string = "-2,1001,97,500,500,399,501,1501,2501,0";
  // Act
  // Assert
  expect(() => {
   add(string);
 }).toThrow(/^negatives not allowed:/);
});

// Received value:   "negatives not allowed: -2, -501, -1501, -2501"
test("`negatives not allowed: -2,-501,-1501,-2501`", function () {
  // Arrange
  const string = "-2,1001,97,500,500,399,-501,-1501,-2501,0";
  // Assert
  expect(() => {
   add(string);
 }).toThrow(/^negatives not allowed:/);
});


// ADDED THE FOLLOWING TESTS

// Received value:   "List of numbers expected. What follows is not allowed: abc, def, ghi"
test("`Test 1: nonnumerics not allowed: 0,abc,def,ghi,101`", function () {
  // Arrange
  const string = "0,abc,def,ghi,101";
  // Assert
  expect(() => {
   add(string);
 }).toThrow(/^List of numbers expected./);
});

// Received value:   "List of numbers expected. What follows is not allowed: 12x, 00x, jamesbond007"
test("`Test 2: nonnumerics not allowed: 1000,12x,00x,jamesbond007,1,2,3,-1,0,1001`", function () {
  // Arrange
  const string = "1000,12x,00x,jamesbond007,1,2,3,-1,0,1001";
  // Assert
  expect(() => {
   add(string);
 }).toThrow(/^List of numbers expected./);
});
