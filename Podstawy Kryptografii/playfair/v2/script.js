let matrix
let hashmap

function init2dArray(cols, rows){
    let matrix = []
    for(let i=0;i<rows; i++){
        matrix[i] = new Array(cols)
    }
    return matrix
}

function distinct(value, index, self){
    return self.indexOf(value) === index;
}

function addXBetweenTheSameLetters(array){
    let tmp = []
    for(let i=0;i<array.length-1;i++){
        tmp.push(array[i])
        if(array[i] === array[i+1])
            tmp.push("X")
    }
    tmp.push(array[array.length-1])
    return tmp
}

function suplementArray(array){
    if(array.length%2 == 1){
        if(array[array.length-1] === 'X'){
            array.push('Q')
        } else {
            array.push('X')
        }
    }
    return array
}

function makePairs(array){
    let tmp = []
    let i=0
    while(i < array.length){
        tmp.push([array[i],array[i+1]])
        i+=2
    }
    return tmp
}

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

function fillMatrix(matrix, letters){
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            matrix[i][j] = letters.shift()
        }
    }
    return matrix
}

function fillMatrixHTML(matrix){
    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            let x = document.getElementById(`td${i}${j}`)
            x.innerHTML = matrix[i][j]
        }
    }
}

function findLetterInHashmap(x,y,hashmap){
    for(let key of Object.keys(hashmap)){
        if(hashmap[key].x == x && hashmap[key].y == y)
            return key
    }
}

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
        x2 = (secondCoords.x + 1) % rows
        y2 = secondCoords.y
        
    } else if (firstCoords.x === secondCoords.x && firstCoords.y !== secondCoords.y){
        //Same Col
        x1 = firstCoords.x
        y1 = (firstCoords.y + 1) % cols
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

function cipherMain(textPairs, cols, rows, hashmap){
    let message = []
    for(let i=0; i<textPairs.length;i++){
        let tmp = cipherPair(textPairs[i],cols,rows, hashmap)
        message.push(...tmp)
    }
    return message
}

function unCipherMain(text, cols, rows, hashmap){
    text = makePairs(text)
    let message = []
    for(let i=0; i<text.length; i++){
        let tmp = uncipherPair(text[i], cols, rows, hashmap)
        message.push(...tmp)
    }
    for(let i=1;i<message.length-1;i++){
        if(message[i] == 'X' && message[i-1] == message[i+1]){
            message.splice(i,1)
            i--
        }  
    }
    return message
}

function prepereKey(key){
    return key.toUpperCase().replace('J','I').split("").filter(char => /[A-Z]/.test(char)).filter(distinct)
}

function prepereMatrix(key){
    let alphabet = "abcdefghiklmnopqrstuvwxyz".toUpperCase().split("")
    alphabet = alphabet.filter((x) => key.indexOf(x) === -1)
    let keyAlphabetConcat = key.concat(alphabet)
    let matrix = init2dArray(5, 5)
    matrix = fillMatrix(matrix, keyAlphabetConcat)
    return matrix
}

function prepareText(text){ 
    text = text.toUpperCase().replace('J','I').split('').filter(char => /[A-Z]/.test(char))
    text = addXBetweenTheSameLetters(text)
    text = suplementArray(text)
    let textPairs = makePairs(text)
    return textPairs
}

const sub = document.getElementById('submit')
if( sub.addEventListener )
    sub.addEventListener('click', main, false)
else if (sub.attachEvent)
    sub.attachEvent('onclick', main)

const sub2 = document.getElementById('submit2')
if( sub2.addEventListener )
    sub2.addEventListener('click', mainCipher, false)
else if (sub.attachEvent)
    sub.attachEvent('onclick', mainCipher)

function main(){
    const myForm = document.getElementById('myForm')
    myForm.addEventListener("submit", (e) => {
        e.preventDefault();
    })

    let cip = document.getElementById('cipherCode').value
    console.log(cip)
    cip = prepereKey(cip)
    matrix = prepereMatrix(cip)
    hashmap = buildHashmapForMatrix(matrix)
    fillMatrixHTML(matrix)
}

function mainCipher(key, matrix, hashmap){
    const myForm2 = document.getElementById('myForm2')
    myForm2.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    let cip = document.getElementById('cipherCode').value
    cip = prepereKey(cip)
    matrix = prepereMatrix(cip)
    hashmap = buildHashmapForMatrix(matrix)
    let message = document.getElementById('message').value
    console.log(message)
    let x = document.getElementById('ciphered')
    let textPairs = prepareText(message)
    console.log(textPairs)
    let cipheredMessage = cipherMain(textPairs,5,5,hashmap)
    x.innerHTML = cipheredMessage.join('')
    let uncipheredMessage = unCipherMain(cipheredMessage,5,5,hashmap)
    console.log(uncipheredMessage.join(''))
}
