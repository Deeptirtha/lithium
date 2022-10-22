const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  BookName:String,
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