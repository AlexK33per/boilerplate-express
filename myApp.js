var express = require('express');
var app = express();

absolutePath = __dirname + '/views/index.html';

function sendExpressFile(req, res)  {
    res.sendFile('/', absolutePath);
}

app.get('/', sendExpressFile);

module.exports = app; 
