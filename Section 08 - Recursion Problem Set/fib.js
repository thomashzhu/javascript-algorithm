function fib(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(28));
console.log(fib(35));