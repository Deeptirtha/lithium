//const { count } = require("console")
const orderModel = require("../models/order")
const product = require("../models/product")
const userModel = require("../models/userModel")

const creatorder= async function (req, res) {
    let data= req.body
    let userId=data.userId
    let productId=data.productId
    if(!userId){return res.send({msg:"user id is mandatory"})}
    if(!productId){return res.send({msg:"product id is mandatory"})}

    if(userId<24 || productId<24){
        return res.send("please enter valid length user id or product id")
     }
    
    
    else if((await userModel.findOne({_id:userId})) && (await product.findOne({_id:productId})) ){
        let savedData= await orderModel.create(data)
        res.send({msg: savedData})}
   
    else{res.send("please enter valid author id or publisher id")}


 
}
const getOrderData = async function (req, res) {
    let allOrder = await orderModel.find()
    res.send({msg:allOrder})

}


const getAllOrderData = async function (req, res) {
    let allOrder = await orderModel.find().Populate("productId").Populate("userId")
    res.send({msg:allOrder})

}

module.exports.creatorder= creatorder
module.exports.getOrderData= getOrderData
module.exports.getAllOrderData= getAllOrderData

