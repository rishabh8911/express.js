const express= require("express");
const app = express();

//req=> handles the incoming requests from the client(browser,postman)
//res=> used to SEND DATA BACK to the client(res.json,res.status)

app.get("/sum/:a/:b", function(req,res){
    const a= parseInt(req.params.a);
    const b= parseInt(req.params.b);
    res.json({
        answer:a+b
    })

})
// app.get("/divide", function(req,res){

// })
// app.get("/subtract", function(req,res){

// })

app.listen(3000);