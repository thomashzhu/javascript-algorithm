const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (i !== minIndex) swap(arr, i, minIndex);
  }

  return arr;
};

console.log(selectionSort([37, 45, 29, 8]));
console.log(selectionSort([1, 3, 2, 5, 4]));
console.log(selectionSort([1]));
console.log(selectionSort([]));
console.log(selectionSort([1,2,3,4,5,6,7,9,8,10]));