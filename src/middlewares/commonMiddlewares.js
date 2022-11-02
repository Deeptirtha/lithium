

const myOtherMiddleware = function(req, res, next){
  
    let acceptHeaderValue = req.headers["accept"]

    if(acceptHeaderValue == "application/json") {
        req.wantsJson = true
    } else {
        req.wantsJson = false
    }
    next()
}
const validationMiddleware = function(req, res, next){
   
    let validation = req.headers["isFreeAppUser"]

    if(validation) {
        next()
    } else {
        res.send({msg:"isFreeAppUser Header is present"})
    }
    
}


module.exports.myOtherMiddleware = myOtherMiddleware
module.exports.validationMiddleware = validationMiddleware
