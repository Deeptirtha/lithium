



const validationMiddleware = function(req, res, next){
   

    res.setHeaders("isFreeAppUser","true")
    let validation = req.headers["isFreeAppUser"]
    console.log(validation)

    if(validation) {
        next()
    } else {
        res.send({msg:"ERR can not creat user. isFreeAppUser Header is requerd"})
    }
    
}



module.exports.validationMiddleware = validationMiddleware
