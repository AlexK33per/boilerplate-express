var express = require('express');
var app = express();

absolutePath = __dirname + '/views/index.html';

app.use("/public", express.static(__dirname + "/public"));

function sendExpressFile(req, res)  {
    res.sendFile(absolutePath);
}

function sendJSON(req, res) {
    res.json().send('Hello json');
}

app.get('/', sendExpressFile);
app.get('/json', sendJSON);

module.exports = app; 
