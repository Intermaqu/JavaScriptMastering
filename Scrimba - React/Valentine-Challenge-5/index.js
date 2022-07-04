const body = document.body
document.getElementById("btn").addEventListener("click", changeColor)

async function changeColor() {
    const request = await fetch("https://apis.scrimba.com/hexcolors/?count=2")
    const data = await request.json()
    const heart = document.getElementById("heart")
    body.style.background = data.colors[0].value
    heart.style.background = data.colors[1].value
   // 1. Call Scrimba's color API (https://apis.scrimba.com/hexcolors/) to retrieve one random color.
   // 2. Use that color to update the background color of the body.
}
