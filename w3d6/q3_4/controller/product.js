const Product = require("../model/product");
const Cart = require("../model/cart");

exports.getAllProducts = (req, res, next) => {
    res.render("shop", { list: Product.getAll() })
};

exports.getDetail = (req, res, next) => {
    res.render("product", { product: Product.getDetail(req.params.name) })
};

exports.addToCart = (req, res) => {
    const c = new Cart(req.body.name, req.body.price, req.body.qty);
    c.update();
    res.redirect(303, "/cart");
};

exports.getAllProdsInCart = (req, res, next) => {
    res.render("shoppingcart", { list: Cart.getAll() })
};