// Controllers are objects that hold custom middleware that manipulate data
// Passes control to next middleware or back to the router 


const db = require('../models/dbModel');
const authController = {}; 

//login 

authController.login = (req, res, next) => {
    const {username, password} = req.body;
    const params = [username]; 
    // need to query the database for user inputted username and password 
    const query = 'SELECT from users WHERE username = $1';
    db.query(query, params)
    .then(results => {
         // if username doesn't exist send false back for valid authentication 
         if (results.rows.length === 0) {
             res.send({validAuth: flase})
         // if username exists in db and password matches, save users info to res.locals and pass to next middleware
         } else if (results.rows[0].password === password) {
             console.log('password matched!');
             res.locals.user = result.rows[0];
            return next (); 
        // if username exists but password doesn't match send false back for valid authentication and log the error
         } else {
             console.log('password not matched');
             res.send({validAuth:false})
         }
        // catch all error handler

    })
    .catch (err => {
        next ({
            log: `authController.login: ERROR: ${err}`,
            message: {err: `Error in authController.login`}
        });
    });

}

// signup 

authController.signup = (req, res, next) => {
    const {username, password} = req.body;
    const params = [username]; 
    // need to query the database for user inputted username and password 
    const query = 'SELECT from users WHERE username = $1';
    db.query(query, params)
    .then( results => {
        // if the username already exists,means username is already taken, return valid auth false 
        if (result.rows[0]) {
            res.send({validAuth:false})
        } else {
        // if username doesnt exist, create user 
        const signUpParams = [username, password];
        const createUserQuery = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
        db.query(createUserQuery, signUpParams)
        .then (result => {
            // save the username password to res.locals 
            res.locals.user = result.rows[0]
            return next (); 
        });

        }
       
    })
    .catch (err => {
        next ({
            log: `authController.login: ERROR: ${err}`,
            message: {err: `Error in authController.signup`}
        });
    });
};

module.exports = authController; 