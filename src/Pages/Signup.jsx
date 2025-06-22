import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Navigate, useNavigate } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import { auth, database, firebaseapp } from '../Components/constant'
import { login, signup } from '../Components/authentication'
import { collection,addDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function Signup() {
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [mobile,setmobile]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const [error,seterror]=useState({})


const Signupfn=(e)=>{
  e.preventDefault();
  try{
    if(validation()){

    
      createUserWithEmailAndPassword(auth, email,password)
      .then(()=>{
        addDoc(collection(database, "users"), {
          username: username,
          mobile: mobile
        });
      })
      .then(()=>navigate("/"))
      .catch((error)=>seterror({name:'User Already signup'}))
      // login(email,password)
      
      
      //navigate("/")
    }
   
    
    
  }
  catch(er){
console.log(er.error)
  }
}
const validation=()=>{
  let  valid=true;
  const errors={}
  if(!username){
    errors.name="* Please enter the username";
    valid=false;
  }
  if(!email){
    errors.email="* Please fil the email";
    valid=false;
  }
  else if(!/\S+@\S+\.\S+/.test(email)){
errors.email="* Invalid Email id";
valid=false;
  }
  if(!mobile){
    errors.mobile="* Please Enter mobile number"
    valid=false;
  }
   else if(mobile.length!==10){
    errors.mobile="* Please Enter Valid mobile number"
    valid=false;
  }
    const specialCharRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

  if(!password){
    errors.password="* Please enter password";
    valid=false;

  }
  else if(password.length<7){
    errors.password="* password minimum 8 Characters"
  }
  else if(!specialCharRegex.test(password)){
    errors.password="*Password Should mix of numbers,letters & special characters"
  }
  seterror(errors)
  return valid;
}
  return (
    
    <div className='main-page'>
     <div className="transparent-login">
        <div className='sign-layout'>
          <h1>Sign Up</h1>
          <form onSubmit={Signupfn}>

          
            <input placeholder='Username' type="text" onChange={(e)=>{
              setusername( e.target.value);
              seterror((prev)=>({...prev,name:''}))
              }} value={username} />
            <br/>
            {error.name&&<span style={{color:'red',fontSize:'small'}}>{error.name}</span>}
            
            <input placeholder='Email Id'  onChange={(e)=>{setemail( e.target.value);
            seterror((prev)=>({...prev,email:''}))
              }} value={email} />
           <br/>
            {error.email&&<span style={{color:'red',fontSize:'small'}}>{error.email}</span>}
            <input placeholder='Mobile number' type="tel" onChange={(e)=>{
              setmobile( e.target.value);
            seterror((prev)=>({...prev,mobile:''}))
              }} value={mobile} />
           <br/>
            {error.mobile&&<span style={{color:'red',fontSize:'small'}}>{error.mobile}</span>}
            <input placeholder='Password' type="password" onChange={(e)=>{
              setpassword( e.target.value);
            seterror((prev)=>({...prev,password:''}))
              }} value={password} />
           <br/>
            {error.password&&<span style={{color:'red',fontSize:'small'}}>{error.password}</span>}
            <button className='sign-btn'>Sign Up</button>
            <p className='sign-txt'>Already Signin ? <a className='login-txt' onClick={()=>navigate('/login')}>LogIn</a></p>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Signup