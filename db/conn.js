// connecting database here 

const mongoose = require("mongoose"); // my data base is here

mongoose.connect('mongodb://localhost:27017/UserInfo' ,{ // making database here 

}).then(()=>{
    console.log("connection with Data-Base is sucessfull") // if sucess the data base is connect here 
}).catch((e)=>{
    console.log( "error - no connection" , e) // if it is not connect then it will give us error!
})

