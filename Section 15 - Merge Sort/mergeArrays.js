const mergeArrays = (arr1, arr2) => {
  let i = 0, j = 0;
  let merged = [];

  while (merged.length !== arr1.length + arr2.length) {
    if ((i >= arr1.length && j < arr2.length) || arr2[j] < arr1[i]) {
      merged.push(arr2[j++]);
    }
    if ((j >= arr2.length && i < arr1.length) || arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    }
  }

  return merged;
};

console.log(mergeArrays([1,3,5,7], [2,6,8,16]));
console.log(mergeArrays([100], [1,2,3,5,6]));
console.log(mergeArrays([], [50]));
console.log(mergeArrays([], []));