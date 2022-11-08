const express = require('express');
const router = express.Router();
const weatherController= require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/london", weatherController.weatherofLondon)
router.get("/allcity", weatherController.weatherofallcity)


module.exports=router

