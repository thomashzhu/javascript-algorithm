function maxSubarraySum(arr, num) {
  if (num < 1 || arr.length < num) return null;

  let current = arr.slice(0, num).reduce((result, val) => result + val, 0);
  let max = current;

  for (let i = num; i < arr.length; i++) {
    current = current - arr[i - num] + arr[i];
    if (current > max) max = current;
  }

  return max;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([], 4));