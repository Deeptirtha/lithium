const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/Book", UserController.createUser  )

router.post("/BookData", UserController.getUsersData)


router.get("/BookData", UserController.getUsersData)

module.exports = router;