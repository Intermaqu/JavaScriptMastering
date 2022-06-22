const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

for(let item of planets){
    const h = `${item.diameter/1000}px`
    console.log(item)
    const planet = document.createElement("div")
    const text = document.createElement("p");
    text.innerHTML = item.name;
    planet.style.background = item.color;
    planet.style.height = h;
    planet.style.width = h;
    planet.style.borderRadius = "50%";
    planet.style.color = "red";
    planet.style.fontWeight = 700;
    planet.style.textAlign = "center";
    planet.style.lineHeight = h;
    text.style.display = "none";
    planet.onmouseover = () => {
        text.style.display = "inline";
    }
    planet.onmouseout = () => {
        text.style.display = "none";
    }
    planet.classList.add("planet")
    planet.style.background = `linear-gradient(90deg, ${item.color} 51%, black 51%)`;
    planet.appendChild(text)
    solarSystem.appendChild(planet);
}

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// // - 2. Make one side of the planets dark (you can do this with one CSS property!)
//     let planet = document.createElement("div");
//     planet.id = item.name;
//     planet.style.width = item.diameter/1000;
//     planet.style.height = item.diameter/1000;
//     planet.style.borderRadius = "50%";
//     planet.style.background = item.color;
//     planet.classList.add("planet")
//    solarSystem.appendChild(planet);