let numbers = [1, 10,5, 2, 8, 1, 9, 3];
for(let i=0; i<numbers.length; i++){
   for(let j=i+1;j<numbers.length;j++){
     if(numbers[i]> numbers[j]){
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
   }
}
}

console.log("Sorted array in ascending order(using nested loop):", numbers.join(","));