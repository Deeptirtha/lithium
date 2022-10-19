const { json } = require('body-parser');
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
       }
   ]


router.post("/player" , function(req, res) {
    let newplayerdetails=req.body
    let newplayer=req.body.name
    
    // for(i=0;i<players.length;i++){
    //     if(players[i].name!==newplayer){
    //         players.push(newplayerdetails)
    //         console.log(players)
    //       return res.send("player name added")
    //     }
        
    // }
    // res.send("playerr exist with this name")


    const checkpoin=players.find(a=>a.name==newplayer)
    if(checkpoin){
        res.send("player exist with this name")
    }else{players.push(newplayerdetails)
        console.log(players)
        res.send("player details added")}
   
   
})







module.exports = router;