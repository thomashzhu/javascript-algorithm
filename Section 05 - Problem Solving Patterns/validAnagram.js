function validAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  const frequency = {};
  for (const char of str1) {
    frequency[char] = ++frequency[char] || 1;
  }

  for (const char of str2) {
    if (frequency[char] >= 1) {
      frequency[char] -= 1;
    } else {
      return false;
    }
  }
  
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));