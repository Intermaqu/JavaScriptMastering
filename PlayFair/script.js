let key = "executjve"
let alphabet = "abcdefghiklmnopqrstuvwxyz".toUpperCase().split("")
let text = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.".toUpperCase().split("");
let matrix
let hashmap
let cols = 5
let rows = 5
let cipheredMessage = []
let uncipheredMessage = []



// In playfair letter j == i
// Function changes all j to i
function changeJToI(array){
    for(let i=0; i<array.length;i++){
        if(array[i] === 'J')
        array[i] = 'I'
    }
    return array
}

// Initialization 2D array cols X rows
function init2dArray(cols, rows){
    let matrix = []
    for(let i=0;i<rows; i++){
        matrix[i] = new Array(cols)
    }
    return matrix
}


// Removing repeated values from array
function distinct(value, index, self){
    return self.indexOf(value) === index;
}


// Adding X between the same letters - AA => AXA
function addXBetweenTheSameLetters(array){
    let tmp = []
    for(let i=0;i<array.length-1;i++){
        tmp.push(array[i])
        if(array[i] === array[i+1])
            tmp.push("X")
    }
    return tmp
}


//If array.length is odd function adds letter at the end. If last letter equals X adds Q otherwise adds X
function suplementArray(array){
    if(array%2 == 1){
        if(array[array.length-1] === 'X'){
            array.push('Q')
        } else {
            array.push('X')
        }
    }
    return array
}


//Slicing array into array of pair [a,b,c,d] => [[a,b],[c,d]]
function makePairs(array){
    let tmp = []
    let i=0
    while(i < array.length){
        tmp.push([array[i],array[i+1]])
        i+=2
    }
    return tmp
}


//This function is building hashmap of letters in array
//As a key takes letter and as a parameters take x: column, y: row in matrix
// e.g. 'N': {x:0, y:0} 
function buildHashmapForMatrix(matrix){
    let hashmap = {}
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            letter = matrix[j][i]
            hashmap[letter] = {'x': i, 'y': j}
        }       
    }
    return hashmap
}


//this function fills 2D matrix with string - key + alphabet with no repeated letters
function fillMatrix(matrix, letters){
    for(let i=0;i<cols;i++){
        for(let j=0;j<rows;j++){
            matrix[i][j] = letters.shift()
        }
    }
    return matrix
}


//Returns Letter with specified indexes
function findLetterInHashmap(x,y,hashmap){
    for(let key of Object.keys(hashmap)){
        if(hashmap[key].x == x && hashmap[key].y == y)
            return key
    }
}


//this function returns ciphered pair of letters using our hashmap key
function cipherPair(toCipher, cols, rows, hashmap){
    let first = toCipher[0]
    let second = toCipher[1]
    let firstCoords = hashmap[first]
    let secondCoords = hashmap[second]
    let x1,x2,y1,y2
    let firstCiphered
    let secondCiphered

    if(firstCoords.y === secondCoords.y && firstCoords.x !== secondCoords.x){
        //Same Row  
        x1 = (firstCoords.x + 1) % cols
        y1 = firstCoords.y
        x2 = (secondCoords.x + 1) % cols
        y2 = secondCoords.y
        
    } else if (firstCoords.x === secondCoords.x && firstCoords.y !== secondCoords.y){
        //Same Col
        x1 = firstCoords.x
        y1 = (firstCoords.x + 1) % rows
        x2 = secondCoords.x
        y2 = (secondCoords.y + 1) % rows

    } else {
        //Diffrent Row and Col
        x1 = secondCoords.x
        y1 = firstCoords.y
        x2 = firstCoords.x
        y2 = secondCoords.y
    } 
    firstCiphered = findLetterInHashmap(x1,y1, hashmap)
    secondCiphered = findLetterInHashmap(x2,y2, hashmap)
    return [firstCiphered, secondCiphered]
}


//this function is using to uncipher pair
function uncipherPair(uncipher, cols, rows, hashmap){
    let x1,x2,y1,y2,firstUnciphered, secondUnciphered
    let first = uncipher[0]
    let second = uncipher[1]
    let firstCoords = hashmap[first]
    let secondCoords = hashmap[second]

    if(firstCoords.y === secondCoords.y && firstCoords.x !== secondCoords.x){
        //Same Row  
        x1 = firstCoords.x - 1
        y1 = firstCoords.y
        x2 = secondCoords.x - 1
        y2 = secondCoords.y
        
    } else if (firstCoords.x === secondCoords.x && firstCoords.y !== secondCoords.y){
        //Same Col
        x1 = firstCoords.x
        y1 = firstCoords.x - 1
        x2 = secondCoords.x
        y2 = secondCoords.y - 1

    } else {
        //Diffrent Row and Col
        x1 = secondCoords.x
        y1 = firstCoords.y
        x2 = firstCoords.x
        y2 = secondCoords.y
    } 
    if(x1 < 0)
        x1 += cols
    if(x2 < 0)
        x2 += cols
    if(y1 < 0)
        y1 += rows
    if(y2 < 0)
        y2 += rows
    firstUnciphered = findLetterInHashmap(x1,y1, hashmap)
    secondUnciphered = findLetterInHashmap(x2,y2, hashmap)
    return [firstUnciphered, secondUnciphered]
}


//this function is calling cipherPair for all pairs in message to cipher
function cipherMain(textPairs, cols, rows, hashmap){
    let message = []
    for(let i=0; i<textPairs.length;i++){
        let tmp = cipherPair(textPairs[i],cols,rows, hashmap)
        message.push(...tmp)
    }
    return message
}


//this function is calling uncipherPair for all pairs in message to uncipher
function unCipherMain(text, cols, rows, hashmap){
    text = makePairs(text)
    let message = []
    for(let i=0; i<text.length; i++){
        let tmp = uncipherPair(text[i], cols, rows, hashmap)
        message.push(...tmp)
    }
    return message
}


//Change key j to i and reduce all repeated values
key = key.toUpperCase().split("")
key = changeJToI(key)
key = key.filter(distinct)

//Remove all values from alphabet which are in key and concat with key
alphabet = alphabet.filter((x) => key.indexOf(x) === -1)
let keyAlphabetConcat = key.concat(alphabet)

//initialize 2d array and fill it with concated key
matrix = init2dArray(cols, rows)
matrix = fillMatrix(matrix, keyAlphabetConcat)

//build hashmap based on matrix
hashmap = buildHashmapForMatrix(matrix)

//remove all non alphabetic values and add between repeated letters X
let textReduced = text.filter(char => /[A-Z]/.test(char))
textReduced = addXBetweenTheSameLetters(textReduced)
//If array.length is odd add letter at the end and then pair up all letters
textReduced = suplementArray(textReduced)
let textPairs = makePairs(textReduced)

//ciphering message 
cipheredMessage = cipherMain(textPairs, cols, rows, hashmap)
cipheredMessage = cipheredMessage.join('')
console.log(cipheredMessage)

//unciphering message
uncipheredMessage = unCipherMain(cipheredMessage,cols,rows,hashmap).join("")

console.log(uncipheredMessage)
console.log(textReduced.join(""))