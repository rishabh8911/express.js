const express =  require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET='writerandom'

const app = express();

app.use(express.json());
const users=[];



app.post("/signup", function(req,res){
    const username= req.body.username;
    const password= req.body.password; 

    users.push({
        username: username,
        password: password
     })
     res.json({
        
        message:"you are sign up!"
     })
     console.log(users);
     
})

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    let foundUser =  null;

    for(let i=0; i<users.length; i++){
        if (users[i].username == username&&users[i].password==password)
            {
            foundUser = users[i]
        }
    }
    if (foundUser){
        const token = jwt.sign({  // no need to store token in memory since it is stateless token it stores itself its state
            username:username
        }, JWT_SECRET);  //convert useranme over to a jwt
        
        // foundUser.token=token;
        res.json({
            token: token
        }) 
    
    } else {
            res.status(403).send({
                message: "invalid usrname or psword"
            })
        }
        console.log(users);
        

})
// creating an AUTHENTICATED END POINT an ep that will only return you info if you already signed In
app.get("/me", function (req,res){
     const token = req.headers.token // jwt
     const decodeInfo= jwt.verify(token, JWT_SECRET) 
     const username=decodeInfo.username;

     let foundUser=null;  //find the user who had that token 

     for (let i=0; i<users.length; i++){
         if (users[i].username==username) {  
            foundUser=users[i]

         }
     }   // if the token is correct we return this
     if(foundUser){  
        res.json({
            username:foundUser.username,
            password:foundUser.password
        })
     } else{
        res.json({
            message:"token invalid"
        })
     }
})

    
   

app.listen(3000);