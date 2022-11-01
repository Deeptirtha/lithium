const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")




 router.get("/basicRoute", commonMW.mid1, UserController.basicCode)
module.exports = router;



