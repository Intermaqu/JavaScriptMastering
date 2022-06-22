// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM. 
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star 

const numOfStars = 100;
const galaxy = document.getElementById("galaxy");

for(let i = 0; i < numOfStars; i++){
    const star = document.createElement("img")
    const size = Math.random() * 60 + 10
    star.src =  i % 2 === 0 ? "star1.png" : "star2.png";
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    galaxy.appendChild(star)
}