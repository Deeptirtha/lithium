const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}
//================================================================1===============================
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find().select({  BookName:1,AutherName:1,_id:0})
//     res.send({msg: allUsers})
// }
//================================================================2==============================================
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find({Year:{$eq:2000}})
//     res.send({msg: allUsers})
// }
//=========================================================================3==============================================
// const getUsersData= async function (req, res) {
// let allUsers= await UserModel.find({BookName:/.*hi.*/})
//     res.send({msg: allUsers})
// }
//=====================================================================================4===========================================
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find({$or:[{Price:"100INR"},{Price:"200INR"},{Price:"500INR"}]})
//     res.send({msg: allUsers})
// }

//================================================================================================5======================================
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find({$or:[{Pages:{$gt:"500"}},{Stock:true}]})
//     res.send({msg: allUsers})
// }
//==================================================================================================6=====================================

const getUsersData= async function (req, res) {
    let year=req.query.year
    let allUsers= await UserModel.find({Year:{$eq:year}})
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData