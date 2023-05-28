const express = require('express');

require('./db/conn')
const myInfo = require("./db/Myschema");

const app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views' , './views'); // view from the views folder // keyword and variable
app.set('view engine' , 'ejs'); // its is for view engines! //Templating Languages


app.get("/" , async (req,res)=>{
    res.render("home.ejs" ,{users})
})

app.get("/Form" , async (req,res)=>{
    res.render("Form.ejs")
})

const users = []

app.post("/user/add" , (req ,res)=>{
  
    users.push({
        name : req.body.name ,
        email : req.body.email,
        age : req.body.age ,
        city : req.body.city,
        profession : req.body.profession
    })
    res.redirect("/")
})



app.listen(3000 , ()=>{console.log("this server is fire on 3000")})