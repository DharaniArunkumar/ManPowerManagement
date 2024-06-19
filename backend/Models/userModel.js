const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    name: String,
    email: String,
    password:String,
    cname: {
        type:String,
        default:null
    },
    number: {
        type:Number,
        default:null
    },
    description: {
        type:String,
        default:null
    },
    person: {
        type: Number,
        default:null
    },
    date: {
        type:Date,
        default:null
    },
    status: {
        type:String,
        default:null
    }
})

const UserModel=mongoose.model('Manpower',userSchema)
module.exports=UserModel