const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51KS0JYSAxSP4ZzaeqkVDY1F5L8hHkeXPQv34WyvtS8ktU01pk6VHOPvUQ56MH0wxtfToiqnySneQP2w3gg69j2E700R1lEFbyd"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world!!!"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request:", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-a57ec/us-central1/api
