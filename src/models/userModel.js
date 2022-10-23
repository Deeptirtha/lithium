const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  BookName:{type:String,
    unique:true},
  AutherName:{
    type:String,
    required: true},
  About:String,
  Year:Number,
  Rating:{
    type:String,
    required: true}
}, { timestamps: true });

module.exports = mongoose.model('Deep', userSchema) 



// String, Number
// Boolean, Object/json, array