const express=require('express')
const cors=require('cors')
const app=express()
const mongoose = require("mongoose")
const user=require('./routes/users')

mongoose.connect('mongodb://127.0.0.1:27017/Manpower')

mongoose.connection.on('connected',()=>{
    console.log("mongodb connected successfully")
})

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.use('/users',user)

app.listen(3001,()=>{
    console.log('Server is running on port 3001')
})