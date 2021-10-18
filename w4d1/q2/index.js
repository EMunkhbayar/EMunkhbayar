const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require("path");

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing'
}));
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
    req.session['name'] = req.body.name;
    req.session['age'] = req.body.age;
    res.redirect(`/output`);
});
app.get('/output', (req, res) => {
    res.send(`Name: ${req.session.name} Age: ${req.session.age}`);
});

app.listen(3000);