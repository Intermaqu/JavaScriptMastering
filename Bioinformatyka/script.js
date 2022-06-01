import jsonData from "./x.json" assert {type: 'json'}
import Ant from "./ant.js"

const data = jsonData.data
const CUT_OFF = 1
const ANT_NUM = 50000


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

function rand(){
    return Math.floor(Math.random()*Matrix.length)
}

function fillMatrix(data){
    for(let i = 0;i<Matrix.length;i++){
        for(let j = 0; j<Matrix.length;j++){
            if(i === j){
                Matrix[i][j] = "X"
            } else {
                let tmp = match(data[i], data[j])
                if (tmp > maxMatchValue)
                    maxMatchValue = tmp
                Matrix[i][j] = tmp
            }
        }
    }
}    


// console.log(match('AAGGCCGGCT','ACACCCGCCG'))
let Matrix = generate2DArray(data.length)
let maxMatchValue = 0
fillMatrix(data)
// console.table(Matrix)

let a = new Ant(rand(), rand(), Matrix, maxMatchValue)
a.getPosition()
a.move()



