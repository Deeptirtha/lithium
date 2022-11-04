const jwt = require("jsonwebtoken");
const validationMiddleware = function(req, res, next){

    let token = req.headers["x-auth-token"];
   
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    let decodedToken = jwt.verify(token, "functionup-lithium-secret-key");
    if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
    else{next()}
}
module.exports.validationMiddleware = validationMiddleware
