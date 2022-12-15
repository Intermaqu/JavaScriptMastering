// import sha256 from "crypto-js/sha256"
// import md5 from "crypto-js/md5"

var Crypto = require("crypto-js")

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


function powerAndModulo(base, exponent, modulo){
    let c = 1
    for(let i=0;i<exponent;i++){
        c = (c*base) % modulo
    }
    return c
}


const generateE = (phi) => {
    for(let i = 2; i < phi; i++){
        if(is_prime(i) && gcd(phi,i) == 1){
            return i
        }
    }
}

const fixD = (e, d, phi) => {
    while(true){
        if((e*d-1)%phi === 0){
            break
        } else {
            d += 1
        }
    }
    return d
}

const p = 31
const q = 19
const n = q * p
const phi = (q-1)*(p-1)
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let message = "Kuba"
let e = generateE(phi)
let d = fixD(e, 2, phi)


console.log(`d: ${d}, e: ${e}`)

// Hash - SHA256
const hLen = 256














message = message.toLowerCase().split('')
let crypted = []
for(letter of message){
    crypted.push(powerAndModulo(alphabet.indexOf(letter), e, n))
}

console.log(message, crypted.join(' '))

let decrypted = []
for(cryptedNumber of crypted){
    decrypted.push(alphabet[powerAndModulo(cryptedNumber, d, n)])
}

console.log(decrypted.join(''))
console.log(Crypto.MD5("OHI"))


