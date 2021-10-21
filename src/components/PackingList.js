import React from 'react';
import { useState } from 'react';
import PackingListItem from './PackingListItem';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Form,  } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

function PackingList(selectedTrip) {
    const [packingList, setPackingList] = useState(selectedTrip.selectedTrip.packinglist)
    console.log(selectedTrip)
    console.log('list');
    console.log(packingList);
    library.add(faPlus);
    
    function addItem() {
        setPackingList(packingList => [
            ...packingList, 
                {
                  id: packingList.length + 1,
                  item_name: 'Wine Glasses',
                  checked: false,
                }])
    };

    return (
        <div>
            <h1>PACKING LIST: {selectedTrip.selectedTrip.location}</h1>
                <ListGroup>
                    {packingList.map((item, index) => (
                        <PackingListItem key={index} item={item} packingList={packingList}/>
                    ))}
                </ListGroup>
                <Form >
                    <Form.Group className="mb-3" id="packinglistbutton" packingList={packingList} setPackingList={setPackingList}>
                        <Form.Control  type="input" placeholder="Destination" />
                        <Button variant="outline-secondary" onClick={(e) => addItem() }><FontAwesomeIcon icon="plus"/></Button>
                    </Form.Group>
                </Form>
                <br/>
                <Link to={"/" + selectedTrip.selectedTrip.id}>
                    <Button className="button">Back</Button>
                </Link>

        </div>
    )
}

export default PackingList