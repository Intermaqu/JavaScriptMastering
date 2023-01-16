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

const powerAndModulo = (base, exponent, modulo) => {
  let result = base;
  for (let i = 1; i < exponent; i++) {
    result *= base;
    result %= modulo;
  }
  return result;
};

const findPrimeFactors = (set, number) =>{
    for(let i = 2; i < Math.sqrt(number); i++){
        while(number % i === 0){
            set.add(i)
            number /= i
        }
    }
    if(number > 2)
        set.add(number)

    return set
}


const findPrimitiveRoot = (number) =>{
    if(!isPrime(number)){
        return
    }
    let phi = number - 1
    let set = new Set()

    findPrimeFactors(set, phi)
    // console.log(set)
    let maxPrimitive
    for(let r = 2; r <= phi; r++){
        
        let flag = false
        for(let item of set){
            // console.log(item)
            if(powerAndModulo(r, phi/item, number) === 1){
                flag = true
                break
            }
            //console.log(r, item, powerAndModulo(r,phi/item,number))
        }
        if(!flag)
            maxPrimitive = r
    }
    return maxPrimitive
}


// console.log(generatePrime(1000));

const P = generatePrime(20000);
const ALPHA = findPrimitiveRoot(P)
const K = Math.floor(Math.random()*(P-1)) + 1

const BETA = powerAndModulo(ALPHA, K, P)

const MESSAGE = 10070
const X = Math.floor(Math.random()*(P-1)) + 1
const A = powerAndModulo(ALPHA, X, P)
const B = (MESSAGE * powerAndModulo(BETA, X, P)) % P

const MESSAGE2 = (B * powerAndModulo(A, P - 1 - K, P )) % P



console.log(`P: ${P}`)
console.log(`ALPHA: ${ALPHA}`)
console.log(`K: ${K}`)
console.log(`BETA: ${BETA}`)
console.log(`MESSAGE: ${MESSAGE}`)
console.log(`X: ${X}`)
console.log(`A: ${A}`)
console.log(`B: ${B}`)
console.log(`MESSAGE2: ${MESSAGE2}`)
console.log(`MESSAGE === MESSAGE2: ${MESSAGE === MESSAGE2}`)
console.log(MESSAGE, MESSAGE2)