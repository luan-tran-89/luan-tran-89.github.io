class SavingsAccount extends Account {

  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  getInterest() {
    return this._interest;
  }

  setInterest(interest) {
    if (interest <= 0) {
      throw new RangeError("Interest has to be greater than zero");
    }
    this._interest = interest;
  }

  addInterest() {
    if (this._interest <= 0) {
      throw new RangeError("Interest has to be greater than zero");
    }
    const interestAmount = (this.getBalance() * this._interest)/100;
    this.deposit(interestAmount);
    return interestAmount;
  }

  toString() {
    return `SavingsAccount ${this.getNumber()}: balance ${this.getBalance()}: interest ${this._interest}`;
  }

  endOfMonth() {
    this.addInterest();
    return `Interest added ${this.toString()}`;
  }
}