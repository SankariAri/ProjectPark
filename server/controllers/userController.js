// Controllers are objects that hold custom middleware that manipulate data
// Passes control to next middleware or back to the router 

const db = require('../models/dbModel');
const userController = {}; 

// signup 

userController.signup = (req, res, next) => {
    console.log('ARI HERE')
    // step 1 validate input: 

    // step 2 create new user in database 
    const signUpQuery =  `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id;`;
    console.log(req.body);
    const {username, password} = req.body.userInfo;
    const params = [username, password] ; 
    
    db.query(signUpQuery, params)
        .then( r => {
            res.locals.newUserInfo = {id:r.rows[0].user_id};
            return next();
        })
        
        .catch(e => {
             /* Error handling if the username already exists */
             if (e.constraint === 'users_email_key') {
                const err = {
                    log: 'This email already exists.',
                    status: 400,
                    message: {err: 'This email already exists.'}
                  }
                  return next(err);
             }
        /* All other errors */
        return next(e);
    });
};

//login 

userController.login = (req, res, next) => {
    const {username, password} = req.body.userInfo;
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
         };
        // catch all error handler

    })
    .catch (err => {
        next ({
            log: `authController.login: ERROR: ${err}`,
            message: {err: `Error in authController.login`}
        });
    });

};



module.exports = userController; 