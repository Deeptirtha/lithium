const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const PublishererController= require("../controllers/PublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.post("/creatpublisherdetails",PublishererController.createpublisher)

router.get("/getpublisherdetails",PublishererController.getPublishersData)

router.get("/getBooksWithAllDetails", bookController.getBooksWithAllDetails)

router.put("/UpdateCoverDetails", bookController.UpdatDetails)

router.put("/UpdatePriceDetails", bookController.UpdatPriceDetails)


module.exports = router;