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
            res.status(401).json({
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

module.exports={registeruser,loginuser}