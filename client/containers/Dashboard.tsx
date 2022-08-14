import React from 'react';
import Header from '../components/Header';
import ParkDropDown from '../components/ParkDropDown';

const Dashboard = (props) => {
    return (
      <div className='dashboard'>
        <Header/>
        <ParkDropDown />
      </div>
    )
  }

  export default Dashboard