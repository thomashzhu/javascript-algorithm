function same(arr1, arr2) {
  if (arr1.length != arr2.length) return false;

  const frequency = {};

  for (const val of arr1) {
    frequency[val ** 2] = ++frequency[val ** 2] || 1;
  }

  for (const val of arr2) {
    if (frequency[val] >= 1) {
      frequency[val] -= 1
    } else {
      return false;
    }
  }

  return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));
console.log(same([1,2,3,2], [9,1,4,4]));