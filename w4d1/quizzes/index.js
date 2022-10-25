const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'my secret'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    data: req.session['data'] || []
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const value = req.body.value;
  if (value != '') {
    const data = req.session['data'] || [];
    data.push(value);
    req.session['data'] = data;
  }
  res.redirect(`/`)
});

app.listen(3000);
