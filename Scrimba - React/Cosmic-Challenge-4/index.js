const solarSystem = document.getElementById("solarSystem")
const planetsObj = [
    {
    "name": "Mercury",
    "moons": 0
    },
    {
    "name": "Venus",
    "moons": 0
    },
    {
    "name": "Earth",
    "moons": 1
    },
    {
    "name": "Mars",
    "moons": 2
    },
    {
    "name": "Jupiter",
    "moons": 67
    },
    {
    "name": "Saturn",
    "moons": 62
    },
    {
    "name": "Uranus",
    "moons":27
    },
    {
    "name": "Neptune",
    "moons": 14
    }
]

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load 
// - 2: Make the planet names bold.



for(let planet of planetsObj){
    const element = document.createElement("div")
    element.classList.add("planet")
    let numberOfMoons = 0;
    element.innerHTML = `<span class="bold">${planet.name}</span>: <span id=${planet.name}>${numberOfMoons}</span> moons`
    const interval = setInterval(() => {
        if(numberOfMoons >= planet.moons){
            clearInterval(interval)
        }
        document.getElementById(planet.name).textContent = numberOfMoons++
    },200)
    solarSystem.appendChild(element)
}

