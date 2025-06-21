//error-handling Middleware defined at the end of the file/code
 
const express= require("express")
const app =express();

// 1. ensure that if there is ever an exception , the end user sees a status code of 404
//2. mainatin the errorCount variable whose value should go up every time there is an 
//exception in any endpoint

app.get('/user1',function(res,req){
    throw new Error ("No user")  // this leads to expose the real error on user screen which is not good
    res.status(200).json({name:"jj"});
})

app.get('/user2', function(req,res){
    res.status(200).json({msg:"created fake user"});
})
app.get('/errorCount', function(req,res){
    res.status(200).json({errorCount});
})
  


app.use(function(err,req,res,next){
    res.status(404).send=({})
    errorCount=errorCount+1;   
})
app.listen(3000);


