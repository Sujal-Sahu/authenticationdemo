import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logincontext from '../context/Logincontext';
function Signup() {
  const nav=useNavigate();
     
  let {Signin,Login,Getuserdata,Signout} = useContext(Logincontext);
  useEffect(()=>{
        localStorage.clear();
  },[])
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [contact,setcontact]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [confirmpassword,setconfirmpassword]=useState("");
  const handlesubmit=async(event)=>{
    event.preventDefault();
    if(password===confirmpassword){
    const data = await Signin(firstname,lastname,contact,email,password);
    localStorage.setItem('token',JSON.stringify(data.authtoken));
    nav("/dashboard");
    }
    else{
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
      <div className="center"><h3>Registration</h3></div>
      <div className="flexitem">
      <input type="text" className="form-control basicclass1" id="exampleInputfirstname1" placeholder='First Name' value={firstname} onChange={(event)=>{event.preventDefault();setfirstname(event.target.value);}}/>
      <input type="text" className="form-control basicclass1" id="exampleInputlastname1" placeholder='Last Name' value={lastname} onChange={(event)=>{event.preventDefault();setlastname(event.target.value);}}/>
      </div>
      <input type="text" className="form-control basicclass1" id="exampleInputContactno." placeholder='Contact No.' value={contact} onChange={(event)=>{event.preventDefault();setcontact(event.target.value);}}/>
      <input type="email" className="form-control basicclass1" id="exampleInputEmail1" placeholder='Email' value={email} onChange={(event)=>{event.preventDefault();setemail(event.target.value);}}/>
      <input type="text" className="form-control basicclass1" id="exampleInputpassword1" placeholder='Password' value={password} onChange={(event)=>{event.preventDefault();setpassword(event.target.value);}}/>
      <input type="text" className="form-control basicclass1" id="exampleInputconfirmpassword1" placeholder='Confirm Password' value={confirmpassword} onChange={(event)=>{event.preventDefault();setconfirmpassword(event.target.value);}}/>
      <input class="btn btn-primary" type="submit" value="Register" onClick={handlesubmit}></input>
      <p>Already registered? <a href="/login" style={{textdecoration:"none",color:"blue"}}>Login Here</a></p>
    </div>
  )
}

export default Signup
