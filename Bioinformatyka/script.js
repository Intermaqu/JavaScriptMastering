const A = "ACTGCTGA"
const B = "CTGAGCTA"
const Data = [A,B]

let Matrix = generate2DArray(Data.length)

function generate2DArray(size){
    let matrix = new Array(size)
    for(let i=0;i<size;i++){
        matrix[i] = new Array(size)
    }
    return matrix
}

function unMatch(a,b){
    let len = 0
    for(let i = 1; i < b.length; i++){
        if(a.slice(a.length-i) === b.slice(0,i))
            len = i
    }
    return a.length - len
}

function fillMatrix(data){
    for(let i = 0;i<Matrix.length;i++){
        for(let j = 0; j<Matrix.length;j++){
            if(i === j){
                Matrix[i][j] = "X"
            } else {
                Matrix[i][j] = unMatch(data[i], data[j])
            }
        }
    }
}    


console.log(unMatch(B,A))
fillMatrix([A,B])
console.table(Matrix)

