import React from 'react'

function PackingListItem({item}) {

    // const handleClick = () => {
    //     setSelectedTrip(trip);
    // }
    return (
        <div class="center">
            <div class="listItem">
                <h4>{item.item_name}</h4>
            </div>
        </div>
    )
}
export default PackingListItem
