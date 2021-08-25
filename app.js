const port = 8000;
const hostname = '0.0.0.0';

const express = require('express')
const app = express()
var path = require('path');

app.get('/hello', function (req, res) {
  res.send('Hello World')
})

app.use(express.static(path.join(__dirname, 'public'))); 

app.listen(port, hostname)