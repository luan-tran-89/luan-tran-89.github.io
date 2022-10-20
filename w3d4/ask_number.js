const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getNumber(sum) {
  r1.question('Please enter a number: ', (number) => {
    if (number == 'stop') {
      r1.close();
      console.log(`Sum of all numbers is: ${sum}`);
    } else {
      const num = parseFloat(number);
      if (isNaN(num)) {
        console.log('Please enter a valid number!!!');
      } else {
        sum += num;
      }
      return getNumber(sum);
    }
  })
}

module.exports = getNumber;