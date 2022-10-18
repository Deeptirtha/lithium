const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();



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
        else{res.send("enter a no brtween 0-3")}
 
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
    
      // let a=req.params
       let ac=req.params.filmid
        for(i=0;i<movies.length;i++){
        if(ac==movies[i].id){
            res.send(movies[i])
            return
       }}
        // else{res.send("no movie exists with this id")}}
       for(i=1;i<movies.length;i++){
        if(ac!==movies[i].id){
             res.send("no movie exists with this id")
             return
            }}

//----------------------------------------------------------------------2nd aproch of q-5----------------------------------------
//           id=req.params.filmid
//             const ax =movies.find(film=>film.id==id)
//             if(ax){
//                 res.send(ax)
//             }else{res.send("no movie exists with this id")}



    })
module.exports = router;