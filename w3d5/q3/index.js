const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use('/css', express.static(path.join(__dirname, 'css')));
const hour = new Date().getHours();
const cssFile = hour>6 && hour<=18 ? '/css/day.css' : '/css/night.css';

app.get('/', (req, res) => {
 res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
            <title>Form</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="${cssFile}">
            </head>
            <body>
                <form method="POST" action="/result">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">
                <label for="age">Age:</label>
                <input type="text" id="age" name="age">
                <input type="submit" value="Submit">
                </form>
            </body>
            </html>`);
});
app.post('/result', urlencodedParser, (req, res) => {
    res.send(`Name: ${req.body.name} Age: ${req.body.age}`);
});

app.listen(3000);