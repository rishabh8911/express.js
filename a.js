
const express = require('express')

const app = express()

const todoData = [{
  id:1,
  tittle: "fitness",
  description : "go to gym"
  
},{
  id:2,
  tittle: "education",
  description : "go to school"
  
},
{
  id:3,
  
  tittle: "wasted",
  description : "go to college"
  
}
]


// route handlers
app.get('/todo',  (req, res) => {
  res.send(todoData)
})
app.get('/todo/:id',  (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todoData.find(item=> item.id ===id)
  res.send(todo)
 

})
app.use(express.json());

app.post('/create-todo',  (req, res) => {
  
  const newTodo=req.body
  newTodo.id = todoData.length+1;
  todoData.push(newTodo)
  res.send(newTodo)
})

app.listen(5000)



 

