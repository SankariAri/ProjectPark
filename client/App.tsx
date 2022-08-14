
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


import Login from './components/Login';
import Dashboard from './containers/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
           <Routes>
             <Route path = '/' element = {<Login/>} />
             <Route path = 'dashboard' element = {<Dashboard/>} />
            </Routes>
        </BrowserRouter>
     
        
    );
}

export default App; 