/**
 * config.js
 * Xendit Checkout Demo
 * This file contains the dummy value for creating invoice
 */

"use strict";

// get current date
const now = new Date();

module.exports = {
  invoiceData: {
    payer_email: "invoice+demo@xendit.co",
    description: "Checkout Demo",
    external_id: `checkout-demo-${now.getTime()}`,
  },
};
