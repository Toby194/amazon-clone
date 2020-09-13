const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(
  'key'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world'));
// app.get('/nema', (request, response) => response.status(200).send('Whats up Nema'));


app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received BOOM! for this amount >>>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd'
  });
  // 201 is like Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http function initialized (http://localhost:5001/clone-d8c93/us-central1/api)
