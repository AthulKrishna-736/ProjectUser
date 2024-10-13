const user = require('../models/userModel')
const bcrypt = require('bcrypt')

//password hashing
const securePassword = async(password)=>{
    try {
       const passwordHash = await bcrypt.hash(password,10)
       return passwordHash
    } catch (error) {
        console.log(error.message)
    }
}


//controllers
const loadRegister = async(req, res)=>{
    try {
        res.render('register.ejs', {
            showLogin: false // login form is shown initially
        })
    } catch (error) {
        res.send(error.message)
    }
}

//register control
const registerUser = async(req,res)=>{
    try {
        const email = req.body.email
        const userExist = await user.findOne({email:email})

        if(userExist){
            res.render('register.ejs',{
                signupError:'email already exist please login',
                loginError:null,
                signupSuccess:null,
                showLogin:true //shows sigup page
            })
        }
        const spassword = await securePassword(req.body.password)

        const createUser = new user({
            name:req.body.userName,
            email:req.body.email,
            password:spassword
        })
        const userData = await createUser.save() //saves to db
        if(userData){
            res.render('register.ejs',{
                signupError:null,
                loginError:null,
                signupSuccess:'Registration is successful Please Login',
                showLogin:false //shows login page
            })
        }

    } catch (error) {
       if(error.name === 'ValidationError'){
        return res.render('register.ejs',{
            signupSuccess:null,
            loginError:null,
            signupError:'Please fill every fields',
            showLogin:true //show signup page or stay in same state
        })
       }
    }
}

//login control
const loginUser = async(req, res)=>{
    try {
        const email =req.body.email
        const password = req.body.password

       const userData = await user.findOne({email:email})

       if(!userData){
        return res.render('register.ejs',{
            signupError:null,
            signupSuccess:null,
            loginError:'email does not exist please signup',
            showLogin:false  //login page
        })
       }
    
         const passwordMatch = await bcrypt.compare(password,userData.password)
         if(passwordMatch){

            //session storing
            req.session.user_id = userData._id  //id session stored
            req.session.email = userData.email //email session stored
            return res.redirect('/home')
            
         }else{
        res.render('register.ejs',{
        signupError:null,
        signupSuccess:null,
        loginError:'invalid email and password',
        showLogin:false // log in part will be shown
          })
        }

    } catch (error) {
        console.log(error.message)
    }
}

//home control
const loadHome = async(req, res)=>{
    try {
        res.render('home.ejs')
    } catch (error) {
        console.log(error.message)
    }
}

//logout control
const logoutUser = async(req, res)=>{
    try {
        req.session.destroy()
        res.redirect('/register')
    } catch (error) {
       console.log(error.message) 
    }
}

module.exports ={
    loadRegister,
    registerUser,
    loginUser,
    loadHome,
    logoutUser
}