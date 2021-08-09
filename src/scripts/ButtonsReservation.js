import { Reservations } from "./Reservation.js"
import { ReservationForm } from "./ReservationForm.js"


export const Buttons = () => {
    return `
    <h1>Buttons the Clown</h1>
    <section class="reservationForm">
        ${ ReservationForm() }
    </section>

    <section class="reservationRequests">
        <h2>Reservation Requests</h2>
        ${ Reservations() }
    </section>
    ` 
}