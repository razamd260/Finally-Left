let isPrime = true;
let num = 20;
if(num <= 1){
    isPrime = false;    
}else{
    for(let j=2 ; j<=num; j++){
       let isPrime = true;
    for(let i=2;i<=Math.sqrt(j);i++){
        if(j % i === 0){
            isPrime = false;
        }           
   }
   console.log(isPrime ? `${j} is a prime number` : `${j} is not a prime number`);
}
}

