let str = "asdsdf";

let seen = new Set();
let duplicates = new Set();

for (let char of str) {
  if (seen.has(char)) {
    duplicates.add(char);
  } else {
    seen.add(char);
  }
}

console.log(seen);
