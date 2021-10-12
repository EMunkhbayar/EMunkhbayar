const expect = chai.expect;

/* Testing class Account */

let acc = new Account(1234);
acc.deposit(500);

describe("Account.getNumber", function () {
    it("returns the account number",
        function () {
            assert.equal(1234, acc.getNumber());
        });
});

describe("Account.getBalance", function () {
    it("returns the account balance",
        function () {
            assert.equal(500, acc.getBalance());
        });
});

describe("Account.deposit", function () {
    it("add money into the account: 1500",
        function () {
            acc.deposit(1000);
            assert.equal(1500, acc.getBalance());
        });
    it("add money into the account: throws 'Deposit amount has to be greater than zero'",
        function () {
            // assert.equal('Deposit amount has to be greater than zero', acc.getBalance());
            expect(() => acc.deposit(-1500)).to.throw("Deposit amount has to be greater than zero");
        });
});

describe("Account.withdraw", function () {
    it("take money out of the account: 1400",
        function () {
            acc.withdraw(100);
            assert.equal(1400, acc.getBalance());
        });
    it("take money out of the account: throws 'Insufficient funds'",
        function () {
            expect(() => acc.withdraw(1500)).to.throw("Insufficient funds");
        });
});

describe("Account.toString", function () {
    it("representation of this account",
        function () {
            assert.equal('Account 1234: balance 1400', acc.toString());
        });
});

/* Testing class SavingsAccount */

let saving = new SavingsAccount(2222);
saving.setInterest(1.5);
saving.deposit(1000);

describe("SavingsAccount.addInterest", function () {
    it("deposits the interest amount into the account",
        function () {
            saving.addInterest();
            assert.equal(1015, saving.getBalance());
        });
});
describe("SavingsAccount.toString", function () {
    it("representation of this account",
        function () {
            assert.equal('Account 2222: balance 1015, interest 1.5', saving.toString());
        });
});

/* Testing class CheckingAccount */

let checking = new CheckingAccount(3333)
checking.setOverdraft(-1000);
checking.deposit(1500);

describe("CheckingAccount.withdraw", function () {
    it("take money out of the account: 1500-100=1400",
        function () {
            checking.withdraw(100);
            assert.equal(1400, checking.getBalance());
        });
    it("overdraft limit",
        function () {
            expect(()=>checking.withdraw(3000)).to.throw("Overdrafting!");
        });
});
describe("CheckingAccount.toString", function () {
    it("representation of this account",
        function () {
            assert.equal('Account 3333: balance 1400, overdraft -1000', checking.toString());
        });
});

/* Testing class Bank */

let bank = new Bank();
bank.addAccount();
bank.addAccount();
bank.addCheckingAccount(-2000);
bank.addAccount();
bank.addSavingsAccount(2);

describe("Bank.addAccount", function () {
    it("adds Account",
        function () {
            assert.equal(6, bank.addAccount());
        });
});
describe("Bank.addCheckingAccount", function () {
    it("adds CheckingAccount",
        function () {
            assert.equal(7, bank.addCheckingAccount(-300));
        });
});
describe("Bank.addSavingsAccount", function () {
    it("adds SavingsAccount",
        function () {
            assert.equal(8, bank.addSavingsAccount(1.6));
        });
});

describe("Bank.closeAccount", function () {
    it("removes account by account number: removes 4 /see browers's console/",
        function () {
            bank.closeAccount(4);
            console.log("accountReport:::::\n"+bank.accountReport());
            assert.equal("Account 1: balance 1000\nAccount 2: balance 1000\nAccount 3: balance 1000, overdraft -2000\nAccount 5: balance 1000, interest 2\nAccount 6: balance 0\nAccount 7: balance 0, overdraft -300\nAccount 8: balance 0, interest 1.6", bank.accountReport());
        });
});

bank.getAccounts().forEach(e=>{
    e.deposit(1000);
})

describe("Bank.endOfMonth", function () {
    it("endOfMonth report /see browers's console/",
        function () {
            console.log("endOfMonth:::::\n"+bank.endOfMonth());
            assert.equal("\n\nAccount 3: balance 1000, overdraft -2000\nInterest added SavingsAccount 5: balance: 1020 interest: 20.4\n\nAccount 7: balance 0, overdraft -300\nInterest added SavingsAccount 8: balance: 0 interest: 0", bank.endOfMonth());
        });
});

