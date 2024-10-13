const isLogin = async (req,res,next) => {
   try {
    if(req.session.user_id){ next();}
    else{
        res.redirect('/register')
    }
   
    } catch (error) {
    console.log(error.message)
    }
}

const isLogout = async (req,res,next) => {
    try {
        if(req.session.user_id){
            res.redirect('/home')
        }else{
            next();
        }
      
     } catch (error) {
       
     console.log(error.message)
     }
 }


 const isAdminLogin = async (req,res,next) => {
    try {
     if(req.session.admin_id){ next();}
     else{
         res.redirect('/admin/login')
     }
    
     } catch (error) {
     console.log(error.message)
     }
 }
 
 const isAdminLogout = async (req,res,next) => {
     try {
         if(req.session.admin_id){
             res.redirect('/admin/dashboard')
         }else{
             next();
         }
       
      } catch (error) {
        
      console.log(error.message)
      }
  }


 module.exports = {
    isLogin,
    isLogout,
    isAdminLogin,
    isAdminLogout
 }