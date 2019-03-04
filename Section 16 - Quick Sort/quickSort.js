const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) swap(arr, i, ++pivotIndex);
  }
  if (pivotIndex > 0) swap(arr, start, pivotIndex);

  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([4,7,1,3,5]));
console.log(quickSort([6,1,11,4,5,8]));
console.log(quickSort([7]));
console.log(quickSort([]));