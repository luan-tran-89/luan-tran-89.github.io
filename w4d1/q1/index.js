const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(cookieParser('my secret here'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    data: req.cookies || {}
  });
});

app.post('/', (req, res) => {
  const key = req.body.key;
  const value = req.body.value || '';
  if (key != '') {
    res.cookie(key, value, {maxAge: 60*60*24*7*1000});
  }
  res.redirect(`/`)
});

app.listen(3000);
