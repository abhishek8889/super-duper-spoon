const express = require('express')
const path = require('path');
const CONSTANTS = require('./config/constants');

const app = express()
require('./config/database');
const cors = require('cors');  // Import CORS middleware

const {publicRoutes , protectedRoutes} = require('./routes/api');
// const routes = require('./routes/api');


app.get('/', function (req, res) {
  res.send('Hello World')
});

// 

app.use(express.json());
app.use(cors());
app.use('/api',publicRoutes);
app.use('/api',protectedRoutes);

app.listen(8080)