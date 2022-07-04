const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10]
const reusableCupDiscount = 0.5
const coffeePrice = 3
const dailySavings = document.getElementById("daily-savings")
const total = document.getElementById("total-p")
const newDay = document.getElementById("add-new-coffee-day")
const savingsPerDayArr = []

newDay.addEventListener("click", handleAddDay)
window.onload = initial()
 
function initial(){
  for(let coffee of coffeesPerDay){
    savingsPerDayArr.push(coffee * reusableCupDiscount)
  }
  for(let i = 0; i < coffeesPerDay.length; i++){
    handleDay(i)
  }
  total.textContent = prepereTotal()
}

function prepereTotal(){
  return `Total saving: $${savingsPerDayArr.reduce((prev, curr) => prev + curr).toFixed(2)}`
}

function handleAddDay(){
  const coffee = document.getElementById("new-coffee").value
  coffeesPerDay.push(coffee)
  savingsPerDayArr.push(coffee * reusableCupDiscount)
  handleDay(coffeesPerDay.length-1)
  total.textContent = prepereTotal()
  document.getElementById("new-coffee").value = ""
}

function handleDay(i){
  const p = document.createElement("p")
  p.textContent = `Day ${i+1}: $${savingsPerDayArr[i].toFixed(2)}`
  dailySavings.appendChild(p)
}

// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.

// stretch goal 1️⃣: Show the total savings 

// stretch goal 2️⃣: Add an input to add more entries to coffeesPerDay

// stretch goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50

  
