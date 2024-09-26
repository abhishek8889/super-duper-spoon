const express = require('express')
const path = require('path');
const CONSTANTS = require('./config/constants');

const app = express()
require('./config/database');
const cors = require('cors');  // Import CORS middleware

const routes = require('./routes/api');

app.get('/', function (req, res) {
  res.send('Hello World')
});

// 

app.use(express.json());
app.use(cors());
app.use('/api',routes);

app.listen(8080)