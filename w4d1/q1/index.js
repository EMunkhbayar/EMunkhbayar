const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
app.use(cookieParser("salt for cookie signing"));
app.use(express.urlencoded({extended: false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get("/", (req, res)=>{
    let html = `<!DOCTYPE html>
                <html lang="en">
                <head>
                <title>Form</title>
                <meta charset="utf-8">
                <link rel="stylesheet" href="/css/style.css">
                </head>
                <body>
                Add cookie
                    <form method='post' action='/add'>
                    <label for='key'>Key:</label>
                    <input type='text' id='key' name='key'>
                    <label for='val'>Value:</label>
                    <input type='text' id='val' name='val'>
                    <input type='submit' value='Add cookie'>
                    </form>
                Cookies:
                    <table>
                    <tr><th>Key</th><th>Value</th></tr>`;
    for(let key in req.cookies){
        html += `<tr><td>${key}</td><td>${req.cookies[key]}</td></tr>`;
    }
    html += `</table>`;
    res.send(html);
});
app.post("/add", (req, res)=>{
    if(!Object.keys(req.cookies).includes(req.body.key)) res.cookie(req.body.key, req.body.val, {maxAge: 2000*60*60});
    res.redirect("/");
});
app.listen(3000);