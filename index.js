// const express = require('express');
// const app = express();

// app.use(express.json());

// const users= [{
//     name:"jon",
//     liver:[{
//         healthy:false
//     }]
// }];



// app.get('/',  (req,res)=>{
//     const jonLiver=users[0].liver;
//     const numOfLiver= jonLiver.length;
//     let numOfhealthyLiver =0;
//     for (let i=0; i<jonLiver.length; i++){
//         if(jonLiver[i].healthy){
//             numOfhealthyLiver=numOfhealthyLiver+1;
//         }
//     }
//     const noOfBadLiver= numOfLiver - numOfhealthyLiver;

//     res.send({
//         numOfLiver,
//         numOfhealthyLiver,
//         noOfBadLiver});
    
    
// })
// app.post('/',(req,res)=>{
//     console.log("Received POST body:", req.body);
//     const isHealthy = req.body.isHealthy;
//     users[0].liver.push({
//         healthy: isHealthy
//     })
//     res.json({
//         msg:"done"
//     })
// })

// app.delete('/',(req,res)=>{
//     const newLiver=[];
//     for(let i=0; i<users[0].liver.length; i++)
//     {
//         if (users[0].liver[i].healthy){
//             newLiver.push({
//                 healthy:true
//             })
//         }
//     }
//     users[0].liver=newLiver;
//     res.json({msg:"donnne"})
// })

// app.listen(3000);