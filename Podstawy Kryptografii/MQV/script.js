const button = document.getElementById("button")

const isPrime = (number) => {
    if(number < 2)
        return false
    for(let i = 2; i*i < number; i++){
        if(number % i == 0)
            return false
    }
    return true
}

const powerAndModulo = (base, exponent, modulo) =>{
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

const findHugePrime = (startingNumber) =>{
    while(true){
        if(isPrime(startingNumber))
            return startingNumber 
        startingNumber++;
    }
}

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
    let primitive
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



const main = () => {
    const p1 = document.getElementById("person1").value
    const p2 = document.getElementById("person2").value

    const N = findHugePrime(100000)
    const G = findPrimitiveRoot(N)
    const x = parseInt(N / 2)
    const X = powerAndModulo(G, x, N)
    const y = parseInt(N / 3)
    const Y = powerAndModulo(G, y, N)
    
    const a = Math.floor(Math.random() * 1000)
    const b = Math.floor(Math.random() * 1000)

    const A = powerAndModulo(G,a,N)
    const B = powerAndModulo(G,b,N)

    const YtoB = powerAndModulo(Y, B, N)
    const XtoA = powerAndModulo(X, B, N)

    const _B = (B * YtoB)
    const _A = (A * XtoA)

    const kA = powerAndModulo(_B, (x*A + a), N)
    const kB = powerAndModulo(_A, (x*B + b), N)


    console.log("N and G:", N, G)
    console.log(`Big Prime: ${N}, Primitive ROot: ${G}`)
    console.log(`Random Exponent a: ${a}, Random Exponent b: ${b}`)
    console.log(`G^a: ${A}, G^b: ${B}`)
    console.log("YtoB and XtoA:", YtoB, XtoA)
    console.log("_A", _A)
    console.log("_B", _B)
    console.log("kA and kB:", kA, kB)
    

}

button.addEventListener("click", main)