const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
   let data = req.body
   
    let savedData= await productModel.create(data)
  res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


module.exports.createUser= createUser
module.exports.getUserData= getUsersData

