document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

function filterDuplicates() {
    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    // 2. Render the unique emojis in uniqueEmojisP.
    uniqueEmojisP.textContent = new Array(...new Set(emojis)).join("")
    // Just for fun: Replace them with your favourite emojis! ๐ 
}
