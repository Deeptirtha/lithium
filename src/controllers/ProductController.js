
const productModel= require("../models/product")

const createProduct= async function (req, res) {
    let data = req.body
   let savedData= await productModel.create(data)
    res.send({data: savedData})
}





const getProduct = async function (req, res) {
    let allproduct = await productModel.find()
    res.send({msg:allproduct})

}
module.exports.createProduct=createProduct
module.exports.getProduct= getProduct
