//connect mongodb
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Register");

//Requiring the modules
const app = require('./routes/userRoutes')

app.listen(3000,()=>{
    console.log("server is running http://localhost:3000/register , http://localhost:3000/admin/login")
})

