document.getElementById("btn").addEventListener("click", correct)


function correct() {
    
    const paragraph = document.getElementById("paragraph")
    paragraph.textContent = paragraph.textContent.toLowerCase().split("").map((element, index)=> (
        index === 0 ? element.toUpperCase() : element.toLowerCase()
    )).join("")
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
    // It should read "Valentine's"
    // Render the corrected message to the DOM.
    
}
