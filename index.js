// import exppress
const express = require ('express');

//2. import cors
const cors = require('cors');

// import logic - after creating logic.js
const logic = require('./Services/logic')

//3. create server application using express
const server = express()

//4. use  cors
server.use(cors());

//5.as json format
server.use(express.json())

const port = 8000;

//6.setup post for server application
server.listen(port ,()=>{
    console.log('listening to portal '+port);
});

server.get('/' ,(req,res)=>{
        res.status(200).json('started')
   
 })


//get all employes 
 server.get('/getEmployee/' ,(req,res)=>{
    logic.allEmployees().then((response)=>{
        res.status(response.statusCode).json(response)
    })
 })


 //add employees api
 server.post('/addEmployee' ,(req,res)=>{
    logic.addEmployees(req.body.id, req.body.name, req.body.age, req.body.designation, req.body.salary).then((response)=>{
res.status(response.statusCode).json(response)
    })
 })

 //delte
 server.delete('/deleteEmployee/:id' ,(req,res)=>{
    logic.deleteEmployees(req.params.id).then((response)=>{
res.status(response.statusCode).json(response)
    })
 })

 //get a particular employee
 server.get('/getAnEmployee/:id' ,(req,res)=>{
    logic.getAnEmpl(req.params.id).then((response)=>{
res.status(response.statusCode).json(response)
    })
 })

//  update an employee detail
server.post('/updateEmployee/:id' ,(req,res)=>{
    logic.updateAnEmpl(req.params.id ,req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary)
    .then((response)=>{
        res.status(response.statusCode).json(response)
    })
})