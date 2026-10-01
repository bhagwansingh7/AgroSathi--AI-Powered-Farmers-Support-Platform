const cookie = require('cookie-parser')
const { registerUser, loginUser } =require("../models/user.model")


const registeruser=async(req,res)=>{
    const userdata=req.body
    console.log(req.body)
    try {

        const rows=await registerUser(userdata);
        res.status(201).json({
            message:'registration successfull',
            rows
        })
        
    } catch (error) {
        res.status(401).json({
            message:'error in user registration',
            error:error.message
        })
    }


}
const loginuser=async(req,res)=>{
    const userdata=req.body
    try {
        const result=await loginUser(userdata)
        if(result.length===0){
           return res.status(401).json({
                message:'user not found',
                
        })
        }
        res.cookie('token', result.token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false
        });



        res.status(201).json({
            message:'user login successfully',
            result
        })       
    } catch (error) {
        res.status(401).json({
            message:'error in user login',
            error:error.message
        })       
    }
}
const getCurrentUser=(req,res)=>{
        
        const user=req.user
        // console.log(user)
        return res.status(200).json({
            message:'current user data',
            user
        })
 
}
module.exports={registeruser,loginuser,getCurrentUser}