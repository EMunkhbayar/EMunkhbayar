const express = require("express");
const path = require("path");
const session = require("express-session");
const Product = require("./model/product");
const prodController = require("./controller/product");
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, 'view/css')));
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'salt for cookie signing'
}));

let p1 = new Product("apple", 2, "This is Apple");
p1.save();
let p2 = new Product("orange", 1, "This is Orange");
p2.save();
let p3 = new Product("peach", 1.5, "This is Peach");
p3.save();

app.get("/", prodController.getAllProducts);
app.get("/product/:name", prodController.getDetail);
app.post("/addToCart", prodController.addToCart);
app.get("/cart", prodController.getAllProdsInCart);
app.listen(3000);
