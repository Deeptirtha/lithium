const express = require('express');
const router = express.Router();

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
    final.forEach(a=>a.votingStatus="true")          //-----------------using foreach
   // final.map(a=>a.votingStatus="true")             //----------------using map


    // for(i=0;i<final.length;i++){
    //     final[i].votingStatus="true"
    // }
    
    console.log(persons)
    res.send("voater list is updated ")
})
module.exports = router;