var express = require('express');
var app = express();

absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static(__dirname + "/public"));

function sendExpressFile(req, res)  {
    res.sendFile(absolutePath);
}

app.get('/', sendExpressFile);

module.exports = app; 
