const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
   let body = req.body
    let headers = req.headers
  res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}


module.exports.createUser= createUser
module.exports.getUserData= getUsersData

