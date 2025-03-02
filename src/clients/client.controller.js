const express = require('express');
const clientSchema = require('./client.schema.js')
const validate = require('../middlewares/validate.js')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
});
router.post('/', validate(clientSchema.createClient),(req,res)=>{
    res.send({'client created':req.body});
})
router.put('/',validate(clientSchema.updateClient),(req,res)=>{
    res.send({'client updated':req.body});
})
router.delete('/',validate(clientSchema.deleteClient),(req,res)=>{
  res.send({'client deleted':req.body});
})
router.get('/:cedula',validate(clientSchema.getById,param=true),(req,res)=>{

    const cedula = req.params.cedula;
    res.send({ 'client': cedula });
})

module.exports = router;