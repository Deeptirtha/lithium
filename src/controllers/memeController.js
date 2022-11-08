let axios = require("axios")


let meme = async function (req, res) {
    try {
        
        let options = {
            method: 'get',
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        let data = result.data
     
     

        res.status(200).send({ memepage: data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let Mymeme = async function (req, res) {
    let a=req.query.template_id
    let b=req.query.text0
    let c=req.query.text1
    let d=req.query.username
    let e=req.query.password
    
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${a}&text0=${b}&text1=${c}&username=${d}&password=${e}`
        }
        let result = await axios(options)
        let data = result.data
     
     

        res.status(200).send({ memepage: data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.meme=meme
module.exports.Mymeme=Mymeme