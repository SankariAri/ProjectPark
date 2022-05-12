import React from 'react';
import login from '../assets/images/login.jpg';

const Login = (props) => {

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