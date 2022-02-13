function init2D(cols, rows){
  let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++){
    arr[i] = new Array(rows)
  }
  return arr
}

let resolution = 40;
let cols;
let rows;
let matrix;


function setup() {
  createCanvas(400, 400);
  cols = width / resolution;
  rows = height / resolution;
  matrix = init2D(cols,rows)
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      matrix[i][j] = floor(random(2));
    }
  }
}

function draw() {
  background(0)
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      x = i*resolution;
      y = j*resolution;
      if(matrix[i][j] == 1){
        fill(255);
        stroke(0);
        rect(x, y, resolution-1, resolution-1)
      }
    }
  }
  
  let next = init2D(cols, rows);
  
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      
      
    }
  }
  
}

function countNeighbors(i,j,matrix){
      if(i == 0 || j == 0 || i == cols-1 || j == rows-1)
        next[i][j] = grid[i][j];
      
}