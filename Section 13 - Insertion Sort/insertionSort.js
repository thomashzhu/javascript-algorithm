const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      } else {
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort([37, 45, 29, 8]));
console.log(insertionSort([1, 3, 2, 5, 4]));
console.log(insertionSort([1]));
console.log(insertionSort([]));
console.log(insertionSort([1,2,3,4,5,6,7,9,8,10]));