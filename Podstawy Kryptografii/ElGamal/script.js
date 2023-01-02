const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const generatePrime = (num) => {
  num = parseInt(num);
  while (true) {
    if (isPrime(num)) return num;
    num += 1;
  }
};

const powerModulo = (base, exponent, modulo) => {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
    result %= modulo;
  }
  return result;
};

// console.log(generatePrime(1000));

const P = generatePrime(1000);
const ALPHA = P - 11;
const k = Math.floor(Math.random() * (P - 1) + 1);

// console.log(`P: ${P}`);
// console.log(`ALPHA: ${ALPHA}`);
// console.log(`k: ${k}`);

// const BETA =

console.log(powerModulo(2, 4, 10));
