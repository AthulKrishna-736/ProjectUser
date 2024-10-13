//core modules
const express = require('express')
const app = express()
const admin_route = express.Router()
const auth = require('../middleware/auth')
//local modules
const adminController = require('../controllers/adminController')


//admin routes
admin_route.get('/login',auth.isAdminLogout,adminController.load_Log_Admin)
admin_route.post('/login',adminController.loginHandle)
admin_route.get('/register',auth.isAdminLogout,adminController.load_Register_Admin)
admin_route.post('/register',adminController.registerAdmin)
admin_route.get('/dashboard',auth.isAdminLogin,adminController.loadDashboard)
admin_route.get('/logout',auth.isAdminLogin,adminController.logoutAdmin)

//admin operation routes
admin_route.get('/editUser/:id', auth.isAdminLogin, adminController.editUser)
admin_route.get('/deleteUser/:id', auth.isAdminLogin, adminController.deleteUser)
admin_route.post('/editUser/:id', auth.isAdminLogin, adminController.updateUser)
admin_route.get('/createUser', auth.isAdminLogin, adminController.loadcreateUser)
admin_route.post('/createUser', auth.isAdminLogin, adminController.creat_user)
admin_route.post('/search', auth.isAdminLogin, adminController.search_user)


module.exports = admin_route