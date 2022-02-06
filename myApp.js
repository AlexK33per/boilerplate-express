var express = require('express');
var app = express();

function sendExpressMessage(req, res)  {
    res.send('Hello Express');
}

app.get('/', sendExpressMessage);

 module.exports = app; 
