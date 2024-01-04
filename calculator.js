function calculateMean(nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  return sum / nums.length;
}

function calculateMedian(nums) {
  // sort by creating a shallow copy of nums array and using a compare function to sort numbers
  // since sort() method uses unicode characters to sort
  const sortedNumbers = nums.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  if (sortedNumbers.length % 2 === 0) {
    // Even number of elements, so calculate the average of the two middle values
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  } else {
    // Odd number of elements, so the middle value is the median
    return sortedNumbers[middleIndex];
  }
}

function calculateMode(numbers) {
  const countMap = new Map();

  // Count occurrences of each number
  numbers.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  let mode = null;
  let maxCount = 0;

  // Find modes (values with the highest frequency)
  countMap.forEach((count, num) => {
    if (count > maxCount) {
      mode = num;
      maxCount = count;
    } else if (count === maxCount && mode !== null) {
      // If there are multiple modes with the same frequency, set mode to null
      mode = null;
    }
  });

  return mode;
}

module.exports = { calculateMean, calculateMedian, calculateMode };
