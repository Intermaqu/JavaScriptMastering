console.log("SITO ERASTOTENESA")

const N = 400
let numbers = []

function generateListOfConsecutiveNumbers(end){
    let nums = []
    for(let i = 0; i < end; i++)
        nums[i] = i+1
    return nums
}

function removeMultiplications(divisor, array){
    for(let number of array){
        if( number % divisor === 0 && number !== divisor){
            array.splice(array.indexOf(number),1)
        }
    }
    return array
}

numbers = generateListOfConsecutiveNumbers(N);

for(let i=0;numbers[i]<Math.sqrt(N);i++){
    if(numbers[i] < 2){
        continue
    }else{
        console.log(numbers[i])
        numbers = removeMultiplications(numbers[i],numbers)
        console.log(numbers)
    } 
}
console.log(`Primes: ${numbers}`)

