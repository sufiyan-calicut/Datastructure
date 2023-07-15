// 4. Write a function to check if a given number is prime.

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (i % number == 0) return false;
  }
  return true;
}
let number = 7;
if (isPrime(number)) {
  console.log(`${number}is prime`);
} else {
  console.log(`${number}is not prime`);
}
