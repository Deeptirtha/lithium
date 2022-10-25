const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  BookName:String,
  AutherName:String,
  Pages:String,
  Year:Number,
  Price:String,
  Stock:Boolean
}, { timestamps: true });

module.exports = mongoose.model('Bookdata', userSchema) 



// String, Number
// Boolean, Object/json, array