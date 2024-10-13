//core modules
const express = require('express')
const path =  require('path')
const app = express()
const user_route = express.Router()
const session = require('express-session')
const nocache = require('nocache')

//local modules
const userController = require('../controllers/userController')
const config = require('../config/config')
const auth = require('../middleware/auth')
const admin_route = require('./adminRoutes')


//session handling
app.use(session({
    secret:config.sessionSecret,
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))

user_route.use(nocache());
admin_route.use(nocache());


//middlewares
app.use(express.urlencoded({extended:true}))


//app settings
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static(path.join(__dirname,"../public")))

//user routes
user_route.get('/register',auth.isLogout,userController.loadRegister)
user_route.post('/register',userController.registerUser)
user_route.post('/login',userController.loginUser)
user_route.get('/home',auth.isLogin,userController.loadHome)
user_route.get('/logout',auth.isLogin,userController.logoutUser)

//use user route
app.use('/',user_route)

//use admin route
app.use('/admin',admin_route)


module.exports = app;