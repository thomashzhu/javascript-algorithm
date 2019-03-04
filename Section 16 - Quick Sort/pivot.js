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

let arr = [4,2,7,1,3,6];
pivot(arr);
console.log(arr)

arr = [7,1,2,3,4,5,6];
pivot(arr);
console.log(arr)
