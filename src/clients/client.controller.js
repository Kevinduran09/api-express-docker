const express = require('express');
const clientSchema = require('./client.schema.js');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const router = express.Router();
const validate = require('../middlewares/validate.js');

router.get('/', (req, res) => {
    res.send('hello world');
});

router.post('/', validate(clientSchema.createClient), async (req, res) => {
    try {
        const data = await prisma.clients.create({
            data: req.body
        })

        res.send({ 'client created': data });
    } catch (error) {
        res.status(500).send({ error: 'Error creating client' });
    }
});

router.put('/', validate(clientSchema.updateClient), async (req, res) => {
    try {

        res.send({ 'client updated': req.body });
    } catch (error) {
        res.status(500).send({ error: 'Error updating client' });
    }
});

router.delete('/', validate(clientSchema.deleteClient), async (req, res) => {
    try {

        res.send({ 'client deleted': req.body });
    } catch (error) {
        res.status(500).send({ error: 'Error deleting client' });
    }
});

router.get('/:cedula', validate(clientSchema.getById, param = true), async (req, res) => {
    try {
        const cedula = req.params.cedula;
        console.log(typeof cedula);
        
        const client = await prisma.clients.findUnique({
            where: {
                cedula: cedula
            },
            omit:{
                createdAt: true,
                updatedAt: true
            }
        })
        res.send({ 'client': client });
    } catch (error) {
        res.status(500).send({
            msg: 'Error fetching client',
            error: error.message
        });
    }
});

module.exports = router;