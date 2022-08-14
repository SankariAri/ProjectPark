import React from 'react';
import login from '../assets/images/login.jpg';

const Login = (props) => {

    // function to handle log in. Need: 
    // error handling if fields are left empty 
    //update state 
    //retrieve existing data 
    //navigate to dashboard 
    // error for incorrect login credentials 

    return (
        <div className = 'wrapper'>
        <h1> Project Park </h1>
        <img className='loginimg' src= {login} /> 
        <form className = 'loginbx'>
            <div>
                <input className = 'field' id ="Username" placeholder="Username" />
            </div>
            <div>
                <input className ='field' id ="Password" placeholder="Password" />
            </div>
            <div>
                <button className = 'button'> Login </button>
            </div>
            <div className = 'signupbx'>
             <p> Don't have an account? Sign Up</p>
         </div>
         </form>
         
        </div>
    )

}

export default Login;