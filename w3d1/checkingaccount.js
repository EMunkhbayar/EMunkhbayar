class CheckingAccount extends Account {
    constructor(name, overdraft){
        super(name);
        this.overdraft = overdraft;
    }

    getOverdraft(){
        return this.overdraft;
    }
    setOverdraft(overdraft){
        this.overdraft = overdraft;
    }
    withdraw(amount){
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this._balance - amount < this.overdraft) {
            throw Error("Overdrafting!");
        }
        this._balance -= amount;
    }
    toString(){
        return super.toString() + ", overdraft " + this.overdraft;
    }
    endOfMonth(){
        const warning = this.getBalance() < 0 ? "Warning, low balance " : "";
        return warning + this.toString();
    }
}