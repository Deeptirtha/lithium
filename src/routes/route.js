const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]


router.post("/player" , function(req, res) {
    let newplayerdetails=req.body
    let newplayer=req.body.name
    console.log(newplayer)
    for(i=0;i<players.length;i++){
        if(players[i].name!==newplayer){
            players.push(newplayerdetails)
            console.log(players)
           res.send("player name added")
        }
       // res.send("player already exist in the list")
    }
   
   
})







module.exports = router;