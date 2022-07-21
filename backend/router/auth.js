const express=require('express');
const mongoose=require('mongoose');
const User=require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {body,validationResult}=require('express-validator');
const fetchuser=require('../middleware/fetchuser');
const bodyParser = require('body-parser');

const router = express.Router();
const app=express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
router.post('/signin/:firstname/:lastname/:contact/:email/:password',
       async(req,res)=>{
        console.log("signup function is called.")
              const {firstname,lastname,contact,email,password}=req.params;
              const jwt_secret='hhhhhhhh';
              let user=await User.findOne({email});
              if(user){
                return res.status(400).json({"error":"A user already exists with same email id."});
              }
              let sec_password=bcrypt.hashSync(password,10);
              console.log(sec_password);
             let role='cutomer';
              user=await User.create({firstname,lastname,contact,email,password:sec_password});
              const data={
                user:{
                    id:user.id
                }
              }
              const authtoken=jwt.sign(data,jwt_secret);
              return res.status(200).json({authtoken,user});
            }
);

router.post('/login/:email/:password',
      async(req,res)=>{
            const jwt_secret='hhhhhhhh';
            const {email,password}=req.params;
            let user=await User.findOne({email: {$regex:email, $options: "i"}});
            if(!user){
                return res.status(400).json({"error":"please enter the correct credentials"});
            }
            const passwordcmp=bcrypt.compare(password,user.password);
            if(!passwordcmp){
              return res.status(400).json({"error":"Please Enter the correct credentials"});
            }
            const data={
                user:{
                    id:user.id
                }
            }
            const authtoken=jwt.sign(data,jwt_secret);
            return res.status(200).json({authtoken,user});
});

router.post('/getuserdata',fetchuser,async(req,res)=>{
          const userid=req.user.id;
          let existuser=await User.findById(userid);
          if(!existuser){
              return res.status(400).json({"error":"Not a such any user exists"})
          }
          return res.status(200).json(existuser);
})

router.post('/signout',fetchuser,async(req,res)=>{
    try{
        const userid=req.user.id;
        let user=await User.findByIdAndDelete(userid);
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(400).json({"error":"There has some error in your code."});
    }
})

module.exports=router;