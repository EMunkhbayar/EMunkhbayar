const Product = require("./product")

const cart = []
module.exports = class Cart{
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    static getAll(){
        return cart;
    }
    update(){
        let prod = cart.find(({ name }) => name === this.name );
        if(prod){
            prod.price = this.price;
            prod.qty = this.qty;
        }
        else{
            cart.push(this);
        }
    }
}