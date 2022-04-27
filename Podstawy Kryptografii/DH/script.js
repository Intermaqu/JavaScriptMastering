


function powerAndModulo(base, exponent, modulo){
    let c = 1
    for(let i=0;i<exponent;i++){
        c = (c*base) % modulo
    }
    return c
}