import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function ToDoList(selectedTrip) {
    return (
        <div>
            <h1>TO DO LIST</h1>
            <Link to={"/id:" + selectedTrip.selectedTrip.id}>
                <Button className="button">Back</Button>
            </Link>
        </div>
    )
}

export default ToDoList