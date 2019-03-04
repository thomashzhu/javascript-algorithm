function countStr(str) {
  if (typeof str !== 'string') return null;

  const result = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}

function isAlphaNumeric(char) {
  return (char !== ' ' && (
    !Number.isNaN(Number(char)) || (char >= 'a' && char <= 'z')));
}

console.log(countStr('hello world!'))