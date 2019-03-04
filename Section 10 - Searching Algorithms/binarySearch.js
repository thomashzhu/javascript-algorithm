function binarySearch(arr, val) {
  let min = 0, max = arr.length - 1;
  
  while (min <= max) {
    const mid = Math.floor(min + (max - min) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  
  return -1;
}


console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1
