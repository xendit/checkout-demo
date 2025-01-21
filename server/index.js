/**
 * index.js
 * Xendit Checkout Demo
 * This is the main file to start the express server for the backend part
 */

'use strict';

const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

// setup useful middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup web front
app.use(
    express.static(path.join(__dirname, '../public'), {
        extensions: ['html']
    })
);

// define routes
app.use('/', require('./routes'));

// start the server
const server = app.listen(process.env.PORT || 8000, () => {
    console.log(`server is listening on port: ${server.address().port}`);
});

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        debug('HTTP server closed');
    });
});
process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    server.close(() => {
        debug('HTTP server closed');
    });
});
