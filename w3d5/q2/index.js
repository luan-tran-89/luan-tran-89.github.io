const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(
    `<form id="myForm" method="POST" action="/result">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" />
      <label for="age">Age</label>
      <input type="text" name="age" id="age" placeholder="Age" />
      <input type="submit" value="Submit Query" />
    </form>`
  );
});

app.post('/result', (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "30";
  }
  res.send(`Welcome ${name} ${age} years old`);
});
app.listen(3000);