const PublisherModel= require("../models/publishermodel")



const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data:publisherCreated })
}

const getPublishersData= async function (req, res) {
    let publisher = await PublisherModel.find()
    res.send({data: publisher})
}

module.exports.createpublisher= createpublisher
module.exports.getPublishersData= getPublishersData