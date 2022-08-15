import React, { useState, useEffect } from 'react';
import login from '../assets/images/login.jpg';
import {useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../features/store';
// import { loginUser } from '../features/user/userSlice';


const Login = (props) => {
    // component level state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // redux state 
    // const user = useSelector((state: RootState) => state.user.auth);

    // hooks 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // login handler function
    const handleLogin = async () => {
        if (password === '') return alert('Password field was left empty');
        if (email === '') return alert('Email field was left empty');
        
        navigate('/dashboard');
    }

    return (
        <div className = 'wrapper'>
        <h1> Project Park </h1>
        <img className='loginimg' src= {login} /> 
        <form className = 'loginbx'>
            <div>
                <input className = 'field' id ="Username" placeholder="Username" onChange={(e)=>{ setEmail(e.target.value)} } />
            </div>
            <div>
                <input className ='field' id ="Password" placeholder="Password"  onChange={e => setPassword(e.target.value) }  />
            </div>
            <div>
                <button className = 'button' onClick={handleLogin} > Login </button>
            </div>
            <div className = 'signupbx'>
             <p> Don't have an account? <a onClick={() => { navigate('/signup')} }  style={{cursor: 'pointer'}}>Sign Up</a></p>
         </div>
         </form>
         
        </div>
    )

}

export default Login;