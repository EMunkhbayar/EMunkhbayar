const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age = req.query.age;
 if (!name ) {
 name = "person";
 }
 if (!age ) {
    age = "NaN";
    }
 res.send(`Welcome ${name} (${age})`);
});
app.listen(3000);