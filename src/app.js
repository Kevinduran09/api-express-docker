const express = require('express');
const app = express();

app.use(express.json());

app.use('/clients',require('./clients/client.controller'))

module.exports = app;