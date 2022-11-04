const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
let commonMW=require("../middleware/commonmiddleware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)


router.get("/users/:userId", userController.getUserData)

//router.put("/users/:userId",commonMW.validationMiddleware, userController.updateUser)
router.put("/users/:userId",commonMW.validationMiddleware,commonMW.authorization, userController.updateUser)

router.delete("/delete/:userId",commonMW.validationMiddleware,commonMW.authorization, userController.deleateUser)
//router.delete("/delete/:userId",commonMW.validationMiddleware,userController.deleateUser)


module.exports = router;