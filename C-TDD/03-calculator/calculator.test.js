let add = require('./calculator');

test("returns 11 if the argument passed is 5, 6", function() {
    expect(add('"5"')).toEqual('5')
});

test("returns 11 if the argument passed is 5, 6", function() {
    expect(add('"5", "6"')).toEqual('11')
})
test("returns 13 if the argument passed is 10, 15, 5", function() {
    expect(add('"1", "5", "7"')).toEqual('13')
})