var express = require("express");
var app = express();
const path = require('path');

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.listen(process.env.port|| 5000,()=>{
    console.log("Server up and running..")
})