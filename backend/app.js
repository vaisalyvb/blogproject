
const express=require('express');
const app = new express();
const User = require('./Userdata');


const port=process.env.PORT || 8000;

app.post('/signup', (req, res) => {
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
       console.log(req.body);
       User.findOne({email : req.body.email}).exec(function(err,user){
      console.log(user);
      if(user) {
        res.status(401).send('User exists')
        console.log("user exists");
      } 

      else{

       var data = {
            firstname : req.body.firstname,
            lastname: req.body.lastname,
            email : req.body.email,
            phone: req.body.phone,
            password : req.body.password,
            confirmpassword : req.body.confirmpassword,
           
  }
  var data = new User(data);
  data.save();
}
})
})