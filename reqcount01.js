const express = require("express");
const app=express();

//you have given an express server which has a few endpoints.
// your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// reqCount variable


let reqCount=0;
app.use(function(req,res,next){
    reqCount = reqCount+1;
    next();
})

app.get('/user', function(req,res){
    res.status(200).json({name:"welcome user"});
})
app.get('/user1', function(req,res){
    res.status(200).json({name:"welcome payal"});
})
app.get('/reqCount', function(req,res){
    res.status(200).json(reqCount);  //let us know how many time user hits the server
})
app.listen(3000);
