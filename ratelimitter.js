//create a global middleware (app.use) which 
//will rate limit the request from a user to only 5 request per sec
//if user sends more than 5 requests in a single sec , the server
//should block than with 404
//user will be sending in their user id in the header as 'user-id'


const express= require('express')
const app=express();

 
app.listen(3000);
let numberOfRequestsForUser={};
setInterval(()=>{
    numberOfRequestsForUser={};

},1000);

app.use(function(req,res,next){
    const userId=req.headers("user-id");
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId]=numberOfRequestsForUser+1;
        if(numberOfRequestsForUser[userId]>5){
            res.status(404).send("no entry");
        }else{
            numberOfRequestsForUser[userId]=1; 
            next();
        }
    }
})

