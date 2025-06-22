import React, { useContext, useState } from 'react'
import './Navbar.css'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../constant'
import { logout } from '../authentication'
import { curuser as cuser } from '../authentication'
import { authcontext } from '../../App'
import { LanguageContext } from '../../Pages/Home'
function Navbar() {
  const navigate=useNavigate()
  const {user}=useContext(authcontext)
  
  const setlang =useContext(LanguageContext)
  return (
    <div className='navbar'>
    <img src="/logo.png" onClick={()=>navigate("/")} alt="loading..." className="logo" />
    
    {
user?(<button className='signin-btn' onClick={()=>{
  logout();
  navigate("/login")
}} >Sign out</button>
    ) 
:(<button className='signin-btn' onClick={()=>navigate('/login')} >Sign In</button>
  )  }
    
    <select className='lng-btn' onChange={(e)=>setlang(e.target.value)}>
      
      <option value={'hindi'}>Hindi</option>
      <option value={'English'} >English</option>
    </select>
    </div>
  )
}

export default Navbar
