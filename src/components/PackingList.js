import React from 'react';
import { useState } from 'react';
import PackingListItem from './PackingListItem';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

function PackingList(selectedTrip) {
    const [packingList, setPackingList] = useState(selectedTrip.selectedTrip.packinglist)
    console.log(selectedTrip)
    console.log(packingList);
    library.add(faPlus);
    
    return (
        <div>
            <h1>PACKING LIST: {selectedTrip.selectedTrip.location}</h1>
                <ListGroup>
                    {packingList.map((item, index) => (
                        <PackingListItem key={index} item={item} packingList={packingList}/>
                    ))}
                </ListGroup>
                <Button variant="outline-secondary" onChange={console.log('clicked')}><FontAwesomeIcon icon="plus"/></Button>
                <br/>
                <Link to={"/" + selectedTrip.selectedTrip.id}>
                    <Button className="button">Back</Button>
                </Link>

        </div>
    )
}

export default PackingList