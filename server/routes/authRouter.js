// Routes match endpoints and HTTP methods. 
// Routes specify the order of the middleware and send the response back to the client. 
// In this file we are matching the login and sign up endpoints to the HTTP post methods
    //POST requests are meant to submit data to a specified source 
// We are also specifying the login and signup middleware. 

const express = require('express');
const userController = require('../controllers/userController');
const authRouter = express.Router();



// route for login

authRouter.post('/login',
    userController.login,
    (req, res) => {
        res.status(200).json({validAuth: true, user: res.locals.user})
    });


//route for signup 

authRouter.post('/signup', userController.signup, (req, res) => {
    console.log('test')
    return res.status(200).send('User successfully created');
});

module.exports = authRouter; 