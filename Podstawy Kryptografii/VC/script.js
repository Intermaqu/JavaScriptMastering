const width = 20
const height = 20
const MULT = 10
let matrix
let u1
let u2
let encodedMatrix

function generate2DMatrix(w,h){
    let m = new Array(h)
    for(let i=0;i<h;i++){
        m[i] = new Array(w).fill(0)
    }
    return m
}

function drawX(){
    for(let i = 0; i < width; i++){
        matrix[i][i] = 1
        matrix[i][width-1-i] = 1    
    }
}

function fillParticipants(){
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            let prob = Math.random()
            if(matrix[i][j] === 0){

                // WHITE PIXEL
                
                if(prob < 0.5){
                    u1[i][j*2] = 1
                    u1[i][j*2 + 1] = 0
                    u2[i][j*2] = 1
                    u2[i][j*2 + 1] = 0
                } else {
                    u1[i][j*2] = 0
                    u1[i][j*2 + 1] = 1
                    u2[i][j*2] = 0
                    u2[i][j*2 + 1] = 1
                }
            } else {
                
                // BLACK PIXEL

                if(prob < 0.5){
                    u1[i][j*2] = 1
                    u1[i][j*2 + 1] = 0
                    u2[i][j*2] = 0
                    u2[i][j*2 + 1] = 1
                } else {
                    u1[i][j*2] = 0
                    u1[i][j*2 + 1] = 1
                    u2[i][j*2] = 1
                    u2[i][j*2 + 1] = 0
                }
            }
        }
    }
}

function addMatrixes(m1, m2){
    let result = generate2DMatrix(width*2, height)
    for(let i=0; i<m1.length;i++){
        for(let j=0; j<m1[i].length;j++){
            result[i][j] = m1[i][j] + m2[i][j]
        }
    }
    return result
}

function encodeMatrix(m1){
    let enc = generate2DMatrix(width,height)

    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(m1[i][j*2] === 2 || m1[i][j*2 + 1] === 2){
                enc[i][j] = 0
            } else {
                enc[i][j] = 1
            }
        }
    }
    return enc
}

function drawOnCanvas(matrix, canvas){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j])
                canvas.fillRect(j*MULT,i*MULT,MULT,MULT)

        }
    }
}

function drawOnCanvasPart(matrix, canvas){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j])
                canvas.fillRect(j*MULT,i*MULT,MULT,MULT)
        }
    }
}


const c1 = document.getElementById("canvasMatrix")
const cM = c1.getContext("2d")
const c2 = document.getElementById("canvasPart1")
const cP1 = c2.getContext("2d")
const c3 = document.getElementById("canvasPart2")
const cP2 = c3.getContext("2d")
const c4 = document.getElementById("canvasEncoded")
const cE = c4.getContext("2d")
matrix = generate2DMatrix(width, height)
encodedMatrix = generate2DMatrix(width, height)
u1 = generate2DMatrix(width*2, height)
u2 = generate2DMatrix(width*2, height)
drawX()
fillParticipants()
let tmp = addMatrixes(u1,u2)
console.log(matrix)
console.log(u1)
console.log(u2)
console.log(tmp)
encodedMatrix = encodeMatrix(tmp)
console.log(encodedMatrix)

drawOnCanvas(matrix, cM)
drawOnCanvasPart(u1, cP1)
drawOnCanvasPart(u2, cP2)
drawOnCanvas(encodedMatrix, cE)
