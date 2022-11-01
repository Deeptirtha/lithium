const bodyParser = require("body-parser")
const { request } = require("express")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    console.log(req.url)
    console.log("hii  i am path of this url "+req.path)
    res.send({ msg: "This is coming from controller handler"})
    }


module.exports.basicCode= basicCode