const { calculateMean, calculateMedian, calculateMode } = require('./calculator');

describe('Tesing calulator functions for mean, median, and mode', function () {
  test('calculateMean function should find the average values of an array of numbers', function () {
    const res = calculateMean([1,2,3])
    expect(res).toEqual(2)
  })
  test('calculateMedian function should find the middle value of an array of numbers', function () {
    const res = calculateMedian([1,2,3])
    expect(res).toEqual(2)
  })

  test('square should square negative numbers', function () {
    const num = square(-9);
    expect(num).toEqual(81)
  })
})

describe('cube function', function () {
  test('should cube a positive number', function () {
    const num = cube(3);
    expect(num).toEqual(27)
    const num2 = cube(2);
    expect(num2).toEqual(8)
  })
})
