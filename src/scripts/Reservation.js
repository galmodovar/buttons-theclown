import { getReservations, deleteReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})


export const Reservations = () => {
    let items = getReservations()
   
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = items.map(item => {
            return `<li>
                ${item.parentName}
                ${item.childName}
                <button class="reservation__delete"
                id="reservation--${item.id}">
                Deny
                </button>
            </li>
            `

        
        
    })
        
        html += listItems.join("")
        html += "</ul>"
        
        return html
    }
