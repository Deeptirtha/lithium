const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

//----------------------------------------------------------------------question-1----------------------------------------------------------
router.get('/movies', function (req, res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings' , 'Batman begins']
   
    res.send(movies)
})
//--------------------------------------------------------------------------question-2------------------------------------
router.get('/movies/:x', function (req, res){

    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings' , 'Batman begins']
    let a=req.params
   
    res.send(movies[a.x])
})
//------------------------------------------------------------question--3-----------------------------------------------------------
router.get('/movie/:x', function (req, res){

    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings' , 'Batman begins']
    let a=req.params
    let ac=req.params.x
  
    if(ac<movies.length){
            res.send(movies[a.x])
        }
        else{res.send("enter a valid no")}
 
})
//------------------------------------------------------------question---4----------------------------------------------

router.get('/films', function (req, res){
    let movies = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       

     res.send(movies)
})

//----------------------------------------------------------question--5------------------------------------------------------------------
router.get('/films/:filmid', function (req, res){
    let movies = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
       let a=req.params
       let ac=a.filmid
        for(i=0;i<movies.length;i++){
       if(ac==movies[i].id){
            res.send(movies[i])
           
        }}
       //  else{res.send("no movie exists with this id")}}
       for(i=0;i<movies.length;i++){
        if(ac!==movies[i].id){
             res.send("no movie exists with this id")
            
         }}
 })
// // Example 1 for path params
// router.get('/students/:studentName', function(req, res){
//     // ':' denotes that the following part of route is a variable
//     // The value of this variable is what we are sending in the request url after /students
//     // This value is set in the form of an object inside req.params
//     // The object contain key value pairs
//     // key is the variable in the route
//     // value is whatever dynamic value sent in the request url
//     let myParams = req.params

//     // params attribute is fixed in a request object
//     // params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// // Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })

module.exports = router;