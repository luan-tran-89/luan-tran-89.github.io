class Clock {
  constructor({template = 'h:m:s'}) {
    this.template = template;
  }

  renderLayout() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const output = this.template
      .replaceAll('h', hours < 10 ? `0${hours}` : hours)
      .replaceAll('m', minutes < 10 ? `0${minutes}` : minutes)
      .replaceAll('s', seconds < 10 ? `0${seconds}` : seconds);

    console.log(output);
  }

  start() {
    this.renderLayout();
    this.timer = setInterval(() => this.renderLayout(), 1000);
  }

  stop() {
    clearInterval(this.timer);
    if (this.timer) {
      this.timer = null;
    }
  }
}

const clock = new Clock({templat: 'h:m:s', precision: 1000});
clock.start();