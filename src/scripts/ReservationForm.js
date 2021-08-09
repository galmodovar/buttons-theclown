import { sendReservation } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildAmount = document.querySelector("input[name='childAmount']").value
        const userPartyAddress = document.querySelector("input[name='partyAddress']").value
        const userLength = document.querySelector("input[name='length']").value
        const userPartyDate = document.querySelector("input[name='partyDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            childAmount: userChildAmount,
            partyAddress: userPartyAddress,
            length : userLength,
            partyDate: userPartyDate
        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})



export const ReservationForm = () => {
    let html = `
            <div class="field">
                <label class="label" for="parentName">Parent Name</label>
                <input type="text" name="parentName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="childName">Child Name</label>
                <input type="text" name="childName" class="input" />
            </div>
            <div class="field">
                <label class="label" for="childAmount">Number of Children</label>
                <input type="number" name="childAmount" class="input" />
            </div>
            <div class="field">
                <label class="label" for="partyAddress">Address</label>
                <input type="text" name="partyAddress" class="input" />
            </div>
            <div class="field">
                <label class="label" for="length">Length of Party (in Hours)</label>
                <input type="number" name="length" class="input" />
            </div>
            <div class="field">
                <label class="label" for="partyDate">Date needed</label>
                <input type="date" name="partyDate" class="input" />
            </div>
    
            <button class="button" id="submitRequest">Submit Request</button>
        `

    return html
}