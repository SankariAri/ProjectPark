import React from 'react';

const parks = {
    Yellowstone: { hikes: [
        {name:'Fairy Falls Trail', latitude:44.7341037505, longitude: -110.8324 },
        {name: 'Cascade Canyon Trail', latitude: 43.767190, longitude: -110.744270},
        {name: 'Grand Prismatic Hot Spring', latitude: 44.515430, longitude: -110.832510},
    
    ]},
    Yosemite: { hikes: [
        {},
        {},
        {},
    ]}
}

const ParkDropDown = () => {
    return (
    <div>
       <select>
           <option value = "yosemite"> Yosemite National Park</option>  
       </select> 
    </div>
    )
}

export default ParkDropDown;