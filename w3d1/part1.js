// window.onload = function() {
//   const clock = new Clock({templat: 'h:m:s', precision: 1000});
//   clock.start();

//   const extendedClock = new ExtendedClock({templat: 'h:m:s', precision: 1000});
//   clock.start();
// }

// Error creating an instance
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name); // Missing call super.
    // this.name = name; //  No need this line
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);
