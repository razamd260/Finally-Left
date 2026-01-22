let num = 17;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(
  isPrime
    ? `${num} is a prime number`
    : `${num} is not a prime number`
);
