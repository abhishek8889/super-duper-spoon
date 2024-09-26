const express = require('express');
const routes = express();
const upload = require('../config/multerConfig');

// ############# Controllers #############

const AuthController = require('../app/Controllers/Auth/AuthController');

routes.post('/register',upload.single('profileImage'),AuthController.registerUser);
routes.get('/reg',function(req,res){
   res.send('hello');
})
module.exports = routes; // export the routes