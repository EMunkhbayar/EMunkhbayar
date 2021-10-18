const products = [];
module.exports = class Product{
    constructor(name, price, desc){
        this.name = name;
        this.price = price;
        this.desc = desc;
    }
    save(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
    static getDetail(nameQ){
        return products.find(({ name }) => name === nameQ );
    }
};
