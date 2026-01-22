let s = "hello";
let str = s.split('');
let seen = '';

for (let char1 of str) {
    if (!seen.includes(char1)) {
        seen = seen + char1;
    }
}
console.log(seen);