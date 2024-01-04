const {
  calculateMean,
  calculateMedian,
  calculateMode,
} = require("./calculator");

describe("Tesing calulator functions for mean, median, and mode", function () {
  test("calculateMean function should find the average values of an array of numbers", function () {
    const res = calculateMean([1, 2, 3]);
    expect(res).toEqual(2);
    const res2 = calculateMean([1, 2, 3, 4, 5, 3.33, 2.22]);
    expect(res2).toBeCloseTo(2.94, 2);
  });
  test("calculateMedian function should find the middle value of an array of numbers", function () {
    const odd = calculateMedian([1, 2, 3]);
    expect(odd).toEqual(2);
    const even = calculateMedian([1, 2, 3, 4, 5, 8, 3.333, 19]);
    expect(even).toBeCloseTo(3.67, 2);
    const even2 = calculateMedian([1, 2, 3, 4, 5, 8, 3, 19]);
    expect(even2).toBeCloseTo(3.5);
  });
  test("calculateMode function should find the most frequent value of an array of numbers", function () {
    const noMode = calculateMode([1, 2, 3]);
    expect(noMode).toBeNull();
    const oneMode = calculateMode([1, 2, 2, 3]);
    expect(oneMode).toEqual(2);
    const multiMode = calculateMode([1, 2, 2, 3, 3]);
    expect(multiMode).toEqual([2, 3]);
  });
});
