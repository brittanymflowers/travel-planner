import React from 'react'
import { Card, Button } from 'react-bootstrap'
import {  BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Trip({trip}) {
    return (
        <>
            <Card id='tripCard' >
                <Card.Img className="cardImage" variant="top" src={trip.img} />
                <Card.Body>
                    <Card.Title>{trip.location}</Card.Title>
                    <Card.Text>{trip.dates}</Card.Text>
                    <Card.Text>{trip.active ? 'Active' : 'Past'}</Card.Text>
                    <Link to="/id">
                        <Button className="tripButton" variant='info'>Trip Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Trip
