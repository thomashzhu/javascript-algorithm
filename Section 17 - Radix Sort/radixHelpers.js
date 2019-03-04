const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / (10**place)) % 10;
}

console.log('getDigit');
console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));
console.log('');

const countDigit = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log('countDigit');
console.log(countDigit(1));
console.log(countDigit(12));
console.log(countDigit(123));
console.log(countDigit(1234));
console.log(countDigit(12345));
console.log('');

const mostDigits = (nums) => {
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, countDigit(nums[i]));
  }
  return max;
}

console.log('mostDigits');
console.log(mostDigits([1234, 56, 7]));
console.log(mostDigits([1, 1, 11111, 1]));
console.log(mostDigits([12, 34, 56, 78]));
console.log(mostDigits([]));
console.log('');