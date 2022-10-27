const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.userSchema.create(data)
    res.send({msg: savedData})
}
const createUser2= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.userSchema2.create(data)
    res.send({msg: savedData})
}

//================================================================1==============================================
// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.userSchema.findOne({author_name:{$eq:"Chetan Bhagat",}})
//     let id =allUsers.author_id
//     let allbooks= await UserModel.userSchema2.find({author_id:{$eq:id}}).select({name:1,_id:0})
//     res.send({msg:allbooks})
// }
//=========================================================================2==============================================

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.userSchema2.findOne({name:{$eq:"Two states"}})
//     let id =allUsers.author_id
//     let autherdata= await UserModel.userSchema.find({author_id:{$eq:id}})
//     let authername= await UserModel.userSchema.find({author_id:{$eq:id}}).select({author_name:1,_id:0})
//     let price= await UserModel.userSchema2.findOneAndUpdate({name:{$eq:"Two states"}},{$set:{price:999}},{new:true}).select({price:1,_id:0})

//     res.send({msg:authername,price})
// }

//=====================================================================================3===========================================

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.userSchema2.find({ price : { $gte: 50, $lte: 100} } )
    let bookname= await UserModel.userSchema2.find({ price : { $gte: 50, $lte: 100} } ).select({name:1,_id:0})
    const allid = allUsers.map(x => x.author_id)
    let authername= await UserModel.userSchema.find({author_id:{$in:allid}}).select({author_name:1,_id:0})

    res.send({msg:bookname,authername})
}

module.exports.createUser= createUser
module.exports.createUser2= createUser2
module.exports.getUsersData= getUsersData