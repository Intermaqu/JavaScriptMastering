function isPrime(n){
    if(n < 2)
        return false
    for(let i = 2; i*i <= n; i++){
        if(n % i == 0)
            return false
    }
    return true
}
/*
function generatePandQ(n){
    let iter = 1
    let k = 2
    let m = 2
}
*/
console.log(isPrime(998))

