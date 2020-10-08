// mongoDB pw = pVMrHdpJRAP9RJm0
// mongoDB user = mattn
// mongodb+srv://mattn:pVMrHdpJRAP9RJm0@cluster0.4opmd.mongodb.net/<dbname>?retryWrites=true&w=majority


//if (process.env.NODE_ENV !== 'production'){
//    require('dotenv').config();
//}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const contactUsRouter = require('./routes/contact-us');
const galleryRouter = require('./routes/gallery');
const myAccountRouter = require('./routes/my-account');
const shopDetailRouter = require('./routes/shop-detail');
const shopRouter = require('./routes/shop');
const wishlistRouter = require('./routes/wishlist');
const registerRouter = require('./routes/register');
const signinRouter = require('./routes/signin');






app.set('view engine', 'ejs');
app.set('views', __dirname, ' /views');
app.set('layout', './views/layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}));

// connecting to mongoose

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mattn:pVMrHdpJRAP9RJm0@cluster0.4opmd.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


//link to our first route (or controller)
app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/about', aboutRouter);
app.use('/cart', cartRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact-us', contactUsRouter);
app.use('/gallery', galleryRouter);
app.use('/my-account', myAccountRouter);
app.use('/shop-detail', shopDetailRouter);
app.use('/shop', shopRouter);
app.use('/wishlist', wishlistRouter);
app.use('/register', registerRouter);
app.use('/signin', signinRouter);



//Listenning to defined PORT
app.listen(process.env.PORT ||2500, () => {
    console.log('The application is running on localhost:2500');
});



