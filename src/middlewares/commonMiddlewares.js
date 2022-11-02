



const validationMiddleware = function(req, res, next){
   

    let validation = req.headers["isFreeAppUser"]
    console.log(req.headers)

    if(validation) {
        next()
    } else {
        res.send({msg:"ERR can not creat user. isFreeAppUser Header is requerd"})
    }
    
}



module.exports.validationMiddleware = validationMiddleware
