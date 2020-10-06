/**
 * routes.js
 * Xendit Checkout Demo
 * This file defines all the endpoints for this demo (on the api/backend side).
 */

"use strict";

const express = require("express");
const router = express.Router();

// load the controller
const InvoiceController = require("./controller");
const invoiceController = new InvoiceController();

// load the configuration file
const config = require("./config");

/**
 * Xendit integration to create invoice
 * 1. GET /api/healthcheck/readiness to make sure the server is up and running
 * 2. POST /api/invoice to create invoice (proxy from this backend to Xendit API Gateway)
 */

router.get("/api/healthcheck/readiness", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.post("/api/invoice", async (req, res) => {
  try {
    const data = {
      ...config.invoiceData,
      currency: req.body.currency,
      amount: req.body.amount,
    };

    const invoice = await invoiceController.create(data);
    return res.status(200).send(invoice.data);
  } catch (e) {
    return res.status(e.response.status).send(e.response.data);
  }
});

module.exports = router;
