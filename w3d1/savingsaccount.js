class SavingsAccount extends Account{
    constructor(name, interest){
        super(name);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }
    setInterest(interest){
        this._interest = interest;
    }
    addInterest(){
        const interest = (this._balance * this._interest) / 100;
        if (interest > 0) super.deposit(interest);
        return interest;
    }
    toString(){
        return super.toString() + ", interest " + this._interest;
    }
    endOfMonth(){
        return "Interest added SavingsAccount " + this._number + ": balance: "+this._balance+" interest: "+this.addInterest();
    }
}