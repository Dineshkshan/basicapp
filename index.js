var express = require('express')
const mongoose= require('mongoose')
var app = express()
var route = require('./route/route')
const PORT = 5000;
const url = 'mongodb://localhost:27017/Database2';

app.use(express.json())

mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true },(err)=>
{
    if(err) throw err;
    console.log("Database connected Successfully");
})
app.use('/',route)

app.listen(PORT,(err)=>
{
    if(err)
    {
        console.log('Application is not running')
    }
    else
    {
        console.log('Application is running in port',PORT)
    }
})