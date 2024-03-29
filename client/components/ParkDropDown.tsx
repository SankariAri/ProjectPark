import React from 'react';
import parkData from '../data/parkdata';
const parkNames = Object.keys(parkData)

const ParkDropDown = () => {
    
    return (
    <div className ='dropdown'>
        <h3>Select a Park: </h3>
       <select>
        {parkNames.map((park) => (
            <option value = {park}> {park} </option>
        ))}
       </select> 
    </div>
    )
}

export default ParkDropDown;