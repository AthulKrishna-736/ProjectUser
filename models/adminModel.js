const mongoose =  require('mongoose')

//admin schema
const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    adminkey:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//admin collection
const adminCollection = mongoose.model('admin',adminSchema)

module.exports = adminCollection

