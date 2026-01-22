let char = ['A', 'd', 'a', 'c', 'b','B', 'e'];
char.sort((a,b) => a.localeCompare(b));
console.log("Sorted array in ascending order(using sort function):", char.join(","));