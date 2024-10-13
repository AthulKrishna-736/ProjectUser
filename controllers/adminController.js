const admin = require('../models/adminModel')
const user = require('../models/userModel')
const bcrypt = require('bcrypt')

//hashing password and adminkey
const securePassword = async (password) => {
    try {
        const passwordHash = await bcrypt.hash(password,10)
        return passwordHash
    } catch (error) {
        console.log(error.message)
    }    
}

const secureAdminkey = async (adminkey) => {
    try {
        const keyHash = await bcrypt.hash(adminkey,10)
        return keyHash
    } catch (error) {
        console.log(error.message)
    }
}


//load adminpage
const load_Log_Admin = async(req,res)=>{
    try {  
        const loginError = req.query.loginError || null; // login message
        const signupSuccess = req.query.signupSuccess || null; // signup message   
        res.render('adminLogin.ejs',{ loginError,signupSuccess })
    } catch (error) {
        console.log(error.message)
    }
}

//load register
const load_Register_Admin = async(req, res)=>{
    try {
        const signupError = req.query.signupError || null //sigup message
        res.render('adminRegister.ejs',{ signupError })
    } catch (error) {
        console.log(error.message)
    }
}

const registerAdmin = async(req, res)=>{
    try {
        const email = req.body.email
        const adminExist = await admin.findOne({email:email})

        if(adminExist){
            return res.redirect('/admin/register?signupError=Admin already exists. Please login!')
        }

        const spassword = await securePassword(req.body.password)
        const sadminkey = await secureAdminkey(req.body.adminkey)

        const createAdmin = new admin({
            name:req.body.name,
            email:req.body.email,
            adminkey:sadminkey,
            password:spassword
        })
        const adminData = await createAdmin.save() //saves admindata

        return res.redirect('/admin/login?signupSuccess=Signup successful! Please log in.')
    } catch (error) {
        console.log(error.message)
    }
}

//handle login
const loginHandle = async (req, res) => {
    const email = req.body.email
    const adminkey = req.body.adminkey
    const password = req.body.password
    
    const adminData = await admin.findOne({email:email})
    
    if(!adminData){
        return res.render('adminLogin',{loginError:'Admin does not exist. Please signup!',signupSuccess:null})
    }

    //hash values compare
    const spassword = await bcrypt.compare(password, adminData.password);
    const sadminkey = await bcrypt.compare(adminkey, adminData.adminkey);
    
    if(spassword && sadminkey){
        req.session.admin_id = adminData._id  //admin session stored
       return res.redirect('/admin/dashboard') //redirecting to dashboard
    }
    else
    {
        return res.render('adminLogin',{loginError:'Invalid email, password, or admin key. Please try again.',signupSuccess:null}) 
    }
}

//load dashboard
const loadDashboard = async (req, res) => {
    try {
        const user_data = await user.find().sort({name:1})
        await res.render('adminDash.ejs',{user_data, message:null})
    } catch (error) {
        console.log(error.message)
    }
    
}

const logoutAdmin = async (req, res) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.log('Error destroying session:')
                return res.redirect('/admin/dashboard')
            }
            res.clearCookie('connect.sid')
            res.redirect('/admin/login')
        });        
    } catch (error) {
        console.log(error.message)
    }    
}


//admin operation

//searching users
const search_user = async (req, res) => {
    try {
        const searchQuery = req.body.search;
        const regex = new RegExp(searchQuery, 'i'); // 'i' makes the search case-insensitive

        // Search by name or email using the correct model reference
        const users = await user.find({ 
            $or: [
                { name: { $regex: regex } },
                { email: { $regex: regex } }
            ]
        });

        res.render('adminDash.ejs', { user_data: users });
    } catch (error) {
        console.log(error.message);
    }    
}

//editing users
const editUser = async (req, res) => {
    try {
        let userId = req.params.id 
        
        const userdetails = await user.findById(userId)
        res.render('editUser.ejs',{ userdetails })
    } catch (error) {
        console.log(error.message)
    }    
}


//deleting users
const deleteUser = async (req, res) => {
    try {
        let deleteId = req.params.id

        const userDelete = await user.findByIdAndDelete(deleteId)

        if(userDelete){
            res.redirect('/admin/dashboard')
        }
        else{
            console.log('error while deleting')
        }
    } catch (error) {
        console.log(error.message)
    }    
}

//updating users
const updateUser = async (req,res) => {
    try {
        const update = await user.findByIdAndUpdate(
            req.params.id,
            {
                name:req.body.username,
                email:req.body.email
            },
            { new:true }
        )

        if(update){
            res.redirect('/admin/dashboard')
        }else{
            console.log('error while updating')
        }

    } catch (error) {
     console.log(error.message)   
    }
}

//loading page for user creation
const loadcreateUser = async (req, res) => {
    try {
        res.render('createUser.ejs')
    } catch (error) {
        console.log(error.message)
    }    
}

//create users
const creat_user = async (req, res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password,10)
        const email = req.body.email;
        const userExist = await user.findOne({ email: email });

        if (userExist) {
            return res.render('createUser', { error: 'User already exists. Please choose a different email.' });
        }
        const createUser = await new user(
            {
                name:req.body.name,
                email:req.body.email,
                password:passwordHash
            }
        )
        await createUser.save()
        res.redirect('/admin/dashboard')
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports ={
    load_Log_Admin,
    load_Register_Admin,
    registerAdmin,
    loginHandle,
    loadDashboard,
    logoutAdmin,
    editUser,
    deleteUser,
    updateUser,
    loadcreateUser,
    creat_user,
    search_user
}