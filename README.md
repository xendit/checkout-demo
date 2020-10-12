# Xendit Checkout Demo

This demo provides a simple e-commerce store that utilizes a pure JavaScript & HTML for frontend and a simple [ExpressJS](https://expressjs.com/) server for the backend to proxy the request from client-side to the [Xendit API Gateway](https://developers.xendit.co/api-reference/#invoices) to illustrate how to create an order with multiple choice of payments as well as the type of integration and redirection. 

**You can see this demo app running in test mode on [demo.xendit.co](https://demo.xendit.co)**

## Overview

<img src="public/images/screenshots/demo-desktop.png" alt="Demo on Google Chrome" width="610"><img src="public/images/screenshots/demo-mobile.png" alt="Demo on Safari iPhone X" width="272">

Xendit Checkout is the fastest way to start collecting online payments in Indonesia and Philippines.

|     | Features
:---: | :---
💸 | **14 different payment methods**. 12 payment methods accepting Indonesian Rupiah (IDR) and 2 payment methods accepting Philppine Pesos (PHP), with more on the way. 
🔯 | **UIs optimized for each payment method**. For example, barcode generation for Alfamart and up-to-date instructions for 6 different bank networks.
📔 | **Front-end validation and formatting**. We handle phone number and card number validation.
🔐 | **PCI-DSS compliance and 3DS handling**. Making it easier to offer and handle credit cards.
🗺 | **Supports multi-language integration**. Full UI localization has been tested across millions of successful transactions.
🚀 | **Ongoing maintenance and continuous improvement**. Whenever a payment partner makes a change (e.g., OVO) our team of developers handles it so you don't have to.

Additionally, our sample code demonstrates:
- Integration via dialog pop-up (a.k.a modal iframe) and redirect
- Creation of checkout pages for IDR and PHP
- Simple integration to create an invoice using Xendit API Gateway

## Codebase Structure

The frontend code for the demo is in the `public/` directory.

The core logic of the Xendit Checkout is mostly contained within two files:

1.  [`server/routes.js`](server/routes.js) defines the routes on the backend that create Xendit invoice/checkout data.
2.  [`server/controller.js`](server/controller.js) defines the request that will be forwarded to the Xendit API Gateway.

There is also one file called [`server/config.js`](server/config.js) that stores the configurable pre-filled invoice data (`payer_email` and `description`). You can override those values in the [`server/routes.js`](server/routes.js).

## Getting Started

### Requirements

You’ll need the following:

- [Node.js](https://nodejs.org) >= `10.0.0`
- [NPM](https://npmjs.org) >= `6.0.0`
- Xendit account to accept payments ([sign up](https://dashboard.xendit.co/register/1) for free). After registering, please [generate](https://dashboard.xendit.co/settings/developers#api-keys) secret key with **MONEY-IN WRITE** permission in order to perform request for creating invoice. 

After registering account and generating the secret key, you can [enable the payment methods](https://dashboard.xendit.co/invoices) you’d like to test by clicking on **Customize** button in the invoice page (Home > Accept Payments > Invoices).

### Running the Node Server

You need to modify your environment variables as stated in [`.env.example`](.env.example) to your needs. In this case, you need to set these values: 

- `process.env.PORT`
- `process.env.API_GATEWAY_URL`
- `process.env.API_KEY`

The value of `API_GATEWAY_URL` should be **https://api.xendit.co**. For the `API_KEY`, you should fill it with the key that you've generated from developer settings. As for the `PORT`, you can define it by using the available port on your local machine or it will be provided by default value which is `8000`.

Install dependencies using npm:

    npm install

After installation is done, start the local server along with the environment variables:

    PORT=<port> API_GATEWAY_URL=https://api.xendit.co API_KEY=<your-secret-key> npm run start

If everything went well, you should see the following message in your terminal:

    server is listening on port: <port>

Then you can point your browser to the `http://localhost:<port>`