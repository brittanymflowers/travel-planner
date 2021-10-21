import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function NewTripButton(setTrips, trips) {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [dates, setDates] = useState('');
    const [img, setImg] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function updateTrips() {
        setTrips(...trips, {
            id: 7,
            location: location,
            img: img,
            dates: dates,
            active: true,
        });
        console.log(trips);
        }

        return (
            <div>
                <Button className="button" variant='primary' size="lg" type="button" onClick={handleShow}>
                    + Add Trip
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Trip</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={updateTrips}>
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="input" placeholder="Destination" value={location} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Travel Dates</Form.Label>
                            <Form.Control type="input" placeholder="Travel Dates" value={dates} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image (optional)</Form.Label>
                            <Form.Control type="input" placeholder="Image URL" value={img} />                            
                        </Form.Group>
                        <Button variant="primary" type="submit" onSubmit={console.log('submitted')}>
                            Create
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
}
export default NewTripButton
