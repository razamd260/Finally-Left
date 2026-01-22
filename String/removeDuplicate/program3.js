let str = "abcdeabcd";
let arr = str.split('');
let obj = {};

for(let char of arr){
    obj[char] = ( obj[char] || 0 ) + 1;
}

for(let key in obj){
    if(obj[key] > 1){
        console.log(key ,' : ' ,obj[key]);    
    }
}

