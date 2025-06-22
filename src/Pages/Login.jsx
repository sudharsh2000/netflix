import React, { useState } from 'react'
import './Signup.css'
import { Navigate, useNavigate } from 'react-router'
import { login } from '../Components/authentication'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Components/constant'
function LogIn() {
    const navigate=useNavigate()
    const [email,setemail]=useState('')
    
    const [password,setpassword]=useState('')
    const [error,seterror]=useState({})
    const loginfn= async(e)=>{
      e.preventDefault();
      if(validationfu()){
      try{
        await signInWithEmailAndPassword(auth, email, password)
        .then((er)=> navigate("/") )
        .catch((er)=> seterror(er.message) )
 
  
      }
      catch(er){
        seterror({password:'Invalid username or password'})
      }
    }
    }
    const validationfu=()=>{
  const newerror={}
  let valid=true;
if (!email){
  
   newerror.mail='* Please Enter E-mail';
    valid=false;
    
  }
  else if(!/\S+@\S+\.\S+/.test(email)){
     newerror.mail='* Please enter valid email';
    valid=false;
  }
  if (!password){
   newerror.password='* Please Enter Password';
    valid=false;
    
  }
  seterror(newerror);


  
  return valid;
}
  return (
    <div className='main-page'>
    <div className="transparent-login">
        <div className='sign-layout'>
          <h1>Log In</h1>
          <form onSubmit={loginfn}>

         
            <input placeholder='Email id'  onChange={(e)=>{
              setemail( e.target.value);
              seterror((val)=>({...val,mail:''}))
              }} value={email}   />
           <br/>
                     {error.mail&&<span style={{color:'red',fontSize:'smaller'}}>{error.mail}</span>}

            <input placeholder='Password' onChange={(e)=>{
              setpassword( e.target.value);
            seterror((val)=>({...val,password:''}))
              }} value={password} type="password"  />
                    {error.password&&<span style={{color:'red',fontSize:'smaller'}}>{error.password}</span>}

            <button className='sign-btn'>Log In</button>
            <p className='sign-txt'>New to Netflix ? <a className='login-txt' onClick={()=>navigate('/signup')}>Signup Now</a></p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default LogIn