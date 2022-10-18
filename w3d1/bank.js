class Bank {
  static nextNumber;
  #_accounts;

  constructor() {
    this.#_accounts = [];
    Bank.nextNumber = 0;
  }

  getAccounts() {
    return this.#_accounts;
  }

  addAccount() {
    const number = ++Bank.nextNumber;
    this.#_accounts.push(new Account(number));
    return number;
  }

  addSavingsAccount(interest) {
    const number = ++Bank.nextNumber
    this.#_accounts.push(new SavingsAccount(number, interest));
    return number;
  }

  addCheckingAccount(overdraft) {
    const number = ++Bank.nextNumber
    this.#_accounts.push(new CheckingAccount(number, overdraft));
    return number;
  }

  closeAccount(number) {
    if (this.#_accounts.length > 0) {
      const closeAccount = this.#_accounts.find(acc => acc.getNumber() == number);
      if (closeAccount) {
        this.#_accounts = this.#_accounts.filter(acc => acc.getNumber() != number);
        Bank.nextNumber--;
      } else {
        throw Error(`The account number ${number} does not exist.`);
      }
    } else {
      throw Error(`The account list is empty.`);
    }
  }

  accountReport() {
    return this.#_accounts.join("\n");
  }

  endOfMonth() {
    if (this.#_accounts.length > 0) {
      return this.#_accounts.reduce((acc, currentAcc) => {
        acc.push(currentAcc.endOfMonth());
        return acc;
      }, []);
    }
  }
}