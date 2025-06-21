const express = require("express");
const app = express();

//without middleware

// function isOld(age){
//     if (age>=14){
//         return true;
    
//     }else{
//         return false;
//     }
// }

// app.get("/ride1/:age/", function(req,res){
//     if(isOld(req.params.age)){
//         res.json({
//             msg: "you have succefuly riden ride1"
//         })
//     } else{
//         res.status(411).json({
//             msg:"sorry under age"
//         })
//     }
// })
// app.get("/ride2/:age/", function(req,res){
//     if(isOld(req.params.age)){
//         res.json({
//             msg: "you have succefuly riden ride2"
//         })
//     } else{
//         res.status(411).json({
//             msg:"sorry under age"
//         })
//     }
// })

function  isAgeOfMiddleware(req,res,next){
    const age = req.query.agge
    if (age>=10){
        next();

    }else{
        res.json({
            msg:"soory you are under age"
        })
    }
}

// app.use(isAgeOfMiddleware)


app.get("/ride1" ,isAgeOfMiddleware, (req, res)=> {
    res.json({
        msg:"you have successfully riden ride 1 "
    })

   

})

app.get("/ride2",isAgeOfMiddleware, (req, res)=>{
    
     res.json({
         msg:"you have successfully riden ride 2"
     })
 
 })

app.listen(3000)
