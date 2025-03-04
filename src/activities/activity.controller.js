const express = require('express');

const activitySchema = require('./activity.schema.js')

const validate = require('../middlewares/validate.js')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
});
router.post('/', validate(activitySchema.createActivity), (req, res) => {
    res.send({ 'activity created': req.body });
})
router.put('/', validate(activitySchema.updateActivity), (req, res) => {
    res.send({ 'activity updated': req.body });
})
router.delete('/', validate(activitySchema.deleteActivity), (req, res) => {
    res.send({ 'activity deleted': req.body });
})
router.get('/:code', validate(activitySchema.getById, param = true), (req, res) => {

    const code = req.params.code;
    res.send({ 'activity': code });
})

module.exports = router;