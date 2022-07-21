const express=require('express');
const cors=require('cors');
const connecttomongoose = require('./db');
// const bodyparser=require('body-parser');
const authentication=require('./router/auth');
const app=express();
connecttomongoose();
app.use(cors());
// app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port=5000;
app.get("/",(req,res)=>{
    res.send("Good Morning!!")
})
app.use('/api/auth',authentication);
app.listen(port,(req,res)=>{
    console.log(`The server is starting at http://localhost:${port}`);
})