let arr = [3, 5, 7, 2, 8, 1, 4];

let max = Math.max(...arr);     // ...arr is the spread operator and becomes 3,5,7,2,8,1,4 because maths accepts 
                                // 3,5,7,2,8,1,4 as arguments not array
console.log("The maximum number is:", max);