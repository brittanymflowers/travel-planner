import React from 'react'
import { Button } from 'react-bootstrap'
import {  Link } from "react-router-dom";

function TripDetails({selectedTrip}) {
    console.log(selectedTrip);

    return (
        <div>
            <div>
            <h1>TRIP DETAILS</h1>
            <Link to={"/id:" + selectedTrip.id + "/packinglist"}>
                <Button className="button">Packing List</Button>
            </Link>
            <Link to={"/id:" + selectedTrip.id + "/todolist"}>
                <Button className="button">To-Do List</Button>
            </Link>
            <Link to={"/id:" + selectedTrip.id + "/agenda"}>
                <Button className="button">Agenda</Button>
            </Link>
            </div>
            <div>
            <Link to="/">
                <Button className="button">Back to Home</Button>
            </Link>
            </div>
        </div>
    )
}

export default TripDetails