const express = require('express');
const router = express.Router();
const weatherController= require("../controllers/weatherController")
const memeController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/london", weatherController.weatherofLondon)
router.get("/allcity", weatherController.weatherofallcity)
router.get("/meme", memeController.meme)
router.get("/Mymeme", memeController.Mymeme)




module.exports = router