const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();
const isDay = hour > 6 && hour < 18;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <title>Hello Person</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="/css/${isDay ? 'day.css' : 'night.css'}">
    </head>
    <body>
      <form id="myForm" method="POST" action="/result">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Name" />
        <label for="age">Age</label>
        <input type="text" name="age" id="age" placeholder="Age" />
        <input type="submit" value="Submit Query"/>
      </form>
    </body>
    </html>
  `);
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