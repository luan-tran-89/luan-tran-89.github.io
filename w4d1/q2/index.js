const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'my secret'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render(`index`);
});

app.post('/result', (req, res) => {
  req.session['name'] = req.body.name;
  req.session['age'] = req.body.age;
  res.redirect(`/output`);
});

app.get('/output', (req, res) => {
  let name = req.session.name;
  let age = req.session.age;
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