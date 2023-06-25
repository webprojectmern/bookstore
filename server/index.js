const express=require('express');
require('dotenv').config();
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const router=require('./routes/Router')
require('./conn/db');
app.use('/books',router);
const port=5000;
app.listen(port,()=>{
    console.log("server is running");
})