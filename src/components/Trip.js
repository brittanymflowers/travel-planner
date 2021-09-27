import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Trip({trip}) {
    return (
        <>
            <Card id='tripCard' >
                {/* <Card.Img variant="top" src='travel-planner/public/pcb.png' /> */}
                <Card.Body>
                    <Card.Title>{trip.location}</Card.Title>
                    <Card.Text>{trip.dates}</Card.Text>
                    <Card.Text>{trip.active ? 'Active' : 'Past'}</Card.Text>
                    <Button >Details</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Trip
