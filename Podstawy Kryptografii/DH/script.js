


function isPrime(number){
    if(number < 2)
        return false
    for(let i = 2; i*i < number; i++){
        if(number % i == 0)
            return false
    }
    return true
}

function powerAndModulo(base, exponent, modulo){
    let c = 1
    base = base % modulo
    while(exponent > 0){
        if(exponent & 1)
            c = (c*base) % modulo
        exponent = parseInt(exponent / 2) 
        base = (base * base) % modulo
    }
    return c
}

function findHugePrime(startingNumber){
    while(true){
        if(isPrime(startingNumber))
            return startingNumber 
        startingNumber++;
    }
}

function findPrimeFactors(set, number){
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



function findPrimitiveRoot(number){
    if(!isPrime(number)){
        return
    }
    let phi = number - 1
    let set = new Set()

    findPrimeFactors(set, phi)
    let primitive
    console.log(set)
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



const N = findHugePrime(12000)
const G = findPrimitiveRoot(N)
const x = parseInt(N / 2)
const X = powerAndModulo(G, x, N)
const y = parseInt(N / 3)
const Y = powerAndModulo(G, y, N)
const kA = powerAndModulo(Y,x,N)
const kB = powerAndModulo(X,y,N)
console.log(N, G)
console.log(X, Y)
console.log(kA,kB)