const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
  BookName:String,
  AutherName:{String,
  
  required: true},
  About:String,
  Year:Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array