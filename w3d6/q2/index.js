const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(`index`);
});

app.post('/result', (req, res) => {
  res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`)
});

app.get('/output', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "30";
  }
  res.render(`output`, {
    name: name,
    age: age
  });
});

app.listen(3000);