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
           ],
           "id":5
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
    const checkpoin=players.find(a=>a.name==newplayer)
   if(checkpoin){
        res.send("error.. Player already processed")
    }else{players.push(newplayerdetails)
        console.log(players)
        res.send("player details added")}
   
   
})

//===================================================extra question=========================================================


router.post("/players/:name/:id" , function(req, res) {

let newplayerdetails=req.params
    let newplayer=newplayerdetails.name
let x=players.findIndex(element => element.name ==newplayer)

if(x>=0){
    if(players[x].id>0){
       return  res.send("error...The booking was already processed "+JSON.stringify(players[x]))
    }else{
        players[x].id=54887
       return res.send("player id added "+JSON.stringify(players[x]))
    }
    
}
else{res.send("something relevant about player not being found.")}
})
//=================================================================Question-2 (vote)============================================
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 
router.get("/voatingage",function(req,res){
    let age=req.query.age
    let final=persons.filter(a=>a.age>age)
    for(i=0;i<final.length;i++){
        final[i].votingStatus="true"
    }
    console.log(persons)
    res.send("voater list is updated ")
})





module.exports = router;