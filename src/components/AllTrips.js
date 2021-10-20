import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Trip from './Trip'
import NewTripButton from './NewTripButton';

function AllTrips({trips, setTrips, selectedTrip, setSelectedTrip}) {
    console.log(trips);

    return (
        <div>
        <NewTripButton setTrips={setTrips} trips={trips}/>
        <Container >
            <Row className='row'>
            {trips.map((trip, index) => (
                <Trip key={index} trip={trip} selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip}/>
            ))}
            </Row>
        </Container>
        </div>
    )
}

export default AllTrips
