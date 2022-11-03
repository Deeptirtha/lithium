
const orderModel = require("../models/order")
const product = require("../models/product")
const userModel = require("../models/userModel")

const creatorder= async function (req, res) {
    let data= req.body
    let userId=data.userId
    let productId=data.productId
    if(!userId){return res.send({msg:"user id is mandatory"})}
    else if(!productId){return res.send({msg:"product id is mandatory"})}

    if(userId.length<24){
        return res.send("please enter valid user id ")
     }
    else if( productId.length<24){
        return res.send("please enter valid product id")
     }
    
    else if((await userModel.findOne({_id:userId})) && (await product.findOne({_id:productId})) ){
        let savedData= await orderModel.create(data)
        res.send({msg: savedData})}
   
    else{res.send("please enter valid user id or product id")}


 
}
const getOrderData = async function (req, res) {
    let allOrder = await orderModel.find()
    res.send({msg:allOrder})

}


const getAllOrderData = async function (req, res) {
    let allOrder = await orderModel.find().populate("productId").populate("userId")
    res.send({msg:allOrder})

}

const Updatebalance = async function (req, res) {
    let allOrder = await orderModel.find().populate("productId").populate("userId")
    let allhead = req.headers
    allhead.isfreeappuser=false
    //allhead.isfreeappuser=true
    let validation=Boolean(allhead.isfreeappuser)
    let Balance=0
    let price=0
    for(i=0;i<allOrder.length;i++){
        Balance=allOrder[i].userId.balance
        price=allOrder[i].productId.price
}
    if(Balance<price){
        res.send({msg:"can not buy this product your balance is low"})
    }
    else if(validation==true){
        res.send({data:allOrder})
    }else{

        let updatedData=allOrder.filter(x=>x.userId.balance>=0)
        updatedData.map(x=>x.userId.balance=(x.userId.balance-price))
      res.send(updatedData)
    }
    
    
    

}

module.exports.creatorder= creatorder
module.exports.getOrderData= getOrderData
module.exports.getAllOrderData= getAllOrderData
module.exports.Updatebalance= Updatebalance


        