import React, { useState,useEffect,useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Logincontext from '../context/Logincontext';
function Login() {
  const nav=useNavigate();
  let {Signin,Login,Getuserdata,Signout} = useContext(Logincontext);
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    useEffect(()=>{
      localStorage.clear();
},[])
    const handlesimpleaction=(e)=>{
            e.preventDefault();
            document.getElementById('section1').style.display="none";
            document.getElementById('hideshow').style.display="block";
    }
    const handlelogin=async(e)=>{
      e.preventDefault();
      try{
      const data=await Login(email,password);
    localStorage.setItem('token',JSON.stringify(data.authtoken));
    nav("/dashboard");
      }
      catch(error){
        window.location.reload(false);
      document.getElementById('alertmsg').style.display='block';
     setTimeout(() => {
      document.getElementById('alertmsg').style.display='none';
     }, 3000);
      }
    }
  return (
    <div>
      <div className={`alert alert-danger`} role="alert" style={{display:"none"}} id="alertmsg">
              Password doesn't match please Enter the password correctly!!;
         </div>
        <div className="sec1" id='section1'>
        <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label"><h3>Email address</h3></label>
    <input type="email" className="form-control basicclass" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email ' value={email} onChange={(event)=>{event.preventDefault();setemail(event.target.value);}}/>
    <div id="emailHelp" className="form-text" style={{color:"black"}}>We'll never share your email with anyone else.</div>
  </div>
  <i className="fa-2x fa-solid fa-circle-arrow-right iconclass" onClick={handlesimpleaction}></i>
  </div>
  <div className="sec1" id='hideshow' style={{display:"none"}}>
       <div className="centerstyle">
       <label for="inputPassword5" className="form-label"><h3>Password</h3></label>
<input type="password" id="inputPassword5" className="form-control basicclass" aria-describedby="passwordHelpBlock" placeholder='Enter your Password ' value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value);}}/>
<div id="passwordHelpBlock" className="form-text" style={{color:"black"}}>
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
</div>
<i className="fa-2x fa-solid fa-circle-arrow-right iconclass" onClick={handlelogin}></i>
       </div>
       <p>Don't have an account? <a href="/" style={{textdecoration:"none",color:"blue"}}>Create New Account</a></p>
    </div>
  )
}

export default Login
