const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let body = req.body
    console.log(body)
    if (Object.keys(body).length != 0) {
      let data = await userModel.create(body)
      res.status(201).send({ status: true, msg: data })
    }
    else { res.status(400).send({ status: false, msg: "you can not save a empty body" }) }}
catch (err) {
      res.status(200).send({ status: false, msg: err.message })
    }
  }

const loginUser = async function (req, res) {
  try {
    let useremail = req.body.emailId;
    let password = req.body.password;
    if (useremail == undefined || password == undefined) { res.status(400).send({ status: false, msg: "you must enter email and password" }) }
    else {
      let user = await userModel.findOne({ emailId: useremail, password: password });
      if (!user)
        return res.status(400).send({
          status: false,
          msg: "username or the password is not corerct",
        });

      let token = jwt.sign(
        {
          userId: user._id.toString()
        },
        "functionup-lithium-secret-key"
      );
      res.setHeader("x-auth-token", token);
      res.status(200).send({ status: true, token: token, person: user });
    }
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    
      let userDetails = await userModel.findById(userId);
      if (!userDetails)
        return res.status(400).send({ status: false, msg: "No such user exists" });

      res.status(200).send({ status: true, data: userDetails });
    
  }

  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: "Data Updated", data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}

const deleateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(200).send({ status: "Data Updated", data: updatedUser });
  }
  catch (err) {
    res.status(500).send({ status: false, msg: err.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleateUser = deleateUser;
module.exports.loginUser = loginUser;




