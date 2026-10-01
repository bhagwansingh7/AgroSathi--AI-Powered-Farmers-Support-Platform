const express=require('express');
const app=express();
const env=require('dotenv').config();
const pool=require('./src/config/db.js');
const PORT=process.env.PORT || 5000;
const userRoutes=require('./src/routes/user.route.js')
const {isAuth}=require('./src/middlewares/isAuth.js')
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use('/api/user',userRoutes)
app.get('/verify',isAuth,(req,res)=>{
    console.log('route hit')
    
        res.json({
            message:'is auth middleware works'
        })
     
    
})


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})