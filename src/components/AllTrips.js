import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Trip from './Trip'
import NewTripButton from './NewTripButton';

function AllTrips({trips}) {
    return (
        <div>
        <NewTripButton />
        <Container >
            <Row className='row'>
            {trips.map((trip, index) => (
                <Trip key={index} trip={trip} />
            ))}
            </Row>
        </Container>
        </div>
        
    )
}

export default AllTrips
