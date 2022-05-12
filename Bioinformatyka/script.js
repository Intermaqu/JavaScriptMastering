import jsonData from "./x.json" assert {type: 'json'}

const data = jsonData.data;
const CUT_OFF = 1;



function generate2DArray(size){
    let matrix = new Array(size)
    for(let i=0;i<size;i++){
        matrix[i] = new Array(size)
    }
    return matrix
}

function match(a,b){
    let len = 0
    for(let i = CUT_OFF; i < b.length; i++){
        // console.log(a.slice(0,i), b.slice(b.length-i))
        if(a.slice(0,i) === b.slice(b.length-i)){
            len = i
        }    
    }
    return len
}

function fillMatrix(data){
    for(let i = 0;i<Matrix.length;i++){
        for(let j = 0; j<Matrix.length;j++){
            if(i === j){
                Matrix[i][j] = "X"
            } else {
                Matrix[i][j] = match(data[i], data[j])
            }
        }
    }
}    


// console.log(match('AAGGCCGGCT','ACACCCGCCG'))
let Matrix = generate2DArray(data.length)
fillMatrix(data)
console.table(Matrix)

