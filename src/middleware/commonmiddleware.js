const jwt = require("jsonwebtoken");
const validationMiddleware = function(req, res, next){

    let token = req.headers["x-auth-token"];
   
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-lithium-secret-key");
   
    req.decodedToken =decodedToken 
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    else{
        
        next()}
}

const authorization= function(req, res, next){
   console.log(req.decodedToken.userId)
   console.log(req.params.userId)

   if (req.decodedToken.userId!==req.params.userId) return res.send({ status: false, msg: "you do not have authorization to this " });
    else{
        next()}
}
module.exports.validationMiddleware = validationMiddleware
module.exports.authorization = authorization
