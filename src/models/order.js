const mongoose = require('mongoose');
let objectId=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId: {type:objectId,
	ref:"User"},
	productId:{type:objectId,
		ref:"Product"},
	amount: Number,
	isFreeAppUser: Boolean, 
	date: {type:Number,
    default:2/11/2022}
}
, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
