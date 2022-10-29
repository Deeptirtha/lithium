const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/publishermodel")

const createBook= async function (req, res) {
    let book = req.body
    let aid =req.body.author
    let pid =req.body.publisher
    let x=aid.length
    let y=pid.length
    if(x<24 || y<24){
        return res.send("please enter valid length author id or publisher id")
     }
    
    
    else if(aid && pid && (await authorModel.findOne({_id:aid})) && (await PublisherModel.findOne({_id:pid})) ){
        let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})}
   
    else{res.send("please enter valid author id or publisher id")}
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAllDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}



const UpdateDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    let newcoll=specificBook.filter(x=>x.publisher.name=="Penguin")
    let newcoll1=specificBook.filter(x=>x.publisher.name==" HarperCollins")
    let finalcollection=[...newcoll,...newcoll1]
    finalcollection.forEach(x=>x.isHardCover=true)
    res.send({data:finalcollection})
    

}
const UpdatePriceDetails = async function (req, res) {
    let specificBook = await bookModel.find({}).populate('author').populate('publisher')
    let newcoll=specificBook.filter(x=>x.author.rating>=3.5)
    newcoll.forEach(x=>x.price+=10)
    res.send({data:newcoll})
    

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAllDetails = getBooksWithAllDetails
module.exports.UpdatDetails = UpdateDetails
module.exports.UpdatPriceDetails = UpdatePriceDetails
