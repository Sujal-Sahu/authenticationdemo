import {React, useState } from "react";
import Logincontext from "./Logincontext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Loginstate=(props)=>{
const Signin=async(firstname,lastname,contact,email,password)=>{
    const response=await fetch(`http://localhost:5000/api/auth/signin/${firstname}/${lastname}/${contact}/${email}/${password}`,{
        method:'POST',
        headers : {
            "content":"application/json",
            'Accept': 'application/json'
        },  
    })
    
      const data=await response.json();
      return data;
}

const Login=async(email,password)=>{
    const response=await fetch(`http://localhost:5000/api/auth/login/${email}/${password}`,{
        method:'POST',
        headers : {
         "content":"application/json",
         'Accept': 'application/json'
       },
    })
    const data=await response.json();
    return data;
}

const Getuserdata=async()=>{
    const response=await fetch('http://localhost:5000/api/auth/getuserdata',{
        method:'POST',
        headers : {
         "content":"application/json",
         'Accept': 'application/json',
         "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMDUwMjc5ZjFlNjQ0YjRkNGMyOTJkIn0sImlhdCI6MTY1NTcyMjAyM30.2NfA1EFeeUSiI1z_IAvUx9bfwSUsMqxPEGc8JFfg3gQ"
       },  
    })
    const data=await response.json();
    console.log(data);
}

const Signout=async()=>{
    const response=await fetch('http://localhost:5000/api/auth/signout',{
        method:'POST',
        headers : {
         "content":"application/json",
         "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMDUwMjc5ZjFlNjQ0YjRkNGMyOTJkIn0sImlhdCI6MTY1NTcyMjAyM30.2NfA1EFeeUSiI1z_IAvUx9bfwSUsMqxPEGc8JFfg3gQ"
       },   
    })
    const data=await response.json();
    console.log(data);
}

    return(
        <Logincontext.Provider value={{Signin,Login,Getuserdata,Signout}}>
            {props.children}
        </Logincontext.Provider>
    )
}

export default Loginstate;