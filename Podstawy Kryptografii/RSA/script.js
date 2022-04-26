const p = 31
const q = 19
const n = q * p
const phi = (q-1)*(p-1)
const alphabet = "abcdefghijklmnopqrstuvwxyz"



function is_prime(num){
    if(num < 2)
        return false
    for(let i = 2; i*i < num; i++){
        if(num % i == 0)
            return false
    }
    return true
}

function gcd(num1, num2){
    while(num2){
        let tmp = num2
        num2 = num1 % num2
        num1 = tmp      
    }
    return num1
}

let e

for(let i = 2; i < phi; i++){
    if(is_prime(i) && gcd(phi,i) == 1){
        e = i
        break
    }
}

let d = 2

while(true){
    if((e*d-1)%phi === 0){
        break
    } else {
        d += 1
    }
}

console.log(`d: ${d}, e: ${e}`)

let m = 8
/*
let tmp1 = bigInt(Math.pow(m,e))
let c = tmp1 % n

let tmp2 = bigInt(Math.pow(c,d))
let M = tmp2 % n

console.log(`c: ${c}, M: ${M}`)

console.log(Math.pow(c,d))
*/