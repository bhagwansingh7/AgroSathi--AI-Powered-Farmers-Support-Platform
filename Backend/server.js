const express=require('express');
const app=express();
const env=require('dotenv').config();
const pool=require('./src/config/db.js');
const PORT=process.env.PORT || 5000;
const userRoutes=require('./src/routes/user.route.js')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/user',userRoutes)



app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `)
})