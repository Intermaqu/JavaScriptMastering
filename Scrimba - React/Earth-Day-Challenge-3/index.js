const pointsEl = document.getElementById("points-p")
const actionsEl = document.getElementById("actions-p")
const btnsContainer = document.getElementById("btns-container")
const body = document.querySelector("body")
let pointsCounter = 0
let actionsCounter = 0
const actionsArr = [
 {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false
  }
]

function renderBtns(){
  
  for(let item of actionsArr){
    const btn = document.createElement("button")
    btn.innerText = `${item.emoji} ${item.text}`
    btn.style.width = "40%"
    btn.style.height = "100px"
    btn.style.margin = "5px"
    btn.style.fontSize = "20px"
    btn.onclick = ()=>{
      item.good ? pointsCounter += 5 : pointsCounter -=5;
      pointsEl.textContent = `${pointsCounter} points today!`
      actionsCounter += 1
      actionsEl.textContent = `${actionsCounter} actions today!`
      body.style.background = pointsCounter >= 0 ? "#96E072" : "#D05959"
    }
    btn.style.background = item.good ? "#96E072" : "#D05959"
    btnsContainer.appendChild(btn)
  }
  // 1. Render buttons onto page
  // 2. Update points
  }

renderBtns()


// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show: 
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click


// stretch goal 1️⃣: Change each button color, green for good activities, red for bad.

// stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3️⃣: Add an activity count.

