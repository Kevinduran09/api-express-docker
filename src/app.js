const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/clients',require('./clients/client.controller'))
app.use('/api/activities', require('./activities/activity.controller'))

app.use((err, req, res, next) => {
    console.error('Error inesperado:', err);
    res.status(500).json({ message: 'Ocurrió un error en el servidor (Middleware)' });
});
module.exports = app;