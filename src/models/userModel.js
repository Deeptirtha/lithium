const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {


  author_id:{type:Number,
      required:true},
  author_name:String,
  age:Number,
  address:String

}, { timestamps: true });
const userSchema2 = new mongoose.Schema( {
  name:String,
  author_id:Number,
  price:Number,
  ratings:Number,

}, { timestamps: true });


module.exports.userSchema = mongoose.model('Authors', userSchema) 
module.exports.userSchema2= mongoose.model('Books', userSchema2) 



// String, Number
// Boolean, Object/json, array