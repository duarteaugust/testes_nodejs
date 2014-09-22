module("Module 1");
 
test("isOdd", function() {
    expect(2);
    ok(isOdd(3), "passing 3, returns true.");
    ok(!isOdd(3), "passing 4, returns false.");
});
 
 
test("computeGreatestCommonDivisor", function() {
    equals(computeGreatestCommonDivisor(8, 12), 4, "passing 8 and 12, returns 4.");
});