const mysql=require('mysql2/promise');
const pool=mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections:true,
    connectionLimit:10,
    ssl:{
        rejectUnauthorized:true
    }
})

const checkConn=async()=>{
    try {
        const conn=await pool.getConnection();
        console.log('db connected successfully');
        const [result]=await pool.execute('show tables');
        console.log('database tables:',result)
        
    } catch (error) {
        console.log('database connection error:',error)
    }
}
checkConn();

module.exports=pool
