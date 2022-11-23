const form = document.getElementById("form")
const input = document.getElementById("input-field")

form.addEventListener("submit", event => {
    event.preventDefault()
    validateEmail(input.value)
    input.value = ""
})


function validateEmail(mail) {
    if(mail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.querySelector(".error-msg").innerHTML = ""
        document.querySelector(".error-icon").style.display = "none"
        input.style.border = "1px solid hsl(0, 36%, 80%)"
        return true
    }
    else {
        document.querySelector(".error-msg").innerHTML = "Please provide a valid email"
        document.querySelector(".error-icon").style.display = "flex"
        input.style.border = "1px solid hsl(0, 93%, 68%)"
        return false
    }
}