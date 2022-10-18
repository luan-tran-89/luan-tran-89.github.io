class ExtendedClock extends Clock {
  constructor({ template, precision }) {
    super({ template: template });
    this.precision = precision;
  }

  start() {
    this.renderLayout();
    this.timer = setInterval(() => this.renderLayout(), this.precision);
  }
}

const extendedClock = new ExtendedClock({template: 'ExtendedClock: h:m:s', precision: 1000});
extendedClock.start();