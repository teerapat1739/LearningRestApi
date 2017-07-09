const express = require('express');
const router = express.Router();

//get a list of ninjas from the db
router.get('/ninjas',function(re,res){
    res.send({type:'GET'});
});

//add a new nonja to the db
router.post('/ninjas',function(re,res){
    res.send({type:'POST'});
});

//update a ninja in the db
router.put('/ninjas:id',function(re,res){
    res.send({type:'PUT'});
});

//delete a ninjas from the db
router.delete('/ninjas:id',function(re,res){
    res.send({type:'DELETE'});
});
module.exports = router;
