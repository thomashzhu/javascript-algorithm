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

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  return mergeArrays(left, right);
}

console.log(mergeSort([1,7,5,3,6,4,8,2]));
console.log(mergeSort([1,7,5,3,4,8,2]));