const applicationState = {
    reservations: []

}


const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservation) => {
                // Store the external state in application state
                applicationState.reservations = reservation
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation}))
}

//Fetch call for POST
export const sendReservation = (userReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservation)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

//Fetch call for DELETE
export const deleteReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}