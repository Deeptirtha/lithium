const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const qwa = require('../util/helper')
const edc = require('../validator/formatter')
//importing external package
const underscore = require('underscore')
var _ = require('lodash');

router.get('/test-me', function (req, res) {
//--------------------------------------------------Question 1----------------------------
    console.log("Calling my function ",xyz.myFunction())
//---------------------------------------------------Question 2----------------------------
console.log("sollution of Problem 2 Module 2",qwa.myasd())
//---------------------------------------------------Question 3----------------------------
console.log("sollution of Problem 3 Module 3",edc.nfn())

//---------------------------------------------------Question 4----------------------------


// ---------------------------------------Part1----------------------------------------
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
console.log(_.chunk(months,4))
// ---------------------------------------Part2----------------------------------------
const oddnum=[1,3,5,7,9,11,13,15,17,19];
console.log(_.tail(oddnum,9));
// ---------------------------------------Part3----------------------------------------
const allnum=[2,5,4,2,7]
console.log(_.union(allnum));
// ---------------------------------------Part4----------------------------------------
const pair=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]

console.log(_.fromPairs(pair));
    
    
    res.send('My first ever api!')

   
});

module.exports = router;

