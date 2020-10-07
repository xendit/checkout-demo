/**
 * controller.js
 * Xendit Checkout Demo
 * This file defines all the API call to Xendit API Gateway, for now is to create invoice
 */

'use strict';

const axios = require('axios');

class InvoiceController {
    constructor() {
        (this.url = process.env.API_GATEWAY_URL + '/v2/invoices'),
            (this.headers = {
                'Content-Type': 'application/json'
            }),
            (this.auth = {
                username: process.env.API_KEY,
                password: ''
            });
        this.timeout = 10000;
    }

    async create(data) {
        const options = {
            method: 'POST',
            headers: this.headers,
            timeout: this.timeout,
            auth: this.auth,
            url: this.url,
            data
        };

        try {
            return await axios(options);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = InvoiceController;
