let numbers = [1, 10, 5, 2, 8, 1, 9, 3,2];
let map = new Map();
for(let item of numbers){
    map.set(item, (map.get(item) || 0) + 1);
}

for(let [key, value] of map){
    if(value > 1){
        console.log(`${key}`+ " occurs " + `${value} times`);
    }
}