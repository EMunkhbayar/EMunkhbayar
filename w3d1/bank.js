class Bank {
    constructor(){
        this._accounts = [];
    }
    static _nextNumber = 1;

    getNextNumber(){
        return Bank._nextNumber ++;
    }

    addAccount(){
        const accNumber = this.getNextNumber();
        let acc = new Account(accNumber);
        this._accounts[accNumber] = acc;
        return accNumber;
    }
    addSavingsAccount(interest){
        const accNumber = this.getNextNumber();
        let acc = new SavingsAccount(accNumber, interest);
        this._accounts[accNumber] = acc;
        return accNumber;
    }
    addCheckingAccount(overdraft){
        const accNumber = this.getNextNumber();
        let acc = new CheckingAccount(accNumber, overdraft);
        this._accounts[accNumber] = acc;
        return accNumber;
    }
    closeAccount(number){
        this._accounts = this._accounts.filter(e => e.getNumber() !== number);
    }
    accountReport(){
        return this._accounts.map(e => e.toString()).join("\n");
    }
    endOfMonth(){
        return this._accounts.map(e => e.endOfMonth()).join("\n");
    }
    getAccounts(){
        return this._accounts;
    }
}