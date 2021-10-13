let emailCollectorForm = document.getElementById("Email-Collector")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()
    let ourFormData = new FormData(event.target)
    let firstName = ourFormData.get("firstName")
    let emailAddress = ourFormData.get("EmailAddress")
    let updatedHtmlContent = `
        <h2>Congratulations, ${firstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">You will get weekly BBQ tips sent to ${emailAddress}</p>`
    let updatedContent = document.getElementById("Main-Content")
    updatedContent.innerHTML = updatedHtmlContent
})