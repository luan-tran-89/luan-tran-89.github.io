class CheckingAccount extends Account {
  constructor(number, overdraftLimit) {
    super(number);
    this._overdraftLimit = overdraftLimit;
  }

  setOverdraftLimit(value) {
    this._overdraftLimit = value;
  }

  getOverdraftLimit() {
    return this._overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }

    if (amount > (this._balance + this._overdraftLimit)) {
      throw Error("Overdrafting limit is exceeded");
    }

    this._balance -= amount;
  }

  toString() {
    return `CheckingAccount ${this.getNumber()}: balance ${this.getBalance()}: overdraft limit ${this.getOverdraftLimit()}`;
  }

  endOfMonth() {
    return this.getBalance() < 0 ? `Warning, low balance ${this.toString()}` : '';
  }
}