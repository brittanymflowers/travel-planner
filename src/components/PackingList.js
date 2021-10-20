import React from 'react'
import { useState } from 'react';
import PackingListState from '../State/PackingListState';
import PackingListItem from './PackingListItem';
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'

function PackingList(selectedTrip) {
    const [packingList, setPackingList] = useState(PackingListState)
    console.log(selectedTrip);

    return (
        <div>
            <h1>PACKING LIST</h1>
                <ListGroup>
                {packingList.map((item, index) => (
                <PackingListItem key={index} item={item} packingList={packingList}/>
            ))}
                </ListGroup>
                <Link to={"/id:" + selectedTrip.selectedTrip.id}>
                    <Button className="button">Back</Button>
                </Link>

        </div>
    )
}

export default PackingList