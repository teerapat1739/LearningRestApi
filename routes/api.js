const express = require('express');
const router = express.Router();
const Ninja = require('../model/ninja');

//get a list of ninjas from the db
router.get('/ninjas',function(req,res,next){
    res.send({type:'GET'});
});

//add a new nonja to the db
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
      res.send(ninja);
    }).catch(next);
});

//update a ninja in the db
router.put('/ninjas:id',function(req,res,next){
    res.send({type:'PUT'});
});

//delete a ninjas from the db
router.delete('/ninjas:id',function(req,res,next){
    res.send({type:'DELETE'});
});
module.exports = router;
