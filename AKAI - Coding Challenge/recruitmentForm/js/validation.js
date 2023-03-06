let submit = document.querySelector('#submit');
submit.addEventListener('click', e => {
    e.preventDefault();
    console.log('submit clicked');
    firstName = document.querySelector('#first-name');
    lastName = document.querySelector('#last-name');
    email = document.querySelector('#email');

    formInputs = [firstName, lastName, email];
    
    let isFormValid = true;
    regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g //regex for email validation

    // Check if all inputs are filled
    for(let input of formInputs){
        if(input.value == ""){
            parentElement = document.querySelector(`#${input.id}-parent`);
            parentElement.classList.add("error")
            isFormValid = false
        }
    }
    
    // Clean ups
    for(let input of formInputs){
        if(input.value != ""){
            parentElement = document.querySelector(`#${input.id}-parent`);
            parentElement.classList.remove("error")
        }

    }
    
    // Check if email is valid as a guard clause
    if(!regex.test(email.value)){
        parentElement = document.querySelector(`#${email.id}-parent`);
        parentElement.classList.add("errorEmail")
        return;
    }
    
    // Clean up
    document.querySelector(`#${email.id}-parent`).classList.remove("errorEmail")
    
    // If form is not valid, return
    if(!isFormValid){
        return;
    }

    // Display data in console
    console.log(`First name: %c${firstName.value}`, "color:cyan");
    console.log(`Last name: %c${lastName.value}`, "color:cyan");
    console.log(`Email: %c${email.value}`, "color:cyan");

    checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let sectionChecked = Array.from(checkboxes).filter((chk) => chk.checked).map(chk => chk.id.split("-")[0]);
    console.log(`Sections: ${sectionChecked.join(", ") || "None"}`);
})
