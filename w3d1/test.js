const depositNumber = 100000;
const negativeNumber = -100000;
const firstWithraw = 50000;

describe("Account", function() {
  let number = 1;
  let account;

  beforeEach(function () {
    account = new Account(number);
  })

  describe("constructor", function() {
    it(`Expected output of Account constructor is correct.`, function () {
      assert.equal(number, account.getNumber());
      assert.equal(0, account.getBalance());
    });
  });

  describe(`deposit`, function() {
    it(`Expected output of Account balance is ${depositNumber} after depositing`, function () {
      account.deposit(depositNumber);
      assert.equal(depositNumber, account.getBalance());
    });

    it(`Throw an exception when depositing a negative number ${negativeNumber}`, function () {
      assert.throws(() => account.deposit(negativeNumber), RangeError);
    });
  });

  describe(`withdraw`, function() {
    it(`Throw an exception when withdrawing negative number ${negativeNumber}`, function () {
      assert.throws(() => account.withdraw(negativeNumber), RangeError);
    });

    it(`Throw an exception when Insufficient funds`, function () {
      assert.throws(() => account.withdraw(10000000), Error);
    });

    it(`Expected output of account balance after withdrawing ${firstWithraw}`, function () {
      account.deposit(depositNumber);
      const currentBalance = account.getBalance();
      account.withdraw(firstWithraw);
      assert.equal(currentBalance - firstWithraw, account.getBalance());
    });
  });

  describe("toString", function() {
    it(`Expected output of Account.toString() is correct.`, function () {
      assert.equal(`Account ${account.getNumber()}: balance ${account.getBalance()}`, account.toString());
    });
  });

  describe("endOfMonth", function() {
    it(`Expected output of Account.endOfMonth() is ""`, function () {
      assert.equal("", account.endOfMonth());
    });
  });
});

describe("SavingsAccount", function() {
  const savingsAccountId = 3;
  const interest = 5;
  let savingsAccount;
  
  beforeEach(function () {
    savingsAccount = new SavingsAccount(savingsAccountId, interest);
  });

  describe(`constructor`, function() {
    it(`Expected output of SavingsAccount constructor is correct.`, function () {
      assert.equal(savingsAccountId, savingsAccount.getNumber());
      assert.equal(0, savingsAccount.getBalance());
      assert.equal(interest, savingsAccount.getInterest());
    });
  });

  describe(`deposit`, function() {
    it(`Deposit - Expected output of account balance is ${depositNumber} after depositing`, function () {
      savingsAccount.deposit(depositNumber);
      assert.equal(depositNumber,  savingsAccount.getBalance());
    });

    it(`Deposit - Throw an exception when depositing negative number ${negativeNumber}`, function () {
      assert.throws(() => savingsAccount.deposit(negativeNumber), RangeError);
    });
  });

  describe(`withdraw`, function() {
    it(`Withdraw - Throw an exception when withdrawing negative number ${negativeNumber}`, function () {
      assert.throws(() => savingsAccount.withdraw(negativeNumber), RangeError);
    });

    it(`Withdraw - Throw an exception when Insufficient funds when withdrawing 10000000`, function () {
      assert.throws(() => savingsAccount.withdraw(10000000), Error);
    });

    it(`Withdraw - Expected output of account balance after withdrawing ${firstWithraw}`, function () {
      savingsAccount.deposit(depositNumber);
      const currentBalance = savingsAccount.getBalance();
      savingsAccount.withdraw(firstWithraw);
      assert.equal(currentBalance - firstWithraw, savingsAccount.getBalance());
    });
  });

  describe(`toString`, function() {
    it(`Expected output of savingsAccount.toString() is correct.`, function () {
      savingsAccount.deposit(depositNumber);
      const output = `SavingsAccount ${savingsAccount.getNumber()}: balance ${savingsAccount.getBalance()}: interest ${savingsAccount.getInterest()}`;
      assert.equal(output, savingsAccount.toString());
    });
  });

  describe(`addInterest`, function() {
    it(`Interest - Expected output of account balance after adding interest`, function () {
      savingsAccount.deposit(depositNumber);
      const currentBalance = savingsAccount.getBalance();
      savingsAccount.addInterest();
      const newBalance = currentBalance + ((currentBalance * interest)/100);
      assert.equal(newBalance, savingsAccount.getBalance());
    });
  });

  describe("endOfMonth", function() {
    it(`Expected output of savingsAccount.endOfMonth() is correct`, function () {
      savingsAccount.deposit(depositNumber);
      const result = savingsAccount.endOfMonth();
      assert.equal(`Interest added ${savingsAccount.toString()}`, result);
    });
  });
});



describe("CheckingAccount", function() {
  const checkingAccountId = 3;
  const overdraftLimit = 10000;
  let checkingAccount;

  beforeEach(function () {
    checkingAccount = new CheckingAccount(checkingAccountId, overdraftLimit);
    checkingAccount.deposit(depositNumber);
  });

  describe(`constructor`, function() {
    it(`Expected output of CheckingAccount constructor is correct.`, function () {
      checkingAccount = new CheckingAccount(checkingAccountId, overdraftLimit);
      assert.equal(checkingAccountId,  checkingAccount.getNumber());
      assert.equal(0,  checkingAccount.getBalance());
      assert.equal(overdraftLimit,  checkingAccount.getOverdraftLimit());
    });
  });

  describe(`deposit`, function() {
    it(`Expected output of account balance is ${depositNumber}  after depositing`, function () {
      assert.equal(depositNumber ,  checkingAccount.getBalance());
    });

    it(`Throw an exception when depositing negative number ${negativeNumber}`, function () {
      assert.throws(() => checkingAccount.deposit(negativeNumber), RangeError);
    });
  });

  describe(`withdraw`, function() {
    it(`Throw an exception when withdrawing negative number ${negativeNumber}`, function () {
      assert.throws(() => checkingAccount.withdraw(negativeNumber), RangeError);
    });

    it(`Throw an exception when withdrawing 10000000 which overdrafting limit is exceeded`, function () {
      assert.throws(() => checkingAccount.withdraw(10000000), Error);
    });

    const withdrawAmount = depositNumber + overdraftLimit;
    it(`Expected output of account balance after withdrawing ${withdrawAmount}`, function () {
      const currentBalance = checkingAccount.getBalance();
      checkingAccount.withdraw(withdrawAmount);
      assert.equal(currentBalance - withdrawAmount, checkingAccount.getBalance());
    });

  });

  describe(`toString`, function() {
    it(`Expected output of CheckingAccount.toString() is correct.`, function () {
      const output = `CheckingAccount ${checkingAccount.getNumber()}: balance ${checkingAccount.getBalance()}: overdraft limit ${checkingAccount.getOverdraftLimit()}`;
      assert.equal(output, checkingAccount.toString());
    });
  });

  describe(`constructor`, function() {
    
  });

  describe("endOfMonth", function() {
    it(`Expected output of CheckingAccount.endOfMonth() is correct`, function () {
      checkingAccount.withdraw(depositNumber + 100);
      const result = checkingAccount.endOfMonth();
      assert.equal(`Warning, low balance ${checkingAccount.toString()}`, result);
    });
  });
});

describe(`Bank`, function() {
  let bank;
  beforeEach(function () {
    bank = new Bank();
  });

  describe(`constructor`, function() {
    it(`Expected output of CheckingAccount constructor is correct.`, function () {
      assert.equal('', bank.accountReport());
      assert.equal(0, Bank.nextNumber);
    });
  });

  describe(`addAccount`, function() {
    it(`Expected output of Bank.addAccount() is correct`, function () {
      assert.equal(1, bank.addAccount());
    });
  });

  describe(`addSavingsAccount`, function() {
    it(`Expected output of Bank.addSavingsAccount() is correct`, function () {
      assert.equal(1, bank.addSavingsAccount(5));
    });
  });

  describe(`addCheckingAccount`, function() {
    it(`Expected output of Bank.addCheckingAccount() is correct `, function () {
      assert.equal(1, bank.addCheckingAccount(1000));
    });
  });

  describe(`accountReport`, function() {
    const output = 'Account 1: balance 0\nSavingsAccount 2: balance 0: interest 5\nCheckingAccount 3: balance 0: overdraft limit 1000';
    it(`Expected output is correct when getting accountReport`, function () {
      bank.addAccount();
      bank.addSavingsAccount(5);
      bank.addCheckingAccount(1000);
      assert.equal(output,  bank.accountReport());
    });
  });

  describe(`closeAccount`, function() {
    it(`Throw an exception when closing an account that does exist.`, function () {
      bank.addAccount();
      assert.throws(() => bank.closeAccount(111), Error);
    });

    it(`Expected output of Bank.closeAccount() is correct.`, function () {
      bank.addAccount();
      bank.addSavingsAccount(5);
      bank.addCheckingAccount(1000);
      bank.closeAccount(1);
      assert.equal(2, bank.getAccounts().length);
    });

    it(`Throw an exception when closing an empty accounts`, function () {
      assert.throws(() => bank.closeAccount(3), Error);
    });
  });

  describe(`endOfMonth`, function() {
    const output = [
      '',
      'Interest added SavingsAccount 2: balance 102.5: interest 2.5',
      'Warning, low balance CheckingAccount 3: balance -100: overdraft limit 500'
    ];
    it(`Expected output is correct when calling endOfMonth() of Bank`, function () {
      bank.addAccount();
      bank.addSavingsAccount(2.5);
      bank.addCheckingAccount(500);
    
      const accounts = bank.getAccounts();
      accounts[1].deposit(100);
      accounts[2].deposit(100);
      accounts[2].withdraw(200);
      const result = bank.endOfMonth()
      assert.deepEqual(output, result);
    });
  });
});
