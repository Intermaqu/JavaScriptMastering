document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")


function calculate() {
    const food = document.getElementById("food-select").value
    const transport = document.getElementById("transport-select").value
    const baloons = document.getElementById("balloon-checkbox").checked
    
    if(food === "" || transport === ""){
        costEl.textContent = "Select Food and Transport"
    } else {
        let sum = parseInt(food) + parseInt(transport) + (baloons && 10)
        costEl.textContent = `$${sum}`
    }
}
 