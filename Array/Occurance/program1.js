let numbers = [1, 10, 5, 2, 8, 1, 9, 3];
let obj = {};

for(let item of numbers){
    obj[item] = (obj[item] || 0) + 1;
}

for(let key in obj){
    if(obj[key] > 1){
        console.log(`${key}`+ " occurs " + `${obj[key]} time`);
    }
}