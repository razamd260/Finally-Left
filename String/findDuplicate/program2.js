let str = "abcdeabcd";
let arr = str.split('');
const duplicateChar = new Set(arr);
console.log(duplicateChar);