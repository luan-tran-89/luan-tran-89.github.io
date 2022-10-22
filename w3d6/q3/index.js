const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const currentTax = 0.05;

const products = [
  {
    name: "Apple",
    details: "Enjoy the sweet, tropocal taste of Marketside Organic Apple",
    price: 1
  },
  {
    name: "Banana",
    details: "Enjoy the sweet, tropocal taste of Marketside Organic Bananas",
    price: 2
  },
  {
    name: "Milk",
    details: "Our whole milk is a great source of protein calcium, and Vitamins A&D and it's 100% lactose free",
    price: 6.24
  }
];

const myCart = {};

app.get('/', (req, res) => {
  res.render(`shop`, {
    title: "KEN SHOP",
    pageTitle: "Welcome to the Ken shop!",
    products: products
  });
});

app.post('/addToCart', (req, res) => {
  const name = req.body.name;
  const selectedProduct = products.find(p => p.name === name);
  const item = myCart[name];

  if (item) {
    item.quantity += 1;
  } else {
    myCart[name] = {
      ...selectedProduct,
      quantity: 1
    };
  }
  res.redirect('/');
});


app.listen(3000);