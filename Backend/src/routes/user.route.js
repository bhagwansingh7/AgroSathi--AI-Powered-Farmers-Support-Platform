const express=require('express')
const router=express.Router()
const {registeruser, loginuser}=require('../controllers/user.controller')

router.get('/user',(req,res)=>{
    res.send('user routes')
})
router.post('/register',registeruser)
router.post('/login',loginuser)
module.exports=router