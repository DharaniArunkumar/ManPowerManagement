const express=require('express')
const bodyparser=require("body-parser")
const UserModel=require('../Models/userModel')

const router=express.Router()

router.use(bodyparser.json())

router.get('/',(req,res)=>{
    res.send("user page")
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser=new UserModel(req.body)

    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User posting page")
})

router.get('/get/:email',(req,res)=>{
    UserModel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

router.put('/put/:_id',(req,res)=>{
    
    UserModel.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send("User update page")
})

module.exports=router