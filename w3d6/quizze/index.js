const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const data = [];

app.get('/', (req, res) => {
  res.render('index', {
    data: data
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const value = req.body.value;
  if (value != '') {
    data.push(value);
  }
  res.redirect(`/`)
});

app.listen(3000);
