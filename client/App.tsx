
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'


import Login from './components/Login';
import Dashboard from './containers/Dashboard';
import SignUp from './components/SignUp';

const App = () => {
    return (
        <BrowserRouter>
           <Routes>
             <Route path = '/' element = {<Login/>} />
             <Route path = 'signup' element = {<SignUp/>} />
             <Route path = 'dashboard' element = {<Dashboard/>} />
            </Routes>
        </BrowserRouter>
     
        
    );
}

export default App; 