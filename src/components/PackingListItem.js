import React from 'react'
import { ListGroupItem } from 'react-bootstrap'

function PackingListItem({item}) {

    // const handleClick = () => {
    //     setSelectedTrip(trip);
    // }

    return (
        <>
            <ListGroupItem>{item.item_name}</ListGroupItem>
        </>
    )
}
export default PackingListItem
