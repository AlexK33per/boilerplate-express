var express = require('express');
var app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

absolutePath = __dirname + '/views/index.html';

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(__dirname + "/public"));

//Global functions

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

// Routers

app.get('/', sendExpressFile);

app.get('/json', sendJSON);

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json(
        { "time": req.time } 
    );
});

app.get('/:word/echo', (req, res) => {
    res.json(
        {
            "echo": req.params.word
        }
    );
});

app.route('/name')
    .get((req, res) => {
        res.json({
            "name": `${req.query.first} ${req.query.last}`
        });
    })

    .post((req, res) => {
        res.json({
            "name": `${req.body.first} ${req.body.last}`
        });
    });

module.exports = app; 
