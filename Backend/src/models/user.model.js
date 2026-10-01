const pool=require('../config/db')
const bcrypt=require('bcrypt')
//register a user
const registerUser=async(userdata)=>{
    console.log(userdata)
    const {name,email,mobile,password}=userdata
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const [result]=await pool.execute(
            `insert into users (name,email,mobile,password) 
            values (?,?,?,?)`,[name,email,mobile,hashedPassword]
        )
        return result
    } catch (error) {
        throw error
    }
}
//login user
const loginUser=async(userdata)=>{
    const {email,password}=userdata;
    try {
        //step1 find with email
        //if user then verify password if both true than create a token
        //and then send the token or set cookies

        const [users]=await pool.execute(`
            select * from users where email=?
            `,[email])
        if(users.length===0){
            return 'user not found'
        }
        const user=users[0]
        const verifyUser=await bcrypt.compare(password,user.password)
        if(!verifyUser){
            return 'user not found'
        }

        return user
    } catch (error) {
        throw error
    }
}

module.exports={ registerUser,loginUser }