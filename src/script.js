let wrapp_two = document.querySelector(".wrapp-two");
wrapp_two.style.display = "none" 



document.getElementById('submit').addEventListener('click', function() {
    var emailInput = document.getElementById('em-input').value;
    var errorMessage = document.getElementById('error-message');
    
    // Regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput)) {
        // Email is valid
        errorMessage.textContent = ''; // Clear error message
        // Perform further actions (e.g., submit the form or process the email)
        console.log('Email is valid:', emailInput);
        document.getElementById("confirm-text").innerHTML = `A comfirmation email has been sent to ${emailInput} please open it and click the button inside it to confirm your subscription.`

        document.getElementById("wrapp").style.display = "none"
        document.querySelector(".container").classList.add("container-two")
        wrapp_two.style.display = ""

    } else {
        // Email is invalid
        errorMessage.textContent = 'Not valid!';
    }
});

//handle the dismiss btn
document.querySelector(".wrapp-two button").addEventListener("click", ()=>{
    location.reload()
})



