const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'my secret'
}));
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
  const myCart = req.session.myCart || {};

  const item = myCart[name];

  if (item) {
    item.quantity += 1;
  } else {
     myCart[name] = {
      ...selectedProduct,
      quantity: 1
    };

    req.session.myCart = myCart;
  }
  res.redirect('/');
});

app.get('/cart', (req, res) => {
  const myCart = req.session.myCart || {};
  const totalPrice = Object.values(myCart).reduce((a, b) => a + (b.price * b.quantity), 0);
  res.render(`shoppingcart`, {
    title: "KEN SHOP",
    pageTitle: "Your Cart:",
    products: myCart,
    totalPrice: totalPrice,
    tax: currentTax * totalPrice
  });
});

app.listen(3000);