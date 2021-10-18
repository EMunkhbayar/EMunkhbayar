// const cart = []
module.exports = class Cart{
    constructor(name, price, qty){
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    static getAll(){
        return this;
    }
    update(mysession){
        if(mysession.cart){
            let prod = mysession.cart.find(({ name }) => name === this.name );
            if(prod){
                prod.price = this.price;
                prod.qty = this.qty;
            }
            else{
                mysession.cart.push(this);
            }
        }else{
            mysession['cart'] = [this];
        }
        
    }
}