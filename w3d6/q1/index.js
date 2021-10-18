const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
const date = new Date();
let cssFile = date.getHours() > 6 && date.getHours() <=18 ? "/css/day.css" : "/css/night.css";
app.get('/', (req, res) => {
 res.render("index", {
 time: date.toTimeString(),
 cssFile: cssFile
 });
});
app.listen(3000);