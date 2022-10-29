const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "NewAuthor"
    }, 
    publisher:{
        type:ObjectId,
        ref:"NewPublisherrr"},
    price: Number,
    ratings: Number,
    isHardCover:{
        type:Boolean,
        default:false
    }

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
