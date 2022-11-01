
const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
   console.log( new Date)
    next()
}
module.exports.mid1= mid1


