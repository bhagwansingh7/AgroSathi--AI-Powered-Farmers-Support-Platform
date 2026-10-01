const express=require('express')
const router=express.Router()
const {isAuth}=require('../middlewares/isAuth')
const {registeruser, loginuser,getCurrentUser}=require('../controllers/user.controller')

router.get('/user',(req,res)=>{
    res.send('user routes')
})
router.post('/register',registeruser)
router.post('/login',loginuser)
router.get('/me',isAuth,getCurrentUser)
module.exports=router