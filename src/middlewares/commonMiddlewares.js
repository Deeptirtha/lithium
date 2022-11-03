



const validationMiddleware = function(req, res, next){
   let allhead = req.headers
   let validation=allhead.isfreeappuser
if(validation=='true' ||validation=='false') {
        console.log("validation passed")
        next()
 }
else {
    return res.send({msg:"ERR can not creat data. isFreeAppUser Header is requerd"})
    }
}



module.exports.validationMiddleware = validationMiddleware
