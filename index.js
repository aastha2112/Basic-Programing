// function that takes a number as paramter called num, finds whether it is prime nunber and returns true or false,

function isPrime(num) {
  let isPrime = false;
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}
console.log(isPrime(3)); //true
console.log(isPrime(30)); //false
console.log(isPrime(23)); //true
