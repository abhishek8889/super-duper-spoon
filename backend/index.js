const express = require('express')
const app = express()
require('./config/database');

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(8080)