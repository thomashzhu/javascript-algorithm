const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  let hasSwapped;

  for (let i = 1; i < arr.length; i++) {
    hasSwapped = false;
    
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        hasSwapped = true;
        swap(arr, j, j+1);
      } 
    }

    if (!hasSwapped) break;
  }
  return arr;
};

console.log(bubbleSort([37, 45, 29, 8]));
console.log(bubbleSort([1, 3, 2, 5, 4]));
console.log(bubbleSort([1]));
console.log(bubbleSort([]));
console.log(bubbleSort([1,2,3,4,5,6,7,9,8,10]));