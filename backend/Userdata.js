const mongoose = require('mongoose');
//localhost
mongoose.connect('mongodb://localhost:27017/blog');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    phone:String,
    address:String
});

var User=mongoose.model('User',UserSchema);

module.exports = User;