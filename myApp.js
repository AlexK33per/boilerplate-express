var express = require('express');
var app = express();
require('dotenv').config();

absolutePath = __dirname + '/views/index.html';

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

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.get('/', sendExpressFile);
app.get('/json', sendJSON);
app.get('/now', (req, res, next) => {
    req.time = new Date.now.toString();
    next();
}, (req, res) => {
    res.json(
        { "time": req.time } 
    );
});

module.exports = app; 
