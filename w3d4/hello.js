const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('What is your name? ', (name) => {
  console.log(`Welcome ${name}`);

  r1.question('What is your age? ', (age) => {
    const output = age < 16 ? `You’re not allowed to drive in Iowa` : `You’re allowed to get a drivers license in Iowa`;
    console.log(output);
  })
})
