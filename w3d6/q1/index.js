const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date.getHours();
const isDay = hour > 6 && hour < 18;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  const date = new Date();
  
  res.render(`index`, {
    css: `/css/${isDay ? 'day.css' : 'night.css'}`,
    time: date.toTimeString()
  });
});

app.listen(3000);