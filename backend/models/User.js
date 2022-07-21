const mongoose = require('mongoose');
const express=require('express');
const app=express();

const userschema={
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}

const User=mongoose.model('user',userschema);
User.createIndexes();
module.exports=User