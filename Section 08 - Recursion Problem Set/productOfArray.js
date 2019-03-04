function productOfArray(arr) {
  let start = 0;

  function product(start) {
    if (start === arr.length - 1) return arr[start];
    return arr[start] * product(++start);
  }

  return product(start);
}

console.log(productOfArray([1,2,3]));
console.log(productOfArray([1,2,3,10]));