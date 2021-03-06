import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Agenda(selectedTrip) {
    return (
        <div>
            <h1>AGENDA: {selectedTrip.selectedTrip.location}</h1>
            <Link to={"/" + selectedTrip.selectedTrip.id}>
                <Button className="button">Back</Button>
            </Link>
        </div>
    )
}

export default Agenda