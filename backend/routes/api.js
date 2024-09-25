const express = require('express');
const routes = express();

// ############# Controllers #############

const AuthController = require('../app/Controllers/Auth/AuthController');

routes.post('/register',AuthController.registerUser);
routes.get('/reg',function(req,res){
   res.send('hello');
})
module.exports = routes; // export the routes