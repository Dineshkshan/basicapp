var express = require('express')
var route = express.Router()
var tableschema = require('../tableConfig/tableconfig')

route.post('/postdetails',async(req,res)=>
{
    var data = new tableschema({
        EmployeeId:req.body.EmployeeId,
        Name:req.body.Name,
        Place:req.body.Place
    })
    await data.save().then(e=>
        {
            res.status(200).send(e);
        }); 
})

route.get('/get',(req,res)=>
{
    var data = tableschema.find().then(e=>
        {
            res.status(200).send(e);
        });  
})

route.get('/get/:empid',(req,res)=>
{
    var data = tableschema.findOne({EmployeeId:req.params.empid}).then(e=>
        {
            res.status(200).send(e);
        });  

})

route.put('/update',(req,res)=>
{
   var data = tableschema.updateOne({EmployeeId:req.body.EmployeeId},{$set:{Place:req.body.Place,Name:req.body.Name}}).then(e=>
    {
        res.status(200).send(e);
    });  
})

route.delete('/delete/:empid',(req,res)=>
{
   var data = tableschema.deleteOne({EmployeeId:req.params.empid}).then(e=>
    {
        res.status(200).send(e);
    });  
})
  module.exports=route

