const express = require('express')
const path = require('path');
const CONSTANTS = require('./config/constants');

const app = express()
require('./config/database');
const cors = require('cors');  // Import CORS middleware

const {publicRoutes , protectedRoutes} = require('./routes/api');

app.use(express.json());
app.use(cors());
app.use('/api',publicRoutes);
app.use('/api',protectedRoutes);

app.listen(8080)