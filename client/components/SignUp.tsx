import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
// hooks 
 const navigate = useNavigate();

 // login handler function
 const handleRegister= async () => { 
    navigate('/dashboard');
}

    return (
        <form>
            <div>
                <input className = 'field' id ="Username" placeholder="Username" />
            </div>
            <div>
                <input className ='field' id ="Password" placeholder="Password" />
            </div>
            <div>
                <button className = 'button' onClick = {handleRegister}> Register </button>
            </div>
        </form>
    )
}


export default SignUp;