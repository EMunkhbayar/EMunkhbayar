const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (req, res) => {
 res.send(`<form method="POST" action="/result">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
            <label for="age">Age:</label>
            <input type="text" id="age" name="age">
            <input type="submit" value="Submit">
            </form>`);
});
app.post('/result', urlencodedParser, (req, res) => {
    res.send(`Name: ${req.body.name} Age: ${req.body.age}`);
});

app.listen(3000);