import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Trip from './Trip'

function AllTrips({trips}) {
    return (
        <Container >
            <Row className='row'>
            {trips.map((trip, index) => (
                <Trip key={index} trip={trip} />
            ))}
            </Row>
        </Container>
    )
}

export default AllTrips
