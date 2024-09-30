const express = require('express');
// const routes = express();
const publicRoutes = express.Router();
const protectedRoutes = express.Router();

const upload = require('../config/multerConfig');
const authenticateToken  = require('../app/Middleware/authMiddleware')

// Protected Routes (Token Required)
protectedRoutes.use(authenticateToken); // Apply JWT middleware to all protected routes

// ############# Controllers #############

const AuthController = require('../app/Controllers/Auth/AuthController');



// ############# Routes #############
publicRoutes.post('/register',upload.single('profileImage'),AuthController.registerUser);
publicRoutes.post('/login',AuthController.loginUser);
publicRoutes.get('/reg',function(req,res){
   res.send('hello');
})


// ############# Protected Routes are here #############
protectedRoutes.get('/test' ,authenticateToken , function( req , res) {
   res.send(req.user);
});






module.exports = {publicRoutes,protectedRoutes}// export the routes