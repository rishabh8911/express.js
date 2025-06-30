const express = require('express')
const jwt=require('jsonwebtoken');
const JWT_SECRET=('newmember');
const app=express();

let users=[];
app.use(express.json());

app.post("/signup",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username,
        password
    
    })
    res.json({
        message:"you are signed up"
    })
})

app.post("/signin",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    let searchUser = null;
    for (let i=0; i<users.length; i++){
        if(users[i].username==username&&users[i].password==password){
            searchUser=users[i];
        }
    }
    if (searchUser){
        const token=jwt.sign({
            username:username
        }, JWT_SECRET);

         res.json({
            token: token
        }) 

    }
     else {
            res.status(403).send({
                message: "invalid usrname or psword"
            })
        }


})

function auth(req,res,next){
    //modify the req or response cycle
     

    const token=req.header.token;
    const decodeInfo=jwt.verify(token,JWT_SECRET);
    if (decodeInfo.username){
        req.username=decodeInfo.username; //modifying the req object
        
        next()
    }else{
        res.json({
        message:"you are not logged in"
        })
    } 

}
app.get("/me", auth, function (req,res){
    


     let searchUser=null;  //find the user who had that token 

     for (let i=0; i<users.length; i++){
         if (users[i].username==req.username) {    //users username
            searchUser=users[i]

         }
     }   // if the token is correct we return this
     if(searchUser){  
        res.json({
            username:searchUser.username,
            password:searchUser.password
        })
     }
})



app.listen(3000);
