import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

function NewTripButton({setTrips, trips}) {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('');
    const [dates, setDates] = useState('');
    const [img, setImg] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log('hi');
    console.log(trips);
    console.log(location);
    console.log(dates);
    console.log(img);

    function updateTrips(location, img, dates) {
        setTrips(trips => [
            ...trips, 
                {
                  id: 10,
                  location: location,
                  packinglist: [],
                  img: img,
                  dates: dates,
                  active: true,
                }]);
    };        

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
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control type="input" placeholder="Destination" value={location} onChange={(e) => setLocation(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Travel Dates</Form.Label>
                            <Form.Control type="input" placeholder="Travel Dates" value={dates} onChange={(e) => setDates(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image (optional)</Form.Label>
                            <Form.Control type="input" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)}/>                            
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e) => updateTrips()}>
                            Create
                        </Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
}
export default NewTripButton
