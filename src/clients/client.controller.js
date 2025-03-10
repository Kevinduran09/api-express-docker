const express = require('express');
const clientSchema = require('./client.schema.js');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const router = express.Router();
const validate = require('../middlewares/validate.js');

router.get('/', async (req, res) => {
    try {
        const data = await prisma.clients.findMany()
        res.send({ 'clients': data });
    } catch (error) {
        res.status(500).send({
            message: 'Error getting clients',
            error: error.message
        })
    }
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
        const cedula = req.body.cedula;
        const data = req.body;

        const client = await prisma.clients.findUnique({
            where: { cedula: cedula }
        });

        if (!client) {
            return res.status(404).send({
                message: 'Client not found'
            });
        }

        const updateClient = await prisma.clients.update({
            where: { cedula: cedula },
            data: data,
        });

        res.send({ 'client updated': updateClient });
    } catch (error) {
        res.status(500).send({ error: 'Error updating client' });
    }
});

router.delete('/:cedula', validate(clientSchema.deleteClient, param = true), async (req, res) => {
    try {
        const cedula = req.params.cedula;

        const client = await prisma.clients.findUnique({
            where: { cedula: cedula }
        });

        if (!client) {
            return res.status(404).send({
                message: 'Client not found'
            });
        }

        await prisma.clients.delete({
            where: { cedula: cedula }
        });

        res.send({ message: 'Client deleted' });
    } catch (error) {
        res.status(500).send({
            message: 'Error deleting client',
            error: error.message
        });
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
            include:{
                activities: true,
            }
           
        })
        res.send({ 'client': client });
    } catch (error) {
        res.status(500).send({
            message: 'Error getting client',
            error: error.message
        });
    }
});

module.exports = router;