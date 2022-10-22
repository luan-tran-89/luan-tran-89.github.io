const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const data = [];

app.get('/', (req, res) => {
  let dataString = '';
  
  for (let i = 0; i < data.length ; i++) {
    dataString += `<li>${data[i]}</li>`
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <title>Quizzes W3D6</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div>List of values: ${data.length == 0 ? 'The list is empty' : ''}</div>
      <ul> 
        ${dataString}
      </ul>
      <a href="/add">Add Value</a>
    </body>
    </html>
  `);
});

app.get('/add', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <title>Quizzes W3D6</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <form id="myForm" method="POST" action="/add">
        <label for="value">Value</label>
        <input type="text" name="value" id="value" placeholder="Please enter a value" />
        <input type="submit" value="Submit Value"/>
        </form>
    </body>
    </html>
  `);
});

app.post('/add', (req, res) => {
  const value = req.body.value;
  if (value != '') {
    data.push(value);
  }
  res.redirect(`/`)
});

app.listen(3000);