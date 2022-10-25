const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));
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
    details: "Savor the sweet taste of Freshness Guaranteed Gala Apples. Gala apples are sweet and mild with a subtle floral aroma making them perfect for breakfast, lunch, dinner, and dessert. Perfect for snacking, they have a creamy white flesh with low acidity. Chop the apples up and add them to a salad with walnut, mixed greens, and a poppy seed vinaigrette for a crunchy delicious salad that you can enjoy for lunch or dinner. Add it to your favorite smoothie or juice blend for a morning pick me up to get your day started right. Serve with a dollop of peanut butter and enjoy as a healthy snack that both kids and adults will love. Enjoy the delicious taste of Freshness Guaranteed Gala Apples.",
    price: 4.68
  },
  {
    name: "Banana",
    details: `Enjoy the sweet, tropical taste of Marketside Organic Bananas. Bananas are a good source of several vitamins and minerals including potassium, vitamin B6 and vitamin C and are low in sodium. Enjoy them at breakfast, lunch, dessert, or anytime you want a healthy snack. Use them to make a loaf of moist banana bread and enjoy with a hot cup of coffee in the mornings or layer them with pudding and vanilla wafer cookies for a light, sweet banana pudding that's perfect for dessert. Simply peel open the banana and savor the delicious taste of this sweet fruit. Bring home Marketside Organic Bananas and make them a part of your day.
    Fresh ideas and quality ingredients, that's how Marketside brings the best foods to your table. We are committed to deliver freshness that you can taste and see. Marketside offers the best in fresh food, guaranteed by Walmart, working in partnership with farmers, bakers and chefs for the highest quality, authentic ingredients and favorite recipes.`,
    price: 2
  },
  {
    name: "Milk",
    details: "Our whole milk is a great source of protein, calcium, and Vitamins A&D – and it’s 100% lactose free. Lactaid is farm-fresh milk from cows that are never treated with artificial growth hormones, and all our milk is tested for antibiotics. All the goodness of real milk, just without the lactose.",
    price: 6.24
  }
];

app.use((req, res, next) => {
  if (!req.session.myCart) {
      req.session.myCart = {};
  }
  next();
});

function getNumberOfItems(myCart) {
  return Object.values(myCart).reduce((a, b) => {
    return a + b.quantity;
  }, 0);
}

app.get('/', (req, res) => {
  res.render(`shop`, {
    title: "KEN SHOP",
    pageTitle: "Welcome to the Ken shop!",
    products: products,
    count: getNumberOfItems(req.session.myCart)
  });
});

app.get('/product/:name', (req, res) => {
  const selectedProduct = products.find(p => p.name === req.params.name); 
  res.render(`product`, {
    title: "KEN SHOP",
    pageTitle: "Product Details",
    product: selectedProduct,
    count: getNumberOfItems(req.session.myCart)
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

  res.json({data: getNumberOfItems(req.session.myCart)});
  res.status(200);
  res.end();
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