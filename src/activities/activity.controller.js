const express = require('express');

const activitySchema = require('./activity.schema.js')

const { PrismaClient } = require('@prisma/client')
const generarCodigoUnico = require('../helpers/generateCode.js')
const prisma = new PrismaClient()

const validate = require('../middlewares/validate.js')
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await prisma.activities.findMany()
        res.send({ 'activities': data });
    } catch (error) {
        res.status(500).send({
            message: 'Error getting activities',
            error: error.message
        })
    }
});

router.post('/', validate(activitySchema.createActivity), async (req, res) => {

    const code = generarCodigoUnico();
    req.body.code = code;
  
    
    try {
        const data = await prisma.activities.create({
            data: req.body
        })

        res.send({ 'activity created': data });
    } catch (error) {
        res.status(500).send({
            message: 'Error creating activity',
            error: error.message
        })
    }
});

router.put('/', validate(activitySchema.updateActivity), async (req, res) => {
    try {
        const code = req.body.code;
        const data = req.body;

        const activity = await prisma.activities.findUnique({
            where: { code: code }
        });

        if (!activity) {
            return res.status(404).send({
                message: 'Activity not found'
            });
        }

        const updatedActivity = await prisma.activities.update({
            where: { code: code },
            data: data,
        });

        res.send({ 'activity updated': updatedActivity });
    } catch (error) {
        res.status(500).send({
            message: 'Error updating activity',
            error: error.message
        });
    }
});

router.delete('/:code', validate(activitySchema.deleteActivity,param=true), async (req, res) => {
    try {
        const code = req.params.code;

        const activity = await prisma.activities.findUnique({
            where: { code: code }
        });

        if (!activity) {
            return res.status(404).send({
                msg: 'Activity not found'
            });
        }

        await prisma.activities.delete({
            where: { code: code }
        });

        res.send({ msg: 'Activity deleted' });
    } catch (error) {
        res.status(500).send({
            msg: 'Error deleting activity',
            error: error.message
        });
    }
});

router.get('/:code', validate(activitySchema.getById, param = true), async (req, res) => {

    try {
        const code = req.params.code;


        const activity = await prisma.activities.findUnique({
            where: {
                code: code
            },
            include: { client: true }
        })
        res.send({ 'activity': activity });
    } catch (error) {
        res.status(500).send({
            message: 'Error getting activity',
            error: error.message
        });
    }
});

module.exports = router;