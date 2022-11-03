const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const OrderController=require("../controllers/OrderController")
const ProductController=require("../controllers/ProductController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createUser",commonMW.validationMiddleware, UserController.createUser)
router.get("/geteUser", UserController.getUserData)

router.post("/creatproduct", commonMW.validationMiddleware,ProductController.createProduct)
router.get("/getproduct",ProductController.getProduct)


router.post("/creat-order",commonMW.validationMiddleware,OrderController.creatorder)
router.get("/getorder",OrderController.getOrderData)
router.get("/get-allorder",OrderController.getAllOrderData)
router.get("/get-updateData",OrderController.Updatebalance)


module.exports = router;