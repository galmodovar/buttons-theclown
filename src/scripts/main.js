import { Buttons } from "./ButtonsReservation.js"
import { fetchRequests } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests().then(
        () => {
    mainContainer.innerHTML =  Buttons()
}
    )
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})