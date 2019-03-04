function sumZero(arr) {
  if (arr.length < 2) return null;

  let left = 0, right = arr.length - 1;
  if (Math.sign(left) === Math.sign(right)) return null;

  while (left < right) {
    const sum = arr[left] + arr[right];
    
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      --right;
    } else {
      ++left;
    }
  }

  return null;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));
console.log(sumZero([-2,0,1,3]));
console.log(sumZero([1,2,3]));