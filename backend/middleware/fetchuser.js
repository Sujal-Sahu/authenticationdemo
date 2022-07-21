const express=require('express');
const jwt=require('jsonwebtoken');
const jwt_secret='hhhhhhhh';
const app=express();
const fetchuser=(req,res,next)=>{
      console.log(req.header('authtoken'));
      let token=req.header('authtoken');
      if(!token){
        res.status(400).json({"error":"Please authenticate with valid id."});
      }
      // try{
      const data=jwt.verify(token,jwt_secret);
      req.user=data.user;
    next();
      // }catch(error){
      //   res.status(400).json({"error":"There has any error in your code."});
      // }
}

module.exports=fetchuser;