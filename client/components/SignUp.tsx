import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../models/hooks';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';

const SignUp = (props: Props) => {
//component level state 
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


// hooks 
 const navigate = useNavigate();
 const dispatch = useAppDispatch();
 
 // registration handler function
 const handleRegister= async (e) => { 
    e.preventDefault()
    // validation 
    if (!username) return alert('Username field was left empty');
    if (!password) return alert('Password field was left empty');

    // calling dispatch with async thunk function
    const {payload} : any = await dispatch(registerUser({ username: username, password: password})); 
    if (payload === 200) {
        alert('Successfully registered. Redirecting to dashboard');
        return navigate('/dashboard');
      } else { return alert('User creation unsuccessful'); }

}


    return (
        <div>
            <h1>Project Park</h1>
            <h3>Sign up to plan your next National Park trip </h3>
            <form action="">
                <div>
                    <input className = 'field' id ="Username" placeholder="Username" 
                    onChange={(e) => {setUsername(e.target.value)}}/>
                </div>
                <div>
                    <input className ='field' id ="Password" placeholder="Password" 
                    onChange={(e) => {setPassword(e.target.value)}} />
                </div>
                <div>
                    <button 
                        className = 'button' 
                        onClick = {handleRegister}> 
                        Register 
                    </button>
                </div>
            </form>
        </div>
    )
}
interface Props {}

export default SignUp;