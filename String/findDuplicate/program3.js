let str = "asdsdf";

let duplicates = [...str].filter((char, index, arr) => arr.indexOf(char) !== index);
console.log(new Set(duplicates));


