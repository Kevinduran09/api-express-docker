const validate = (schema,param=false) => (req,res,next)=> {
   
   
    const result = param ? schema.safeParse(req.params) : schema.safeParse(req.body) 
    if(!result.success){
       
        
        return res.status(400).json({errors:result.error.errors})
    }
    req.body = result.data
    next()
}

module.exports = validate