var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

absolutePath = __dirname + '/views/index.html';

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

function sendExpressFile(req, res)  {
    res.sendFile(absolutePath);
}

function sendJSON(req, res) {
    if(process.env.MESSAGE_STYLE == 'uppercase') {
        res.json(
            { "message": "HELLO JSON" }
        );
    } else {
        res.json(
            { "message": "Hello json" }
        );
    }  
}

app.get('/', sendExpressFile);
app.get('/json', sendJSON);

module.exports = app; 
