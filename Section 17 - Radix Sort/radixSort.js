const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / (10**place)) % 10;
}

const countDigit = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, countDigit(nums[i]));
  }
  return max;
}

const radixSort = (arr) => {
  const maxDigit = mostDigits(arr);
  let result = arr;
  
  for (let i = 0; i < maxDigit; i++) {
    let buckets = {};

    for (let j = 0; j < result.length; j++) {
      const digit = getDigit(result[j], i);
      buckets[digit] = (buckets[digit] || []).concat(result[j]);
    }

    result = [];
    for (let k = 0; k <= 9; k++) {
      if (buckets[k]) result = result.concat(buckets[k]);
    }
  }

  return result;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));