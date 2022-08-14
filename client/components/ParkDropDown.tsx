import React from 'react';
import parkData from '../data/parkdata';


const ParkDropDown = () => {
    return (
    <div className ='dropdown'>
        <h3>Select a Park: </h3>
       <select>
           <option value = "yosemite"> Yosemite National Park</option>
           <option value = "yellowstone"> Yellowstone National Park</option>    
       </select> 
    </div>
    )
}

export default ParkDropDown;