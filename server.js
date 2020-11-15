// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HnQTZADptziZrkWMerYxE9lTHAhp2g5mZhYQYx4n8inLIDPE6nLfd1NnDaCcNJD2YHUTMAOO4OMHxXUHWzZxjGS00mKFd74Yd');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const endpointSecret = 'whsec_XxftGAjsO5MCWbRh5Jt6r5OQmuQILScU';

app.engine('.hbs', expressHandlebars({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

//Step 1
app.get('/', async (req, res) => {

  res.render('product');
});

//Step 2
app.get("/checkout.html", async (req, res) =>  {
  const intent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  // Verify your integration in this guide by including this parameter
  metadata: {integration_check: 'accept_a_payment'},
});
  res.render('checkout', { client_secret: intent.client_secret });
});        
        
app.listen(process.env.PORT, () => {
  console.log('Running on port 3000');
});


// Match the raw body to content type application/json
app.post('/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = JSON.parse(request.body);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
  }
  

  
// Handle the event
switch (event.type) {
  case 'payment_intent.succeeded':
    const paymentIntent = event.data.object;
    console.log(JSON.stringify(paymentIntent))
    console.log('PaymentIntent was successful!');
    break;
  case 'payment_method.attached':
    const paymentMethod = event.data.object;
    console.log('PaymentMethod was attached to a Customer!');
    break;
  // ... handle other event types
  default:
    console.log(`Unhandled event type ${event.type}`);
}

// Return a 200 response to acknowledge receipt of the event
response.json({received: true});
});

