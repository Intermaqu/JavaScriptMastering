const body = document.body
const formSubmit = document.getElementById("form-submit")
const form = document.getElementById("form")
const checkboxes = document.getElementsByClassName("checkbox")
const checkboxesContainer = document.getElementById("checkboxes-container")

form.addEventListener("change", handleChange)

function handleChange(){
    for(let item of checkboxes){
        if(item.checked){
            formSubmit.disabled = false
        }
    }
}

function handleSubmit(e){
    e.preventDefault()
    form.style.display="none"
    const name = document.getElementById("name").value
    const thank = document.createElement("h1")
    thank.textContent = `Thank you for pledge ${name}` 
    body.appendChild(thank)
}

form.addEventListener("submit", handleSubmit)
// Task: 

// Part 1: Add validation to check that the name and email fields are filled in and display a warning message if not (you might not need JS for this 😜).         
// Part 2: Hide the form and show a thank you message on submit.

// stretch goal 1️⃣:  Add warning styling if the name and email fields are empty (you might not need JS for this either)

// stretch goal 2️⃣:  Personalise the thank you message with the user's name.

// stretch goal 3️⃣:  Disable the button when no checkboxes are checked.



   