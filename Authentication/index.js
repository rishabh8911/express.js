const express =  require('express');
const app = express();

app.use(express.json());
const users=[];

//return long string
function generateToken(){
    let options=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token="";
    for (let i=0; i<32; i++){
        token = token+options[Math.floor(Math.random()* options.length)]
    }
    return token;
}

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
        const token = generateToken();
        foundUser.token=token;
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
     const token = req.headers.token // server needs to get the token from headers 
     let foundUser=null;  //find the user who had that token 

     for (let i=0; i<users.length; i++){
         if (users[i].token==token) {  
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