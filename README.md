# Xendit Checkout Demo

This demo provides a simple e-commerce store that utilizes a pure JavaScript & HTML for frontend and a simple [ExpressJS](https://expressjs.com/) server for the backend to proxy the request from client-side to the [Xendit API Gateway](https://developers.xendit.co/api-reference/#invoices) to illustrate how to create an order with multiple choice of payments as well as the type integration and redirection. 

**You can see this demo app running in test mode on [demo.xendit.co](https://demo.xendit.co)**

## Overview

<img src="public/images/screenshots/demo-desktop.png" alt="Demo on Google Chrome" width="610"><img src="public/images/screenshots/demo-mobile.png" alt="Demo on Safari iPhone X" width="272">

This demo provides an all-in-one example for integrating with Xendit Checkout on the web:

|     | Features
:---: | :---
✨ | **Beautiful UI components for card payments**. This demo uses pre-built Stripe components customized to fit the app design, including the [Card Element](https://stripe.com/docs/elements) which provides real-time validation, formatting, and autofill.
💳 | **Card payments with Payment Request, Apple Pay, Google Pay, and Microsoft Pay.** The app offers frictionless card payment experiences with a single integration using the [Payment Request Button Element](https://stripe.com/docs/elements/payment-request-button).
🌍 | **Payment methods for Europe and Asia.** A dozen redirect-based payment methods are supported through the [Sources API](https://stripe.com/docs/sources), from [iDEAL](https://stripe.com/docs/sources/ideal) to [WeChat Pay](https://stripe.com/docs/sources/wechat-pay).
🎩 | **Automatic payment methods suggestion.** Picking a country will automatically show relevant payment methods. For example, selecting  “Germany” will suggest SOFORT, Giropay, and SEPA Debit.
🔐 | **Dynamic 3D Secure for Visa and Mastercard.** The app automatically handles the correct flow to complete card payments with [3D Secure](https://stripe.com/docs/payments/dynamic-3ds), whether it’s required by the card or encoded in one of your [3D Secure Radar rules](https://dashboard.stripe.com/radar/rules).

## Codebase Structure

The frontend code for the demo is in the `public/` directory.

The core logic of the Xendit Checkout is mostly contained within two files:

1.  [`server/routes.js`](server/routes.js) defines the routes on the backend that create Xendit invoice/checkout data.
2.  [`server/controller.js`](server/controller.js) defines the request that will be forwarded to the Xendit API Gateway.

There is also one file called [`server/config.js`](server/config.js) that store the configurable pre-filled invoice data (`payer_email` and `description`). You can override these values in the [`server/routes.js`](server/routes.js).

## Getting Started

### Requirements

You’ll need the following:

- [Node.js](https://nodejs.org) >= `10.0.0`
- [NPM](https://npmjs.org) >= `6.0.0`
- Xendit account to accept payments ([sign up](https://dashboard.xendit.co/register/1) for free). After registering, please [generate](https://dashboard.xendit.co/settings/developers#api-keys) secret key with **MONEY-IN WRITE** permission in order to perform request for creating invoice. 

After registering account on Xendit, you can [enable the payment methods](https://dashboard.xendit.co/invoices) you’d like to test by clicking on Customize button in the invoice page (Home > Accept Payments > Invoices).

### Running the Node Server

You need to modify your environment variables as stated in [`.env.example`](.env.example) to your needs. In this case, you need to set these values: 

- `process.env.PORT`
- `process.env.API_GATEWAY_URL`
- `process.env.API_KEY`

The value of `API_GATEWAY_URL` should be **https://api.xendit.co**. And for the `API_KEY`, you should fill it with the key that you've generated from developer settings. As for the `PORT`, you can define it by using the available port on your local machine or it will be provided by default value which is `8000`.

Install dependencies using npm:

    npm install

After installation is done, start the local server along with the environment variables:

    PORT=<port> API_GATEWAY_URL=https://api.xendit.co API_KEY=<your-secret-key> npm run start

If everything went well, you should see the following message in your terminal:

    server is listening on port: <port>

Then you can point your browser to the `http://localhost:<port>`