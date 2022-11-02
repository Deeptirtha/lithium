//const { count } = require("console")
const orderModel = require("../models/order")

const creatorder= async function (req, res) {
    let data= req.body
    let userId=data.userId
    let productId=data.productId
    if(!userId){return res.send({msg:"user id is mandatory"})}
    if(!productId){return res.send({msg:"product id is mandatory"})}
    let savedData= await orderModel.create(data)
    res.send({msg: savedData})
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

