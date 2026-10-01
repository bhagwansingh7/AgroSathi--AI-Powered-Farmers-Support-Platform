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
        const rows=await loginUser(userdata)
        if(rows.length===0){
            res.status(401).json({
                message:'user not found',
                
        })
        }
        res.status(201).json({
            message:'user login successfully',
            rows
        })       
    } catch (error) {
        res.status(401).json({
            message:'error in user login',
            error:error.message
        })       
    }
}

module.exports={registeruser,loginuser}