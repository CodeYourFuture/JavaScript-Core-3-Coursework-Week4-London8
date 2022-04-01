let add = require("./calculator");

test("returns 0 if passed an empty string", function(){
  const emptyString ="";
  const expectedResult = 0;

  const output = add(emptyString);

  expect(output).toEqual(expectedResult);
})

test("returns 1 if passed '1'", function () {
  const stringNum = "1";
  const expectedResult = 1;

  const output = add(stringNum);

  expect(output).toEqual(expectedResult);
});

test("returns sum  if passed two numbers ", function () {
  const stringNum = "1, 2";
  const expectedResult = 3;

  const output = add(stringNum);

  expect(output).toEqual(expectedResult);
});
