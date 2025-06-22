import React, { createContext, useEffect, useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './Pages/Signup'
import LogIn from './Pages/Login'
import Navbar from './Components/Navbar/Navbar'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Components/constant'
const authcontext=createContext()
export default function App() {
  const [user,setuser]=useState()
  const [loading,setloading]=useState(true)
  useEffect(()=>{
onAuthStateChanged(auth,nowuser=>
  
  {setuser(nowuser)

    setloading(false)
  })
  },[])
  if(loading) return null;
  return (
    <div>
      <authcontext.Provider value={{user}}>
 
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/signup' element={<Signup/>} />
      <Route  path='/login' element={<LogIn/>} />
      </Routes>
     
      
      
      </BrowserRouter>
      </authcontext.Provider>
      
    </div>
  )
}
export {authcontext}