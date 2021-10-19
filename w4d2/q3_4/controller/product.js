const Product = require("../model/product");
const Cart = require("../model/cart");

exports.getAllProducts = (req, res, next) => {
    res.render("shop", { list: Product.getAll() })
};

exports.getDetail = (req, res, next) => {
    const itemNums = req.session.cart ? req.session.cart.length : 0;
    res.render("product", { product: Product.getDetail(req.params.name),
        itemNums: itemNums })
};

exports.addToCart = (req, res) => {
    const c = new Cart(req.body.name, req.body.price, req.body.qty);
    c.update(req.session);
    const itemNums = req.session.cart ? req.session.cart.length : 0;
    res.send(""+itemNums);
};

exports.getAllProdsInCart = (req, res, next) => {
    res.render("shoppingcart", { list: req.session.cart })
};