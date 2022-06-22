const countdownDisplay = document.getElementById("countdown-display")
const rocket = document.getElementById("rocket")
let timeRemaining = 60

// Task: 
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

let fail = Math.random() > 0.05 ? false : true;

const start = () => {
    if(timeRemaining > 0){
        timeRemaining--;
        countdownDisplay.innerHTML = timeRemaining;
    } else if (timeRemaining > -5) {
        timeRemaining--;
        if(!fail)
            rocket.classList.add("rocket_start")
    } else {
        if(!fail){   
            rocket.id="rocket_end"
        } else {      
            countdownDisplay.innerHTML = "ROCKET FAILED"
        }
    }
}

window.setInterval(start, 1000)

// Stretch goals: 
// 1) Add fire under the rocket. 
// 2) Randomly don’t launch the rocket when the timer reaches 0.


