const text = "ABCD"
const text2 = "aBCD"
let startTime, endTime, duration;

function start(){
    startTime = performance.now()
}
function end(){
    endTime = performance.now()
    duration = endTime - startTime
    console.log(duration)
}

function hexToBin(hex){
    return hex.split('').map((letter) => parseInt(letter, 16).toString(2).padStart(4,'0')).join('')
}

function countOnes(binStr){
    return binStr.split('').map( x => parseInt(x)).reduce((prev, curr) => prev+curr)
}

function xorStrings(str1, str2){
    let result = []
    for(let i=0;i<str1.length;i++){
        result[i] = parseInt(str1[i]) ^ parseInt(str2[i])
    }
    return result.join('')
}



start()
const md5 = CryptoJS.MD5(text).toString()
end()
start()
const sha1 = CryptoJS.SHA1(text).toString()
end()
start()
const sha2 = CryptoJS.SHA256(text).toString()
end()
start()
const sha3 = CryptoJS.SHA3(text).toString()
end()



const md5bin = hexToBin(md5)
console.log(md5.length, md5bin.length)
console.log(sha1)
console.log(sha2)
console.log(sha3)

const md5Text1 = CryptoJS.MD5(text).toString()
const md5Text2 = CryptoJS.MD5(text2).toString()

const md5Text1bin = hexToBin(md5Text1)
const md5Text2bin = hexToBin(md5Text2)

console.log(md5Text1bin)
console.log(md5Text2bin)

const XOR = xorStrings(md5Text1bin,md5Text2bin)

console.log(countOnes(XOR)/128)
