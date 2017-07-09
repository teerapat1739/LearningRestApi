const express = require('express');
const bodyPaser = require('body-parser');

//set up express app
const app = express();
app.use(bodyPaser.json());

//initialize routes
app.use('/api',require('./routes/api'));

//listen for requests
app.listen(process.env.port||4000,function(){
  console.log('now listening for request');
});
