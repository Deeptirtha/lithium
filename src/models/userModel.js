const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:{type:String,
    default:100},
    address:String,
    age: Number,
     gender: {
        type: String,
        enum: ["male", "female", "LGBTQ","other"] 
    },
   
    isFreeAppUser:{type:Boolean,default:false}
   
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 

