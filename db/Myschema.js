const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({ // my schema 
    id : {type : Number},
    name : {type : String , required : true},
    email :{type : String , required : true},
    age : {type : Number , required : true},
    city : {type : String , required : true},
    profession : {type : String}
})

const myInfo = mongoose.model("myInfo" , userInfoSchema) // collection and my database 

module.exports =  myInfo