const mongoose = require('mongoose')

//create user schema
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    } 
})

//create user collection
const userCollection = mongoose.model("user",userSchema)

//export collection
module.exports = userCollection;