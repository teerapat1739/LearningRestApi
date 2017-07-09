const express = require('express');
const router = express.Router();
const Ninja = require('../model/ninja');

//get a list of ninjas from the db
router.get('/ninjas',function(req,res,next){
    Ninja.geoNear(
      {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
      {maxDistance: 100000,spherical:true}
    ).then(function(ninjas){
      res.send(ninjas);
    }).catch(next);
});

//add a new nonja to the db
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
      res.send(ninja);
    }).catch(next);
});

//update a ninja in the db
router.put('/ninjas/:id',function(req,res,next){
  Ninja.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){//เราไม่ส่งninjaเข้าไปในฟังชั่นตรนี้ เพราะ res.send(ninja); จะแสดงอันเก่าที่กับไม่update
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  }).catch(next);
});

//delete a ninjas from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});


module.exports = router;
