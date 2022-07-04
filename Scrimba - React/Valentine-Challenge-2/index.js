const greetingDisplay = document.getElementById("greeting-display")
const form = document.getElementById("form")

form.addEventListener("change", writeGreeting)


function writeGreeting() {
    const toGreeting = document.getElementById("recipient-input").value
    const selectedGreeting = document.getElementById("greeting-select").value
    const fromGreeting = document.getElementById("sender-input").value
    if(toGreeting && selectedGreeting && fromGreeting)
        greetingDisplay.textContent = `${fromGreeting} sends: ${selectedGreeting} to ${toGreeting}`
}
