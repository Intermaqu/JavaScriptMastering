function init2D(cols, rows){
  let arr = new Array(cols);
  for(let i = 0; i < cols; i++){
    arr[i] = new Array(rows)
  }
  return arr
}

let resolution = 10;
let cols;
let rows;
let matrix;
let prob = 25;
let framerate = 10


function randomProb(){ 
  return floor(random(100)) >= prob ? 0 : 1; 
}

function setup() {
  createCanvas(600, 400);
  cols = width / resolution;
  rows = height / resolution;
  console.log(cols,rows)
  matrix = init2D(cols,rows)
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      matrix[i][j] = randomProb();
    }
  }
}

function draw() {
  frameRate(framerate)
  background(0)
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      let x = i*resolution;
      let y = j*resolution;
      if(matrix[i][j] == 1){
        fill(255);
        stroke(0);
        rect(x, y, resolution-1, resolution-1)
      }
    }
  }
  matrix = nextMatrix();
}

function nextMatrix(){
  let next = init2D(cols, rows);
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      let living = matrix[i][j]
      let num = countNeighbors(i,j,matrix)
      
      if(living == 0 && num == 3)
        next[i][j] = 1;
      else if(living == 1 && (num == 2 || num == 3)){
        next[i][j] = 1;
      } else {
        next[i][j] = 0;
      }
    }
  }
  return next
}
  

function countNeighbors(i,j,matrix){
  let sum = 0;
  let around = {
    0: [-1,-1],
    1: [-1,0],
    2: [-1,1],
    3: [0,1],
    4: [1,1],
    5: [1,0],
    6: [1,-1],
    7: [0,-1]
  }

  for(let k=0;k<8;k++){
    let x = i+around[k][0]
    let y = j+around[k][1]
    if(x >= 0 && x< cols && y >= 0 && y < rows)
      sum += matrix[x][y]
  }
  return sum
}











